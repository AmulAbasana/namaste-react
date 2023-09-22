import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
  },
  reducers: {
    addItem: (state, action) => {
      const key = action.payload.card.info.id;
      const value = current(state.items);
      let count = 1;
      console.log(value, value[key]);

      if (value[key]) {
        count = state.items[key].count + 1;
      }

      return {
        ...state,
        items: {
          ...state.items,
          [key]: { ...action.payload, count },
        },
      };
      //   state.items.push(action.payload);
    },

    removeItem: (state, action) => {
      const key = action.payload.card.info.id;
      //   const index = state.items.findIndex(
      //     (item) => item.card.info.id === action.payload.card.info.id
      //   );
      //   state.items.splice(index, 1);
      const count = state.items[key].count;
      if (count === 1) {
        delete state.items[key];
      } else {
        state.items[key].count = count - 1;
      }
    },

    clearCart: (state) => {
      return {
        ...state,
        items: {},
      };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
