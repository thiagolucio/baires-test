export const getPhotos = async page => {
    const photos = await (    
      await fetch(`https://jsonplaceholder.typicode.com/photos?page=${page}&results=50`)
    ).json();    
    return photos.results;
  };