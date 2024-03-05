/**@jsxRuntime classic */
/**@jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react'
import { objectFitContain, w100 } from '../../styles/common';
import Space from '../common/space';
import Text from '../common/text';
import { dFlex, flexDirectionCol, justifyContenSpaceBet } from '../../styles/flexbox';
import { orangeSubText, primaryBtn } from '../../styles/colors';
import { CircularProgress, Rating } from '@mui/material';
import { doc, getDoc } from 'firebase/firestore';
import { fireStore } from '../../utils/firebaseConfig';

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState()
  const [loading, setloading] = useState(false)
  const { banner, outStory, members, values, testimonialsHeading, testimonials } = aboutUsData || {}
  const { heading: ourStoryHeading, subHeading: ourStorySubHeading } = outStory || {}
  const { heading: valuesHeading, values: valuesList } = values || {}

  const getData = async () => {
    setloading(true)
    const docRef = doc(fireStore, 'about-us/page/');
    const docSnap = await getDoc(docRef);
    setAboutUsData(docSnap.data())
    setloading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CircularProgress />
      </div>
    )
  }


  return (
    <div style={{ padding: '0 10rem' }}>
      <div>
        <img src={banner} css={[w100, objectFitContain]} />
        <Space value='40px' />
        <Text fontSize={32} bold={700}>{ourStoryHeading}</Text>
        <Space value='12px' />
        <Text fontSize={16}>{ourStorySubHeading}</Text>
        <Space value='40px' />
        <div css={[dFlex, justifyContenSpaceBet, css`gap:16px`]}>
          {members?.map(({ name, image, about }) => (
            <div css={[dFlex, flexDirectionCol, css`gap:12px; flex-basis:25%;`]}>
              <img src={image} style={{ width: '100%', heigh: '100%', obJectFit: 'fill' }} />
              <Text fontSize={16} bold={600}>{name}</Text>
              <Text fontSize={14} color={orangeSubText}>{about}</Text>
            </div>
          ))}
        </div>
        <Space value='40px' />
        <Text fontSize={32} bold={700}>{valuesHeading}</Text>
        <Space value='24px' />
        <div css={[dFlex, justifyContenSpaceBet, css`gap:16px`]}>
          {valuesList?.map(({ valueHeading, image, valueSubHeading }) => (
            <div css={[dFlex, flexDirectionCol, css`gap:12px; flex-basis:20%;`]}>
              <img src={image} style={{ width: '100%', heigh: '100%', obJectFit: 'fill' }} />
              <Text fontSize={16} bold={600}>{valueHeading}</Text>
              <Text fontSize={14} color={orangeSubText}>{valueSubHeading}</Text>
            </div>
          ))}
        </div>
        <Space value='40px' />
        <Text fontSize={32} bold={700}>{testimonialsHeading}</Text>
        <Space value='30px' />
        {testimonials?.map(({ name, date, rating, feedback }, index, { length }) => (
          <div>
            <Text fontSize={16} bold={600}>{name}</Text>
            <Text fontSize={14} color={orangeSubText}>{date}</Text>
            <Rating value={rating} precision={0.5} readOnly sx={{ color: primaryBtn }} />
            <Space value='4px' />
            <Text fontSize={16}>{feedback}</Text>
            <Space value='24px' />
          </div>
        ))}
      </div>
      <Space value='32px' />
    </div>
  )
}

export default AboutUs
