/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import Text from '../../common/text';
import Space from '../../common/space';
import { useNavigate } from 'react-router-dom';
import { popularShoesWrapper } from './style';
import { useDispatch } from 'react-redux';
import { productInfo } from '../../../redux/action/product-info';
import { cursorPointer } from '../../../styles/common';

const TrendingNow = ({ popularShoes }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [suffledList, setSuffledList] = useState()

  const shuffle = (array) => {
    return array?.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setSuffledList(shuffle(popularShoes));
  }, [popularShoes]);

  const onProductClick = (item) => {
    dispatch(productInfo(item))
    navigate(`/${item?.name}/info`)
  }

  return (
    <div>
      <Text fontSize={32} bold={700}>Trending now</Text>
      <Space value='32px' />
      <div css={popularShoesWrapper}>
        {suffledList?.map((item) => (
          <div css={cursorPointer} onClick={() => onProductClick(item)}>
            <img src={item?.images[0]} alt={item?.name} />
            <Space value='12px' />
            <Text fontSize={16} bold={500}>{item?.name}</Text>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingNow
