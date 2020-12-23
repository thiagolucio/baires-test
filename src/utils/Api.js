export const getPhotos = async page => {
    const photos = await (    
      await fetch(`https://jsonplaceholder.typicode.com/photos/?page=${page}&results=50`)
    ).json();
    console.log('RESULTADOS', photos.results);
    return photos.results;
  };