<template>
  <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Your Information</h1>
      <p class="py-6">Step into a World of Celebration: Enter Your Information and Unveil the Journey of Endless Birthdays!</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form class="card-body" @submit.prevent="submitForm">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" id="name" v-model="name" class="input input-bordered" required/>
        </div>
        <div class="form-control">
          <label class="label" for="dateOfBirth">
            <span class="label-text">Date of Birth:</span>
          </label>
          <input type="date" placeholder="Date of Birth" id="dateOfBirth" v-model="dateOfBirth" required class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button type="submit" class="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      dateOfBirth: '',
    };
  },
  methods: {
    submitForm() {
      // Simpan nilai name dan dateOfBirth ke localStorage
      localStorage.setItem('name', this.name);
      localStorage.setItem('dateOfBirth', this.dateOfBirth);

      // Lanjutkan ke halaman selanjutnya
      this.$router.push('/greeting');
    },
  },
};
</script>
