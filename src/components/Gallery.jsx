import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/imageutils.js';
import './gallery.css';

const Gallery = () => {
   return(

    <div className="gallery-container">
        
        <div className="text-container">
        <div className="link">
              <Link to="/">
                <button>Home</button>
              </Link>
           </div>
            <div className="text">
            <h1>Welcome to the Pinak Gallery</h1>
            <p>Our gallery showcases a diverse collection of projects that we've worked on.
                Each project is a testament to our commitment to quality and innovation. We invite you to explore our work and gain insights into our capabilities and expertise.
                Enjoy your journey through our creative endeavors.
            </p></div>
            
        </div>

        
        

        <div className="image-grid">
        {images.map((image, index) => {
            return (
                <Link to={`/gallery/${image.id}`} key={index} className="image-item">
                <div >

                    <img src={image.src} alt="sorry" />
                    
                </div>
                </Link>
            )
        })}
        <h3>The End.</h3>
        </div>
        

    </div>

     )
}

export default Gallery;