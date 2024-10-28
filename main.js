const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(true)
        const inventory  = ref(100)
        const details = ref([
                    '50% cotton',
                    '30% wool',
                    '20% polyester'
                    ])
                    const onSale = ref(true)
                    const variants = ref([
                        { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                        { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
                    ])
                    const sizes = ref([
                        'S',
                        'M',
                        'L'
                    ])
                    const cart = ref(0)
                    function addToCart() {
                        cart.value +=1
                        }
                        function updateImage(variantImage){
                           image.value = variantImage
                        }
                        const toggleInStock = () => {
                            inStock.value = !inStock.value;
                        }

            
        return {
            product,
            image,
            inStock,
            inventory,
            details,
            onSale,
            variants,
            sizes,
            cart,
            addToCart,
            updateImage,
            toggleInStock   

        }
       
    }
   
    
}).mount('#app')