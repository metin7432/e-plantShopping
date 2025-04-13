import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
   
   
  },
  reducers: {
    addItem: (state, action) => {
     const {name} = action.payload;
     const itemExists = state.items.find((item) => item.name === name);
     if(itemExists) {
       state.items.map((item) => {
          if (item.name === name) {
            item.quantity++
      }
         
        })
      }else {
        action.payload.quantity = 1
        state.items.push(action.payload)
        
      }
     
     
     
    },

    decrementQuantity: (state, action) => {
      const {name} = action.payload;
      const itemExists = state.items.find((item) => item.name === name);
      if(itemExists) {
        state.items.map((item, index) => {
          if (item.name === name) {
            if(item.quantity === 1){
             const onay = confirm("Are you sure remove the cart")
             if(onay){
               state.items.splice(index, 1)

             }
            }
                item.quantity--
            
          }
          

        
        })
        
      }
   
    },
    incrementQuantity: (state, action) => {
      const {name} = action.payload;
      const itemExists = state.items.find((item) => item.name === name);
      if(itemExists) {
        state.items.map((item) => {
          if (item.name === name) {
            item.quantity++
          }
         
        })
      }
   
    },
    removeItem: (state, action) =>{
      const {name} = action.payload;
      const itemExists = state.items.find((item) => item.name === name);
      if(itemExists) {
        state.items.map((item ,index) => {
          if (item.name === name) {
           if (index > -1) {
             state.items.splice(index, 1)
           }
           
          }
         
        })
      }
    },
   

  },
});

export const { addItem, removeItem,  incrementQuantity, decrementQuantity, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
