import React from 'react';
import Loading from '../Loading/Loading';
import './CardAlbum.css';

class CardAlbum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json(console.log(response), 2000))
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
    }

    render() {
        var classNames = require('classnames');
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <Loading />
        } else {
            return (
                <>
                    {items.map(item => (
                        <div className="col-12 col-sm-12 col-md-6 col-xl-4 col-lg-4">
                            <div key={item.id} className={`card card-album bg-dark m-2 p-1 ${classNames({
                                "border-success": item.albumId === 1,
                                "border-primary": item.albumId === 2,
                                "border-purple": item.albumId === 3,
                                "border-dark": "",
                            })}`}>
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
                    ))};
                </>
            );
        }
    }
}

export default CardAlbum;