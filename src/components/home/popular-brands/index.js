/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import Text from '../../common/text';
import Space from '../../common/space';
import { useNavigate } from 'react-router-dom';
import { popularBrandsWrapper } from './style';
import { useDispatch } from 'react-redux';
import { brandProducts, productInfo } from '../../../redux/action/product-info';
import { cursorPointer } from '../../../styles/common';

const PopularBrands = ({ popularBrands }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [suffledList, setSuffledList] = useState()

  const shuffle = (array) => {
    return array?.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setSuffledList(shuffle(popularBrands));
  }, [popularBrands]);

  const onProductClick = (item) => {
    dispatch(brandProducts(item))
    navigate(`/${item?.id}/products`)
  }

  console.log(popularBrands, 'popularBrands')

  return (
    <div >
      <Text fontSize={32} bold={700}>Popular brands</Text>
      <Space value='32px' />
      <div css={popularBrandsWrapper}>
        {suffledList?.map((item) => (
          <div css={cursorPointer} onClick={() => onProductClick(item)}>
            <img src={item?.image} alt={item?.name} />
            <Space value='12px' />
            <Text fontSize={16} bold={500}>{item?.name}</Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularBrands
