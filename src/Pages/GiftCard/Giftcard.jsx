import React from 'react'
import GiftCartNavbar from './GiftCardSection/GiftCartNavbar/GiftCartNavbar'
import GifyCartBanar from './GiftCardSection/GiftCartBanar/GifyCartBanar'
import GiftCardtrending from './GiftCardSection/GiftCardtrending/GiftCardtrending'
import GiftCardbalance from './GiftCardSection/GiftCardbalance/GiftCardbalance'
import GiftCartprevention from './GiftCardSection/GiftCardPrevention/GiftCartprevention'
import GiftCardQuestions from './GiftCardSection/GiftCardQuestions/GiftCardQuestions'

const Giftcard = () => {
  return (
    <>
        <GiftCartNavbar/>
        <GifyCartBanar/>
        <GiftCardtrending/>
        <GiftCardbalance/>
        <GiftCartprevention/>
        <GiftCardQuestions/>
    </>
  )
}

export default Giftcard