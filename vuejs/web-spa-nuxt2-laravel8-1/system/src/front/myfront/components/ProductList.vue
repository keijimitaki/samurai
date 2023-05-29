<template>
  <div class="bg-white">
    <div class="flex justify-center pt-4">
      <p class="text-2xl">Products</p>
    </div>
    <div class="flex justify-start mx-auto max-w-2xl px-4 pt-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div>
        <stripe-checkout
          ref="checkoutRef"
          :pk="pk"
          :mode="mode"
          :line-items="lineItems"      
          :successUrl="successUrl"
          :cancelUrl="cancelUrl"
        />
        <button @click="checkout"><span class="underline decoration-4 decoration-sky-500">ポイント購入</span></button>

      </div>

    </div>

    <div class="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <nuxt-link to="/">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
            </div>
            <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
            <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
          </nuxt-link>
        </a>
      </div>
    </div>


    <div class="flex justify-end mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <div>
        <button @click="goElementsInput"><span class="underline decoration-4 decoration-rose-500">Elements検証</span></button>
      </div>

    </div>


  </div>

</template>

<script>

export default {

  name: 'NuxtProductList',
  data () {
    this.pk = process.env.STRIPE_PK;      
    return {
      products: [
        {
          id: 1,
          name: 'Earthen Bottle',
          href: '#',
          price: '$48',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '#',
          price: '$89',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Machined Mechanical Pencil',
          href: '#',
          price: '$35',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        
      ],
      lineItems: [
        {
          price: 'price_1N9y3BBfCVZgAE4edLCfslHg',
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: 'http://localhost:3000/thanks/',
      cancelUrl: 'http://localhost:3000',    
      
      //successUrl: 'http://localhost:1321/thanks/',
      //cancelUrl: 'http://localhost:1321/',
    }
  },
  methods: {
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout();
    },

    goElementsInput () {
      window.location.href = 'http://localhost:3000/elements/';
    },    
  },  

}
</script>