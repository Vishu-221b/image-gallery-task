import React from "react";
import { Link } from  'react-router-dom';
import './home.css';
import painting from '../assets/images/painting.jpg';

const Home = ()  => {
    return (

        <div className="hero fade-enter">
        
       <div className="text-content">
            <h1>Pinak Image Gallery</h1>
            <p>Explore our collection of beautiful and high-quality images. From stunning landscapes and cute animals to inspiring cityscapes and more, there's something for everyone in our gallery.</p>

             <Link to="/gallery">
             <button>View Gallery</button>
             </Link>
        </div>

            <img src={painting} alt="Description of the image" />
        

        </div>
               
    )
}

export default Home;