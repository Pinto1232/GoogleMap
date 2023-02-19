import { Box } from '@chakra-ui/layout'
import React from 'react'
import GoogleMapReact from 'google-map-react'

// destructuring the coordinates
const Map = ({coordinates, setCoordinates, setBounds}) => {
  console.log(setCoordinates);
  return (
    <Box width={"full"} height={"full"}>
      <GoogleMapReact
        bootstrapURLKeys={{key : "AIzaSyC9WeFD1pgU_xK30QnK7OkgJdUbySxqOIU" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={15}
        margin={[50,50,50,50]}
        options={""}
        onChange={(e) => {
          setCoordinates({lat : e.center.lat, lng : e.center.lng})
          setBounds({ne : e.marginBounds.ne, sw : e.marginBounds.sw})
        }}
        onChildClick = {() => {}}
      >
      </GoogleMapReact>
    </Box>
  )
}

export default Map
