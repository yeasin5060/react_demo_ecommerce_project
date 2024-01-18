import React from 'react'
import './GiftCardQuestions.css'
import Minihead from '../../../../Component/Miniheading/Minihead'
import Pera from '../../../../Component/Pera/Pera'

let arrayquestion = [
    {
        id : 1 ,
        head : "What can Amazon Gift Cards be redeemed towards?",
        pera : "Amazon Gift Cards are redeemable towards the purchase of millions of eligible goods and services provided by Amazon.com Services LLC and its affiliates on www.amazon.com, or certain of its affiliated properties, such as smile.amazon.com. Eligible goods and services are subject to change in our sole discretion."
    },
    {
        id : 2 ,
        head : "Are there any shipping costs on Amazon Gift Cards?",
        pera : "Physical Amazon.com gift cards (except Anytime Gift Cards) are delivered with FREE One-Day shipping when you select One-Day shipping at checkout. For more information, check this page."
    },
    {
        id : 3 ,
        head : "Are there any fees or expiration date to use Amazon Gift Cards?",
        pera : "Amazon Gift Cards have no fees and no expiration date."
    },
    {
        id : 4 ,
        head : "Amazon Gift Cards have no fees and no expiration date.",
        pera : "Beware of gift card scams. Do not provide any gift card details (such as the claim code) to someone you do not know or trust. Never use Amazon.com Gift Cards for payment outside of Amazon or its affiliated stores, and never use gift cards for other retailers and brands outside of their stores. Please visit this page for information or if you think you have been the target of a gift card scam.Back to top"
    },
]

const GiftCardQuestions = () => {
  return (
   <section id='giftcard_question'>
        <div className='container'>
            <div className='giftcard_question_wrapper'>
                <div className='giftcard_question_contant_head'>
                    <Minihead text="Frequently Asked Questions" style="question_contant_head"/>
                </div>
                <div className='giftcard_question_small_contant_wrapper'>
                    {
                        arrayquestion.map((item , index )=>(
                            <div key={index} className='giftcard_question_small_contant'>
                                <h4 className='giftcard_question_small_contant_head'>{item.head}</h4>
                                <Pera text={item.pera} style="giftcard_question_small_contant_pera"/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
   </section>
  )
}

export default GiftCardQuestions