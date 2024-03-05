/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { getItems } from '../../utils/firebaseFunctions';
import CentralLoader from '../common/central-loader';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { productInfo } from '../../redux/action/product-info';
import { cursorPointer } from '../../styles/common';
import Space from '../common/space';
import Text from '../common/text';
import { wrapper } from './style';
import { Chip, Rating } from '@mui/material';
import { primaryBtn } from '../../styles/colors';
import { alignItemsCenter, dFlex, flexDirectionCol, justifyContenSpaceBet } from '../../styles/flexbox';
import { formatAmout } from '../../utils/functions';
import { sortArr, sortBrandArr, sortByRating, sortHigh2Low, sortLow2High } from './utils';

const PopularShoes = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [popularShoes, setPopularShoes] = useState([])
  const [sortedList, setSortedList] = useState([])
  const [sortOrd, setSortOrd] = useState('newest')
  const [gender, setGender] = useState('both')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getPopularShoes = async () => {
    setIsLoading(true)
    try {
      const res = await getItems('popularShoes')
      setPopularShoes(res)
      setSortedList(res)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChipClick = (value) => {
    setSortOrd(value)
    if (value === 'low2high') {
      sortLow2High(sortedList, setSortedList)
      return
    }
    if (value === 'high2low') {
      sortHigh2Low(sortedList, setSortedList)
      return
    }
    if (value === 'ratings') {
      sortByRating(sortedList, setSortedList)
      return
    }
    setSortedList(popularShoes)
  }

  useEffect(() => {
    getPopularShoes()
  }, [])

  const onProductClick = (item) => {
    dispatch(productInfo(item))
    navigate(`/${item?.name}/info`)
  }

  if (isLoading) {
    return <CentralLoader />
  }

  console.log(popularShoes?.[0], 'popular')

  return (
    <div style={{ padding: '0 4rem 0 6rem' }}>
      <Text fontSize={32} bold={700}>Popular now</Text>
      <Space value='32px' />
      <div css={[dFlex]}>
        <div css={[wrapper, css`flex-basis:80%`]}>
          {sortedList?.map((item) => (
            <div css={cursorPointer} onClick={() => onProductClick(item)}>
              <img src={item?.images[0]} alt={item?.name} style={{}} />
              <Space value='12px' />
              <div css={[dFlex, justifyContenSpaceBet, alignItemsCenter, css`width:15rem;`]}>
                <Text css={css`width: 15rem;`} fontSize={16} bold={500}>{formatAmout(item?.price)}</Text>
                <Rating value={item?.rating} precision={0.5} readOnly sx={{ color: primaryBtn }} />
              </div>
              <Space value='8px' />
              <Text css={css`width: 15rem;`} fontSize={16} bold={500}>{item?.name}</Text>
            </div>
          ))}
        </div>
        <div css={[dFlex, flexDirectionCol, css`flex-basis:20%`]}>
          <div>
            <Text fontSize={18} bold={700}>Sort</Text>
            <Space value={24} />
            <div css={[dFlex, css`gap:16px; flex-wrap:wrap;`]}>
              {sortArr.map(({ label, value }) => (
                <Chip label={label} variant={sortOrd === value ? 'filled' : "outlined"} onClick={() => handleChipClick(value)} />
              ))}
            </div>
            <Space value={32} />
            <div>
              <Text fontSize={18} bold={700}>Filter</Text>
              <div>
                <Space value={24} />
                <Text fontSize={16} bold={600}>Category</Text>
                <Space value={16} />
                <div css={[dFlex, css`gap:16px;`]}>
                  <Chip label='Men' variant={gender === 'men' ? 'filled' : "outlined"} onClick={() => setGender('men')} />
                  <Chip label='Women' variant={gender === 'women' ? 'filled' : "outlined"} onClick={() => setGender('women')} />
                </div>
              </div>
              <div>
                <Space value={24} />
                <Text fontSize={16} bold={600}>Category</Text>
                <Space value={16} />
                <div css={[dFlex, css`gap:16px; flex-wrap:wrap;`]}>
                  {sortBrandArr.map(({ label, value }) => (
                    <Chip label={label} variant={sortOrd === value ? 'filled' : "outlined"} onClick={() => handleChipClick(value)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularShoes
