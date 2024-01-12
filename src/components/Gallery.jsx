import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/imageutils.js';
import './gallery.css';

const Gallery = () => {
   return(

    <div className="gallery-container">
        Hi, I am Gallery
        <Link to="/">
            <button>return home</button>
        </Link>

        <div className="image-grid">
        {images.map((image, index) => {
            return (
                <Link to={`/gallery/${image.id}`} key={index} className="image-item">
                <div >

                    <img src={image.src} alt="sorry" />
                    <h2>{image.name}</h2>
                </div>
                </Link>
            )
        })}
        </div>

    </div>

     )
}

export default Gallery;