import axios from "axios";



//Passing South west and North west as parameters
export const getPlacesDataApi = async (type, sw, ne) => {
    try {
        const {
            // Destruction to get only the data
            data: { data }
        } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '47cf072db8msh838a2d4d570342cp1589b3jsn5b06ad1c8059',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    } catch (error) {
        console.log(`Fetch data error: ${error}`);
    }
}