import { Box, Flex, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const List = (places, isLoading) => {
  if (isLoading) return (
    <Flex
      direction={'column'}
      bg={'whiteAlpha.900'}
      width={'37vw'}
      height={'100vh'}
      position={'absolute'}
      left={0}
      top={0}
      zIndex={1}
      overflow='hidden'
      px={2}
    >
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>

      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>

      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>

      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
      <Box padding='6' boxShadow='lg' bg='white'>
        <SkeletonCircle size='10' />
        <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
      </Box>
    </Flex>
  )
}

export default List
