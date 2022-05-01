# IMAZER

<b>

`A WEBASSEMBLY VUE APP, TO CONVERT AN IMAGE TO ITS GRAYSCALE.`

<br>

- The web app, was made with :
    - [Vite](https://github.com/vitejs/vite) : next generation frontend tooling
    - [Vue](https://vuejs.org), naturally
    - [UnoCSS](https://github.com/unocss/unocss#unocss) : the instant on-demand Atomic CSS engine
    - [vite-plugin-rsw](https://github.com/rwasm/vite-plugin-rsw) : the wasm-pack plugin for Vite

<b>

- The Rust WebAssembly crate, was made with :
    - [Rust](https://www.rust-lang.org/learn/get-started), naturally
        - with the [wasm-bindgen](https://crates.io/crates/wasm-bindgen), [web-sys](https://crates.io/crates/web-sys), [base64](https://crates.io/crates/base64) & [image](https://crates.io/crates/image) crates
    - [wasm-pack](https://github.com/rustwasm/wasm-pack) : “your favorite rust -> wasm workflow tool”
    - [rsw](https://github.com/rwasm/rsw-rs) : a command-line tool for automatically rebuilding local changes, based on the `wasm-pack` implementation

<br>

Try it out here: [imazer-wasm.netlify.app](https://imazer-wasm.netlify.app)
