import { Flex } from '@chakra-ui/react'
import React from 'react'

const StoreDetails = ({ place }) => {
  return (
    <Flex>
      {place.name}
      {place.address}
      {place.phone}
    </Flex>
  )
}

export default StoreDetails
