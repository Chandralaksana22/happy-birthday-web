<template>
  <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img :src="gifImage" class="max-w-[17rem] md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-xl lg:text-5xl font-bold max-w-[17rem] md:max-w-md lg:max-w-lg">Welcome to the Happy Birthday Web!</h1>
      <p class="py-6 max-w-[17rem] md:max-w-md lg:max-w-lg">Enter the Happy Birthday Web: Where Wishes Come to Life!</p>
      <a class="btn btn-primary" @click="startForm">Get Started</a>
    </div>
  </div>
</div>
</template>

<script>
import gifImage from '@/assets/Happy_birthday.gif';
export default {
  name: 'LandingPage',
  data() {
    return {
      gifImage: gifImage
    };
  },
  methods: {
    startForm() {
      this.$router.push('/form')
    },
  },
}
</script>
