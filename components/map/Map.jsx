import { Box, Text } from '@chakra-ui/layout'
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { IoLocation } from 'react-icons/io5';
import { useState } from 'react';
import { IconButton, Image } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

// destructuring the coordinates
const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  // Creating two state for fectching data when a location icon is clicked
  const [isCard, setIsCard] = useState(false)
  const [cardData, setCardData] = useState()
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC9WeFD1pgU_xK30QnK7OkgJdUbySxqOIU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
        onChildClick={(child) => {
          setCardData(places[child]);
          setIsCard(true);
        }}
      >

        {/* Set the location icon in the map */}
        {places?.map((place, i) => (
          <Box
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            position={'relative'}
            cursor={'pointer'}
          >
            <IoLocation color='red' fontSize={45} />
          </Box>
        ))}

        {/* Redering the card */}
        
        {isCard && isOpen  && (
          <Box
            width={'400px'}
            height={'250px'}
            bg={'whiteAlpha.900'}
            position={'absolute'}
            top={-12}
            left={0}
            shadow={'lg'}
            rounded={'lg'}
          >
         
            <IconButton
              icon={<CloseIcon />}
              variant="ghost"
              aria-label="Close"
              onClick={handleClose}
              position="absolute"
              top={2}
              right={2}
            />
         
            <Image
              objectFit={'cover'}
              width={'full'}
              height={'100px'}
              justifyContent={'space-around'}
              rounded={'sm'}
              mx={1}
              src={cardData.photo ? cardData.photo.images.large.url : 'https://cdn.dribbble.com/users/1012566/screenshots/4187820/media/985748436085f06bb2bd63686ff491a5.jpg?compress=1&resize=400x300&vertical=top'}
            /> 

            <Text textTransform={'uppercase'} width={40}
              fontWeight={'500'}
              fontSize={'md'}
              /* isTruncated */
              fontStyle={'bold'}
              whiteSpace={'nowrap'}
              cursor={'pointer'}
              px={5}
            >
              {cardData.name ? cardData.name : 'restaurant not found'}
            </Text>

            <Text textTransform={'uppercase'} width={40}
              fontWeight={'500'}
              fontSize={'md'}
              isTruncated 
              fontStyle={'bold'}
              whiteSpace={'nowrap'}
              cursor={'pointer'}
              px={5}
            >
              {cardData.address_obj.street1 ? cardData.address_obj.street1 : 'restaurant not found'}
            </Text>

            <Text textTransform={'uppercase'} width={40}
              fontWeight={'500'}
              fontSize={'md'}
              /* isTruncated */
              fontStyle={'bold'}
              whiteSpace={'nowrap'}
              cursor={'pointer'}
              px={5}
            >
             X {cardData.location_id ? cardData.location_id : 'restaurant not found'}
            </Text>

            <Text textTransform={'uppercase'} width={40}
            fontWeight={'500'}
            fontSize={'md'}
            /* isTruncated */
            fontStyle={'bold'}
            whiteSpace={'nowrap'}
            cursor={'pointer'}
            px={5}
          >
           Y {cardData.latitude ? cardData.latitude : 'restaurant not found'}
          </Text>
          </Box>
        )}
      </GoogleMapReact>
    </Box>
  )
}

export default Map
