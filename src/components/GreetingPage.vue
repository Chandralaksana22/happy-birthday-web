<template>
  <div
    class="hero min-h-screen"
    :style="{
      backgroundImage: 'url(' + bgHbd + ')',
      backgroundSize: '100% auto',
    }"
  >
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="w-auto">
        <h1 class="mb-5 text-xl lg:text-5xl font-bold">
          Hello {{ name }}, we wish you a happy birthday on
          {{ dateOfBirthFormatted }}
        </h1>
        <div v-if="isBirthday">
          <div class="spinwheel-container" v-if="!spinning && !showLuckySpin">
            <button
              class="btn"
              @click="showInputFields"
              v-if="!hasSpun && !showForm"
            >
              Enter your wishlist
            </button>
            <div v-if="showForm">
              <h3 class="font-bold text-lg">Enter your wishlist:</h3>
              <div
                class="segment"
                v-for="(gift, index) in giftOptions"
                :key="index"
                :style="`--segment-color: ${segmentColors[index]}`"
              >
                {{ gift }}
              </div>
              <input
                type="text"
                class="input input-bordered w-full max-w-xs mb-3 mt-3"
                v-model="wishlistInput"
                :placeholder="'Wishlist ' + (wishlistIndex + 1)"
              />
              <br />
              <button class="btn btn-primary mt-3" @click="saveWishlist">
                Save Wishlist
              </button>
            </div>
          </div>
          <div v-if="showLuckySpin && selectedGift">
            <h2 class="font-bold text-lg">
              CONGRATZ {{ name }}, YOU GOT {{ selectedGift }} FROM US!
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bgHbd from "@/assets/bg-hbd.jpg";
export default {
  data() {
    return {
      name: "",
      dateOfBirth: "",
      spinning: false,
      rotation: 0,
      bgHbd: bgHbd,
      hasSpun: false,
      countdown: "",
      giftOptions: [],
      segmentColors: [],
      showForm: false,
      wishlistInput: "",
      wishlistIndex: 0,
      showLuckySpin: false,
      selectedGift: ""
    };
  },
  computed: {
    isBirthday() {
      const today = new Date().toISOString().slice(0, 10);
      return today === this.dateOfBirth;
    },
    dateOfBirthFormatted() {
      if (this.dateOfBirth) {
        const [year, month, day] = this.dateOfBirth.split("-");
        return `${day}-${month}-${year}`;
      }
      return "undefined-undefined-undefined";
    },
  },
  methods: {
    showInputFields() {
      this.showForm = true;
    },
    saveWishlist() {
      if (this.wishlistInput) {
        this.giftOptions.push(this.wishlistInput);
        this.wishlistInput = "";
        this.wishlistIndex++;
        if (this.wishlistIndex >= 5) {
          this.showForm = false;
          this.showLuckySpin = true;
          this.spinWheel();
        }
      }
    },
    spinWheel() {
      this.spinning = true;
      const randomIndex = Math.floor(Math.random() * this.giftOptions.length);
      this.selectedGift = this.giftOptions[randomIndex];
      const rotationStep = 360 / this.giftOptions.length;
      this.rotation = (rotationStep * randomIndex) + (rotationStep / 2);
      setTimeout(() => {
        this.spinning = false;
        this.hasSpun = true;
      }, 5000);
    }
  },
  mounted() {
    this.name = localStorage.getItem("name");
    this.dateOfBirth = localStorage.getItem("dateOfBirth");
  },
};
</script>


