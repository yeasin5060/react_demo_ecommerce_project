import React from 'react'
import Allbajarmusicnavbar from './Allbajarmusicsection/Allbajarmusicnavbar/Allbajarmusicnavbar'
import Allbajarmusicbanar from './Allbajarmusicsection/Allbajarmusicbanar/Allbajarmusicbanar'
import Alldemandmusic from './Allbajarmusicsection/Alldemandmusic/Alldemandmusic'
import Allbajarmusicseemore from './Allbajarmusicsection/Allbajarmusicseemore/Allbajarmusicseemore'
import Allbajarmusicsubscribers from './Allbajarmusicsection/Allbajarmusicsubscribers/Allbajarmusicsubscribers'


const Allbajarmusic = () => {
  return (
   <>
    <Allbajarmusicnavbar/>
    <Allbajarmusicbanar/>
    <Alldemandmusic/>
    <Allbajarmusicseemore/>
    <Allbajarmusicsubscribers/>
   </>
  )
}

export default Allbajarmusic