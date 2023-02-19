import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import StoreDestails from "../components/allStoreDetails/StoreDestails";
import Map from "../components/map/Map";
import List from "../components/mapList/List";
import Header from "../components/sidebar/Header";



const places = [
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'},
  {name: 'Sample Place1', address: 'Address 1', phone: '093922220'}
];

const Home = () => {
  //Creating the coordinate state
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  // creating the type 
  const [type, setType] = useState('restaurants')
  const [randing, setRating] = useState("")
  const [isLoading, setIsLoading] = useState(true)

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

      <List places = {places} isLoading={isLoading} />

      <Map setCoordinates={setCoordinates} coordinates={coordinates} />

      {/* <StoreDestails /> */}
    </Flex>
  )
}

export default Home;
