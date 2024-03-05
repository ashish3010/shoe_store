export const productInfoReducer = (state, action) => {
  switch (action.type) {
    case 'PRODUCT_INFO':
      return action.payload
    default:
      return null
  }
}
export const brandProductReducer = (state, action) => {
  switch (action.type) {
    case 'BRAND_PRODUCTS':
      return action.payload
    default:
      return null
  }
}