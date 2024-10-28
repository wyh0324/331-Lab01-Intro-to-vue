const { createApp, ref, computed } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const brand = ref('SE 331')
        const image = computed(() => {
            return variants.value[selectedVariant.value].image
            })
            const inStock = computed(() => {
             return variants.value[selectedVariant.value].quantity
             })
        
        const inventory  = ref(100)
        const details = ref([
                    '50% cotton',
                    '30% wool',
                    '20% polyester'
                    ])
                    const onSale = ref(true)
                    const variants = ref([
                        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
+                       { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
                    ])
                    const selectedVariant = ref(0)
                    const sizes = ref([
                        'S',
                        'M',
                        'L'
                    ])
                    const cart = ref(0)
                    function addToCart() {
                        cart.value +=1
                        }
                        const title = computed(() =>{
                           return brand.value + ' ' + product.value
                           })
                           const saleMessage = computed(() =>{
                            return onSale.value ? '${brand.value} ${product.value} is on sale' :'';
                            })
                        function updateImage(variantImage){
                           image.value = variantImage
                        }
                        const toggleInStock = () => {
                            inStock.value = !inStock.value;
                        }
                        function updateVariant(index){
                            selectedVariant.value = index;
                            }
                           
            
        return {
            title,
            image,
            inStock,
            inventory,
            details,
            onSale,
            variants,
            sizes,
            cart,
            updateVariant,
            addToCart,
            updateImage,
            toggleInStock,
               

        }
       
    }
   
    
}).mount('#app')