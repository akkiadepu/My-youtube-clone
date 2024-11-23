import React from 'react'
import { useTheme } from '../../useContextHook/useThreme';
import { useAppContext } from '../../useContextHook/useContextApi';
import SideBar from '../SideBarSection/SideBar';
import VideoList from '../videoSection/VideoList';

const Feed = () => {

  const {loading,videoData} = useAppContext();
  const { isDarkMode } = useTheme();
  return (
    <div className={`flex flex-row h-screen ${isDarkMode ? "bg-gray-900 text-gray-300":"bg-white text-gray-800"}`}>
      <SideBar />
      <div className='w-full grow overflow-y-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-4 p-5 '>
        {
          !loading && videoData.map((item)=>(
            <div key={item?.id}>
              <VideoList video={item}/>

            </div>
          ))
        }
        </div>
        
      </div>
    </div>
  )
}

export default Feed