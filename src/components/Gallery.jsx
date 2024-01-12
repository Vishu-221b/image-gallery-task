import React from 'react';
import { Link } from 'react-router-dom';
import images from '../assets/imageutils.js';
import './gallery.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'; 

const Gallery = () => {
   return(

    <div className="gallery-container">
        
        <div className="text-container">
            <div className="text">
            <h1>Welcome to the Pinak Gallery</h1>
            <p>Our gallery showcases a diverse collection of projects that we've worked on.
                Each project is a testament to our commitment to quality and innovation. We invite you to explore our work and gain insights into our capabilities and expertise.
                Enjoy your journey through our creative endeavors.
            </p></div>

            <div className="link">
              <Link to="/">
                <button><FontAwesomeIcon icon={faArrowLeft} />  return home</button>
              </Link>
           </div>
            
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
        </div>

    </div>

     )
}

export default Gallery;