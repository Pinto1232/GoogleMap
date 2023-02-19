import { Flex } from "@chakra-ui/layout";
import { useEffect } from "react";
import { useState } from "react";
import StoreDestails from "../components/allStoreDetails/StoreDetails";
import Map from "../components/map/Map";
import List from "../components/mapList/List";
import Header from "../components/sidebar/Header";
import { getPlacesDataApi } from "./api";


/* 
const places = [
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' },
  { name: 'Sample Place1', address: 'Address 1', phone: '093922220' }
]; */

const Home = () => {
  //Creating the coordinate state
  const [coordinates, setCoordinates] = useState({})
  // creating the type 
  const [type, setType] = useState('restaurants')
  const [randing, setRating] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [bounds, setBounds] = useState(null)
  // Create a state for places
  const [places, setPlaces] = useState([])


  /* Fetching current location of the user */
  useEffect(() => {
    // get the users current location when page is loaded
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      console.log({ latitude, longitude });
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])


  {/* Get the actuall data */ }
  useEffect(() => {
    setIsLoading(true)
    getPlacesDataApi(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data);
    setPlaces(data)
    setIsLoading(false)
    })
    // If something changes these will re-render again
  }, [coordinates, bounds])

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      maxWidth={"100vw"}
      maxHeight={"100vh"}
      position={"relative"}
    >
      <Header setType={setType} setCoordinates={setCoordinates} setRating={setRating} />

      <List places={places} isLoading={isLoading} />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
      />

      {/* <StoreDestails /> */}
    </Flex>
  )
}

export default Home;
