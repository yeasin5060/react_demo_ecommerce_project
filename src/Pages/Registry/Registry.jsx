import React from 'react'
import Registrynavbar from './RegistrySection/RegistryNavbar/Registrynavbar'
import Registrybanar from './RegistrySection/Registrybanar/Registrybanar'
import Unwrapform from './RegistrySection/Unwrapform/Unwrapform'
import Giftlist from './RegistrySection/Giftlist/Giftlist'
import Registrybanartwo from './RegistrySection/Registrybanartwo/Registrybanartwo'
import Reasons from './RegistrySection/Reasons/Reasons'


const Registry = () => {
  return (
   <>
      <Registrynavbar/>
      <Registrybanar/>
      <Unwrapform/>
      <Giftlist/>
      <Registrybanartwo/>
      <Reasons/>
   </>
  )
}

export default Registry