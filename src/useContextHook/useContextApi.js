// import React, { useContext, createContext, useState, useEffect } from "react";
// import { fetchApiForYoutubeData } from "../utilis/fetchApi";

// import { parsePath } from "react-router-dom";


// export const Context = createContext();

// export const AppContext = ({children}) => {
//     const [selectedCategory,setSelectedCategory] = useState('0');
//     const [loading,setLoading] = useState(false);
//     const [videoData,setVideoData] = useState([]);
//     const [mobileMenu,setMobileMenu] = useState(false);
    
//     const fetchYoutubeData = async() => {
//         setLoading(true);
//         try {
//             const res = await fetchApiForYoutubeData('videos',params);
//             setVideoData(res.items)
//             console.log(res.items)
            
//         } catch (error) {
//             console.error(error,'error in loading fetching youtube result');
//         }
//         finally{
//             setLoading(false);
//         }
//     }

//     useEffect(()=>{
//         if(selectedCategory){
//             if(selectedCategory === 'Home'){
//                 fetchYoutubeData({
//                     part:'snippet,contentDetails,statistics',
//                     regionCode:'IN',
//                     maxResults:10
//                 })
                
//             }
//             else{
//                 fetchYoutubeData({
//                     part:'snippet,contentDetails,statistics',
//                     regionCode:'IN',
//                     maxResults:10,
//                     videoCategoryId:selectedCategory
//                 })
//             }
//         }
//     },[selectedCategory])
// }

// return {
   
//     <Context.Provider
//     value={{
//         selectedCategory,
//         setSelectedCategory,
//         loading,
//         videoData,
//         mobileMenu,
//         setMobileMenu
//     }}
// >
//     {children}
// </Context.Provider>

// }


import React, { useContext, createContext, useState, useEffect } from "react";
import { fetchApiForYoutubeData } from "../utilis/fetchApi";

// Create a context
export const Context = createContext();

export const AppContext = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState('0');
    const [loading, setLoading] = useState(false);
    const [videoData, setVideoData] = useState([]);
    const [mobileMenu, setMobileMenu] = useState(false);

    // Function to fetch YouTube data
    const fetchYoutubeData = async (params) => {
        setLoading(true);
        try {
            const res = await fetchApiForYoutubeData('videos', params);
            setVideoData(res.items);
            console.log(res.items);
        } catch (error) {
            console.error(error, 'Error in loading YouTube data');
        } finally {
            setLoading(false);
        }
    };

    // useEffect to fetch data when selectedCategory changes
    useEffect(() => {
        if (selectedCategory) {
            if (selectedCategory === '0') {
                fetchYoutubeData({
                    part: 'snippet,contentDetails,statistics',
                    regionCode: 'IN',
                    maxResults: 50,
                    chart:"mostPopular",
                });
            } else {
                fetchYoutubeData({
                    part: 'snippet,contentDetails,statistics',
                    chart:"mostPopular",
                    regionCode: 'IN',
                    maxResults: 50,
                    videoCategoryId: selectedCategory,
                });
            }
        }
    }, [selectedCategory]);

    // Return the Context.Provider with a value prop
    return (
        <Context.Provider
            value={{
                selectedCategory,
                setSelectedCategory, 
                loading,
                setLoading,
                videoData,
                mobileMenu,
                setMobileMenu,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useAppContext = () =>{
    return useContext(Context);


}
