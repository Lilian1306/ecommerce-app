import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
//import OurPolicy from '../components/OurPolicy'
//import NewsLetterBox from '../components/NewsLetterBox'

export default function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollection/>
      <BestSeller/>
    </div>
  )
}
