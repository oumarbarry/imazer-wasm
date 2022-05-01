use base64::{decode, encode};
use image::load_from_memory;
use image::ImageOutputFormat::Png;
use std::io::Cursor;
use wasm_bindgen::prelude::*;
use web_sys::console::log_1 as log;

#[wasm_bindgen]
pub fn grayscale(base64: &str) -> String {
    log(&"---from rust---".into());

    let base64_to_vector = decode(base64).unwrap();
    log(&"image decoded".into());

    let mut img = load_from_memory(&base64_to_vector).unwrap();

    img = img.grayscale();
    log(&"grayscale effect applied".into());

    let mut buffer = Cursor::new(Vec::new());
    img.write_to(&mut buffer, Png).unwrap();

    let new_base64 = encode(&buffer.get_ref());
    let as_data_url = format!("data:image/png;base64,{}", new_base64);

    return as_data_url;
}
