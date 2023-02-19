import { Flex, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import {BiSearch} from 'react-icons/bi'

const Header = ({setType, setCoordinates, setRating}) => {
  return (
    <Flex
      position={'absolute'}
      top={0}
      left={0}
      width={'full'}
      px={4}
      py={2}
      zIndex={101}
    >
    <Flex>
      <Autocomplete>
         <InputGroup width={'35vw'} shadow={'lg'}>
             <InputRightElement 
                  pointerEvents={'none'}
                  children={BiSearch}
             />
         </InputGroup>
      </Autocomplete>
    </Flex>
    </Flex>
  )
}

export default Header
