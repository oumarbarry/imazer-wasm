<script setup>
import init, { grayscale } from 'rsw-img-effects';

const input = $ref(null);
const placeholder = $ref(null);

const process_img = () => {
  const fileReader = new FileReader();
  fileReader.readAsDataURL(input.files[0]);

  fileReader.onload = () => {
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ''
    );
    // console.log(input.files[0], base64);

    let new_img = grayscale(base64);
    placeholder.setAttribute('src', new_img);
  };
};

init();
</script>

<template>
  <div class="bg bgs"></div>
  <div class="bg bgs"></div>
  <div class="bg bgs"></div>

  <div flex justify-center items-center h-screen relative z-100>
    <div
      bg-gray-50
      bg-opacity-95
      border-2
      border-black
      shadow-xl
      p-10
      text-center
      space-y-9
    >
      <h1 font-cursive text-5xl>Imazer</h1>
      <p>
        Want to apply an amazing 'grayscale' effect on your image ? Just upload
        it below. We'll take care of the rest.
      </p>

      <label
        block
        w-full
        mx-auto
        py-6
        bg-pink-600
        text-white
        font-bold
        cursor-pointer
      >
        <input
          ref="input"
          @change="process_img"
          type="file"
          accept=".png"
          hidden
        />
        Upload PNG Image
      </label>

      <img ref="placeholder" mx-auto aspect-ratio-video max-w-50vw max-h-50vw />
    </div>
  </div>
</template>

<style scoped>
.bg {
  animation: slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #404053 50%, #18161e 50%);
}

.bg:nth-child(2) {
  animation-direction: alternate-reverse;
  animation-duration: 4s;
}

.bg:nth-child(3) {
  animation-duration: 5s;
}

@keyframes slide {
  0% {
    transform: translateX(-25%);
  }
  100% {
    transform: translateX(25%);
  }
}
</style>
