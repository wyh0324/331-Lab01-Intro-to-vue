// const productDisplay = {

// template:
//   /*html*/
//         `
//         <div class="product-display">
//             <div class="product-container flex-row">
//                 <div class="product-image">
//                     <img :src="image" alt="" :class="{ 'out-of-stock-image': !inStock }">
//                 </div>
//                 <div class="product-info">
//                     <a :href="link"><h1>{{ title }}</h1></a>
//                     <p>{{ description }}</p>

//                     <p v-if="inventory > 10 && inStock">In Stock</p>
//                     <p v-else-if="inventory <= 10 && inventory > 0 && inStock">Almost out of Stock</p>
//                     <p v-else-if="!inStock">Out of Stock</p>
//                     <button @click="toggleInStock">Toggle In Stock</button>

//                     <p v-if="saleMessage">{{ saleMessage }}</p> <!-- 显示促销信息 -->
//                     <p v-else>Not on Sale</p>
//                     <button @click="toggleOnSale">Toggle On Sale</button>

//                     <ul>
//                         <li v-for="detail in details">{{ detail }}</li>
//                     </ul>

//                     <p>Size: {{ size.join(', ') }}</p>

//                     <div class="cart">Cart({{ cart }})</div>
//                     <button class="button" :disabled="!inStock" @click="addToCart">Add To Cart</button>
//                 </div>
//             </div>
//         </div>
//         <h1 v-if="variants.length">
//             <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"
//                  class="color-circle" :style="{ backgroundColor: variant.color }">
//                 {{ variant.color }}
//             </div>
//         </h1>

// `,


// setup(){
//     const product = ref('Boots');
//     const brand = ref('SE 331')
//     const description = ref('These boots are made for walking and provide comfort and durability for all your adventures.');
//     const link = ref('https://www.camt.cmu.ac.th/index.php/th/')
//     const inventory = ref(100);
//     const onSale = ref(false); 
//     const toggleOnSale = () => {onSale.value = !onSale.value;};
//     const toggleInStock = () => { inStock.value = !inStock.value;};
    
//     const details = ref([
//                     '50% cotton',
//                     '30% wool',
//                     '20% polyester'
//                 ])
        
//      const variants = ref([
//        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' ,quantity: 50 },
//         { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg', quantity: 0 },        
//     ]);
//     const selectedVariant = ref(0);

//     const size = ref(['S','M','L']);
//    // const cart = ref(0);
//     function addToCart() {cart.value +=1};

        
//     const title = computed(() =>{ return brand.value + ' ' + product.value })

    

//     const image = computed(() => {
//                     return variants.value[selectedVariant.value].image;
//                 })
//     const inStock = computed(() => { 
//                     return variants.value[selectedVariant.value].quantity;
//                 })

//     function updateVariant(index){selectedVariant.value = index;}
//     function updateImage(variantImage){image.value = variantImage}

//     const saleMessage = computed(() => {
//         if (onSale.value) {
//           return `${brand.value} ${product.value} is on sale`;
//         }
//         return '';
//       });

//     return {
//         description,
//         image,
//         link,
//         inStock,
//         inventory,
//         onSale,
//         toggleOnSale,
//         details,
//         updateVariant,
//         variants,
//         size,
//         cart,
//         addToCart,
//         updateImage,
//         toggleInStock,
//         title,     
//         selectedVariant,   
//         saleMessage,    
//     };
// }




// }