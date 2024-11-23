import axios from "axios"

const BASE_URL ="https://www.googleapis.com/youtube/v3"
const API_KEY = "AIzaSyD4OubfL3WisgdWq2ucRoO0U1m2QlKIYVQ"

export const fetchApiForYoutubeData = async(endpoints,params ={}) =>{
    try{
        const response = await axios.get(`${BASE_URL}/${endpoints}`,{
            params:{
                ...params,
                key:API_KEY,

            }
        })
        console.log('this my response',response.data);
        return response.data;
    }
    catch(error){
        console.log(error,'error fetching in youtube data');
    }
}
