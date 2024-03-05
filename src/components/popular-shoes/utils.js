export const sortArr = [
  {
    label: 'Newest',
    value: 'newest'
  },
  {
    label: 'Low to high',
    value: 'low2high'
  },
  {
    label: 'High to low',
    value: 'high2low'
  },
  {
    label: 'Ratings',
    value: 'ratings'
  }
]

export const sortBrandArr = [
  {
    label: 'Nike',
    value: 'nike'
  },
  {
    label: 'Puma',
    value: 'puma'
  },
  {
    label: 'Adidas',
    value: 'adidas'
  },
  {
    label: 'Vans',
    value: 'vans'
  },
  {
    label: 'Reebok',
    value: 'reebok'
  },
]

export const sortLow2High = (arr, setArr) => {
  const sortedArr = arr.sort((a, b) => {
    let x = a.price;
    let y = b.price;
    if (x > y) {
      return 1
    }
    if (x < y) {
      return -1
    }
    return 0
  })
  setArr(sortedArr)
}

export const sortHigh2Low = (arr, setArr) => {
  const sortedArr = arr.sort((a, b) => {
    let x = a.price;
    let y = b.price;
    if (x < y) {
      return 1
    }
    if (x > y) {
      return -1
    }
    return 0
  })
  setArr(sortedArr)
}
export const sortByRating = (arr, setArr) => {
  const sortedArr = arr.sort((a, b) => {
    let x = a.rating;
    let y = b.rating;
    if (x < y) {
      return 1
    }
    if (x > y) {
      return -1
    }
    return 0
  })
  setArr(sortedArr)
}