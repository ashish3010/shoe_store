export const formatAmout = amount => {
  if (Number.isFinite(Number(amount))) {
    return `₹${amount}`
  }
  return `₹0`
}