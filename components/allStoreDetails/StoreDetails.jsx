import { Flex, Text, Image, Badge, Tooltip } from '@chakra-ui/react'
import { Rating } from '@material-ui/lab'
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

            <Image
              objectFit={'cover'}
              width={'35px'}
              height={'35px'}
              justifyContent={'space-around'}
              rounded={'sm'}
              mx={1}
              src={place.photo ? place.photo.images.large.url : 'https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?compress=1&resize=400x300&vertical=top'}
            />
            <Text textTransform={'capitalise'} width={40}
              fontWeight={'500'}
              fontSize={'lg'}
              isTruncated
              cursor={'pointer'}
            >
              {place.name ? place.name : 'restaurant not found'}
            </Text>
            <Text width={'45'} isTruncated fontWeight={'500'} fontSize={'md'} color={'gray.500'}>
              {place.address ? place.address : 'address not found'}
            </Text>

            <Text whiteSpace={'nowrap'} fontWeight={'500'} fontSize={'md'} color={'gray.500'}>
              {place.phone ? place.phone : 'icon not found'}
            </Text>
          </Flex>

          {/* Ratings */}
          <Flex alignItems={'center'} width={'full'}>
            <Rating size='small' value={Number(place.rating)} readOnly />
            <Text fontSize={'sm'}>{`(${place.num_reviews ? place.num_reviews : 'review not found'})`}</Text>
          </Flex>

          {/* Ranking */}
          <Flex
            fontSize={'sm'}
            color={'gray.400'}
            fontWeight={'500'}
          >
            {place.ranking}
          </Flex>

          {/* Open Status */}
          <Flex
            fontSize={'sm'}
            color={'gray.400'}
            fontWeight={'500'}
          >
            {place.open_now_text}
          </Flex>

          {
            place?.dietary_restrictions && (
              <Flex width={'full'} flexWrap={'wrap'}>
                {
                  place.dietary_restrictions.map((n, i) => (
                    <Badge colorScheme={'teal'} cursor={'pointer'}
                      key={i}
                      m={1}
                    >
                      {n.name}
                    </Badge>
                  ))
                }
              </Flex>
            )
          }
        </Flex>
      </Flex>
    </Flex>
  )
}

export default StoreDetails
