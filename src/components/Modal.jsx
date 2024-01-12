import React, {useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import images from "../assets/imageutils.js";
import "./modal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = () => {

     // Use the useParams hook to get the 'id' parameter from the URL 
    const { id } = useParams();

    const navigate = useNavigate();

    // Find the index of the image with the specified 'id':
    const [imageIndex, setImageIndex] = useState(images.findIndex((image)=> image.id === parseInt(id)));

    const handlePrev = () => {
        const newIndex = imageIndex > 0 ? imageIndex - 1 : images.length - 1;
        setImageIndex(newIndex);
        setImageIndex(newIndex);
        navigate(`/gallery/${images[imageIndex].id}`)
    };

    const handleNext = () => {
        const newIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0;
        setImageIndex(newIndex);
        navigate(`/gallery/${images[imageIndex].id}`)
    };


    return (
        <div className="modal-container">

             {/* Image display section */}
            <div className="modal">

               <img src={images[imageIndex].src} alt={images[imageIndex].name} />
               

            </div>
            
            {/* Navigation controls and close button */}
            <div className="navigation">

                <button className="prev" onClick={handlePrev}><FontAwesomeIcon icon={faArrowLeft} /></button>
                <button className="next" onClick={handleNext}><FontAwesomeIcon icon={faArrowRight} /></button>
                <Link to="/gallery"><button className="close"><FontAwesomeIcon icon={faTimes} /></button></Link>
                

            </div>
            
        </div>
    )
}

export default Modal;