import Feed from './Components/feedSection/Feed';
import Header from './Components/HeaderSection/Header';
import SearchVideoResult from './Components/SearchSection/SearchVideoResult';
import VideoDetails from './Components/videoSection/VideoDetails';
import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { AppContext } from './useContextHook/useContextApi';
import { ThemeProvider } from './useContextHook/useThreme';

function App() {
  return (
    <AppContext>
      <ThemeProvider>

    <BrowserRouter>
  
    <div className="flex flex-col w-full">
     
     <Header/>
      <Routes>
        <Route path='/' element={<Feed/>}/>
        <Route path='/search/:searchQuery' element={<SearchVideoResult/>}/>
        <Route path='/video/:categoryId/:videoId' element={<VideoDetails/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    </ThemeProvider>
    </AppContext>
  );
}

export default App;
