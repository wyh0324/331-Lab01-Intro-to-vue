const productDetails = {
  template:
  /*html*/
  `
<div class="product-display">
      <div class="product-container">
          <div class="product-image">
              <img :src="image">
          </div>
      </div>
      <div class="product-info">
      <a v-bind:href="producurl">
          <h1>{{title}}</h1>
          </a>
          <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory > 0">Almost out of Stock</p>
          <p v-else>Out of Stock</p>
          <p v-if="onSale">{{ saleMessage }}</p>
          <p>Shipping: {{shipping}}</p>
          <ul>
              <li v-for="detail in details">{{detail}}</li>
          </ul>
          <ul>
            <p>size:</p>
              <li v-for="size in size">{{size}}</li>
          </ul>
          <div v-for="(variant,index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
              class="color-circle" :style="{backgroundColor: variant.color}">

          </div>
          <button class="button" :disabled='!inStock' @click="addToCart" :class="{disabledButton: !inStock}">Add To
              Cart</button>
      </div>
  </div>
 
`,
props: {
  premium: Boolean
  },
setup(props,{emit}) {
  const shipping = computed(()=>{
      if (props.premium){
           return 'Free'
          } else {
              return 30
          }
         
      })
                  
  const product = ref('Boots')
  const producurl = ref('http://www.camt.cmu.ac.th')
  const brand = ref('SE 331')
  const onSale = ref(true)
  // const image = ref('./assets/images/socks_green.jpg')
  // const inStock = ref(true)
  const inventory = ref(100)
  const size = ref([
      'L',
      'M',
      'S'
  ])
  const details = ref([
      '50% cotton',
      '30% wool',
      '20% polyester'
  ])
  const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
  ])
  const selectedVariant = ref(0)
  const cart = ref(0)
  function updateVariant(index) {
      selectedVariant.value = index;
  }
  const image = computed(() => {
      return variants.value[selectedVariant.value].image
  })
  const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity
  })
  function addToCart() {
      cart.value += 1
      emit('add-to-cart')
  }
  const title = computed(() => {
      return brand.value + ' ' + product.value
  })
  function updateImage(variantImage) {
      image.value = variantImage
  }
  const saleMessage = computed(() => {
      if (onSale.value) {
          return `${brand.value} ${product.value} is on sale`;
      }
      return '';
  })
  return {
      product,
      producurl,
      brand,
      title,
      onSale,
      saleMessage,
      image,
      inStock,
      size,
      inventory,
      details,
      variants,
      addToCart,
      updateImage,
      updateVariant,
      shipping
  }
}
}