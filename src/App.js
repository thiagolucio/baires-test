import React, { useState, useEffect } from 'react';
import CardAlbum from './components/CardAlbum/CardAlbum';
import Header from './components/Header/Header';
import Loading from './components/Loading/Loading';
import './App.css';


import { getPhotos } from '../src/utils/Api';

function App() {

  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage(prev => prev + 1);
    }
  };

  useEffect(() => {
    const loadPhotos = async () => {
      setLoading(true);
      const newPhotos = await getPhotos(page);
      setPhotos((prev) => [...prev, ...newPhotos]);
      setLoading(false);
    }
    loadPhotos();
  }, [page]);

  return (
    <>
      <Header />
      <div className="container container-cards">
        <div className="row" onScroll={handleScroll}>
          {photos && photos.map((item) => <CardAlbum key={item.id} item={item} />)}
        </div>
          {loading && <Loading>Loading ...</Loading>}
      </div>
    </>
  );
}

export default App;
