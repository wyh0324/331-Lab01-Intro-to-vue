const { createApp, ref,computed,reactive,toRefs } = Vue

const app = createApp({
    setup(){
        const cart = ref([])      
        const premium = ref(true)   
        const premiumMessage = computed(() =>{
            return premium.value ? 'You are a premium member!' : 'You are not a premium member.';
        });
        function updateCart(id) {
            cart.value.push(id)
               }
                
  
        function  removeFromCart(id) {
                if (this.cart[id]) {
                    if (this.cart[id] > 1) {
                        this.cart[id]--;
                    } else {
                        delete this.cart[id];
                    }
                }
            }

        return {
            cart,
            premium,
            premiumMessage,
            updateCart,
            removeFromCart,
        }
    }
  
})

app.component('product-display', productDisplay)
app.component('review-form', reviewForm)
app.component('review-list',reviewList)
app.mount('#app')