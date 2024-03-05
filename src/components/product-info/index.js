/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react'
import { useSelector } from 'react-redux';

const ProductInfo = () => {
  const productInfo = useSelector(state => state.productInfoReducer)
  console.log(productInfo, 'user')
  return (
    <div>
      ProductInfo
    </div>
  )
}

export default ProductInfo
