import React from 'react';
import './CardAlbum.css';

const CardAlbum = ({ item }) => {
    <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-lg-4">
        <div className="card card-album bg-dark m-2 p-1">
            <img src={item.url} className="card-img-top" alt="large_photo" />
            <div className="card-body d-flex gx-1">
                <div className="col-4 m-0">
                    <img src={item.thumbnailUrl} className="card-img-top m-auto b-1" alt="thumbnail_photo" />
                </div>
                <div className="col-8 m-0">
                    <p className="card-text text-light">{item.title}</p>
                </div>
            </div>
        </div>
    </div>
}

export default CardAlbum;