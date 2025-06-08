import React, { createContext, useReducer, useEffect } from "react"

const CartContext = createContext()

const initialState = JSON.parse(localStorage.getItem("cart")) || []

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const exists = state.find(item => item.id === action.product.id)
      if (exists) {
        return state.map(item =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.product, quantity: 1 }]
    case "REMOVE_FROM_CART":
      return state.filter(item => item.id !== action.id)
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext