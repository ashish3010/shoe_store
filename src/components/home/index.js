import React, { useEffect, useState } from 'react'
import { getItems } from '../../utils/firebaseFunctions'
import { CircularProgress } from '@mui/material'
import TrendingNow from './trending-now'
import PopularBrands from './popular-brands'
import Space from '../common/space'
import HomeBanner from './home-banner'
import Footer from './footer'
import CentralLoader from '../common/central-loader'

const HomePage = () => {
  const [isLoading, setIsLoading] = useState()
  const [homePageData, setHomePageData] = useState()
  const { popularShoes, popularBrands } = homePageData || {}

  const getPopularShoes = async () => {
    setIsLoading(true)
    const data = await Promise.allSettled([getItems('popularShoes'), getItems('brands')])
    const [popularShoes, popularBrands] = data;
    setHomePageData({ popularShoes: popularShoes?.value, popularBrands: popularBrands?.value })
    setIsLoading(false)
  }

  useEffect(() => {
    getPopularShoes()
  }, [])

  if (isLoading) {
    return <CentralLoader />
  }

  return (
    <>
      <div style={{ padding: '0 10rem' }}>
        <HomeBanner />
        <Space value='64px' />
        <TrendingNow popularShoes={popularShoes} />
        <Space value='64px' />
        <PopularBrands popularBrands={popularBrands} />
        <Space value='100px' />
      </div>
      <Footer />
    </>
  )
}

export default HomePage
