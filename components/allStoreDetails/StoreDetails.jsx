import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const StoreDetails = ({ place }) => {
  return (
    <Flex
      bg={'whiteAlpha.900'}
      px={4}
      py={2}
      mb={2}
      shadow='lg'
      direction={'column'}
      alignItems={'start'}
      justifyContent={'space-between'}
    >
      <Flex justifyContent={'space-between'} width='full'>
        <Flex
          direction={'column'}
          justifyContent={'start'}
          alignItems={'start'}
          width={'full'}
          px={2}
        >
          <Flex
            alignItems={'center'}
            width={'full'}
            justifyContent={'space-between'}
          >
            <Text textTransform={'capitalise'} width={40}
                fontWeight={'500'}
                fontSize={'lg'}
                isTruncated
            >
              {place.name}
            </Text>

            <Text width={'45'} isTruncated fontWeight={'500'} fontSize={'sm'} color={'gray.500'}>
                {place.address}
            </Text>

            <Text whiteSpace={'nowrap'} fontWeight={'500'} fontSize={'sm'} color={'gray.500'}>
                {place.phone}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default StoreDetails
