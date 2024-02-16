export const userReducer = (state, action) => {
  switch (action.type) {
    case 'USER_DETAILS':
      return action.payload
    case 'LOGOUT':
      return null
    default:
      return 'Invalid Action'
  }
}

