import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'


const options = {
    method: 'GET',
    params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
    },
    headers: {
        'X-RapidAPI-Key': '47cf072db8msh838a2d4d570342cp1589b3jsn5b06ad1c8059',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
};


//Passing South west and North west as parameters
export const getPlacesData = async (sw, ne) => {
    try {
      const {
        // Destruction to get only the data
        data: { data }
      } = await axios.get(URL, options);
      return data;
    } catch (error) {
        console.log(`Fetch data error: ${error}`);
    }
}