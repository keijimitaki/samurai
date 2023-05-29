<template>

  <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

    <div class="m-2 mx-24">
      <div class="my-4">
        <label>Card Number</label>
        <div id="card-number" class="border p-4"></div>
      </div>

      <div class="my-4">
        <label>Card Expiry</label>
        <div id="card-expiry" class="border p-4"></div>
      </div>

      <div class="my-4">
        <label>Card CVC</span></label>
        <div id="card-cvc" class="border p-4"></div>
      </div>

      <div class="mt-8 mb-4">
        <div class="flex flex-row">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="createToken">Generate Token</button>
          <div id="card-error" class="pl-6"></div>
        </div>
      </div>

      <div class="mt-8">
        <div class="-mx-2 -my-1.5 flex">
          <button type="button" class="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
            <NuxtLink to="/">戻る</NuxtLink>
          </button>
        </div>
      </div>

    </div>

  </div>
  
</template>

<script>

export default {
  name: 'StripeElements',
  data () {
    return {
      token: null,
      cardNumber: null,
      cardExpiry: null,
      cardCvc: null,
    };
  },
  computed: {
    stripeElements () {
      return this.$stripe.elements();
    },
  },
  mounted () {
    // Style Object documentation here: https://stripe.com/docs/js/appendix/style
    const style = {
      base: {
        color: 'black',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    };
    this.cardNumber = this.stripeElements.create('cardNumber', { style });
    this.cardNumber.mount('#card-number');
    this.cardExpiry = this.stripeElements.create('cardExpiry', { style });
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = this.stripeElements.create('cardCvc', { style });
    this.cardCvc.mount('#card-cvc');
  },
  beforeDestroy () {
    this.cardNumber.destroy();
    this.cardExpiry.destroy();
    this.cardCvc.destroy();
  },
  methods: {
    async createToken () {
      const { token, error } = await this.$stripe.createToken(this.cardNumber);
      if (error) {
        // handle error here
        document.getElementById('card-error').innerHTML = error.message;
        return;
      }
      console.log(token);
      // handle the token
      // send it to your server
    },
  }
};
</script>

<style scoped>
#custom-button {
  height: 30px;
  outline: 1px solid grey;
  background-color: green;
  padding: 5px;
  color: white;
}

#card-error {
  color: red;
}
</style>