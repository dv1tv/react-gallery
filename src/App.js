import './App.css';
import { useState, useEffect } from 'react';
import useFetch from './hooks';
import Gallery from './components/Gallery';
import Album from './components/Album';


function App() {
   const [isOpen, setOpen] = useState(false);
   const [albumId, setAlbumId] = useState(null);

   const openAlbums = (newAlbumId) => {
     setOpen(true);
     setAlbumId(newAlbumId);
   }

   const closeAlbums = () => {
     setOpen(false);
   }
  
  return (
    <>
      {/* <Gallery /> */}
      {/* <Album /> */}
      {!isOpen ? <Album onOpenAlbums={openAlbums} /> : (<Gallery onCloseAlbum={closeAlbums} albumId={ albumId} />)}
    </>
  );
}

export default App;
