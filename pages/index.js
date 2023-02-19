import { Flex } from "@chakra-ui/layout";
import { useState } from "react";
import StoreDestails from "../components/allStoreDetails/StoreDestails";
import Map from "../components/map/Map";
import List from "../components/mapList/List";
import Header from "../components/sidebar/Header";



const Home = () => {
  //Creating the coordinate state
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 })
  // creating the type 
  const [type, setType] = useState('mackdonald_stores')
  const [randing, setRating] = useState("")

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

      {/*<List /> */}

      <Map setCoordinates={setCoordinates} coordinates={coordinates} />

      {/* <StoreDestails /> */}
    </Flex>
  )
}

export default Home;
