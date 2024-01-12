import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import images from "../assets/imageutils.js";
import "./modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(
    images.findIndex((image) => image.id === parseInt(id))
  );
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Use useEffect to toggle the transition class after the component is mounted
    setShowImage(true);
  }, []);

  
  const handlePrev = () => {
    const newIndex = imageIndex > 0 ? imageIndex - 1 : images.length - 1;
    setShowImage(false); // Hide image before transitioning to the next one
    setTimeout(() => {
      setImageIndex(newIndex);
      navigate(`/gallery/${images[newIndex].id}`);
      setShowImage(true); // Show the next image after a delay
    }, 500); // Adjust the delay as needed (should match the transition duration)
  };
  
  const handleNext = () => {
    const newIndex = imageIndex < images.length - 1 ? imageIndex + 1 : 0;
    setShowImage(false); // Hide image before transitioning to the next one
    setTimeout(() => {
      setImageIndex(newIndex);
      navigate(`/gallery/${images[newIndex].id}`);
      setShowImage(true); // Show the next image after a delay
    }, 500); // Adjust the delay as needed (should match the transition duration)
  };
  

  return (
    <div className="modal-container">
      {/* Image display section */}
      <div className="modal">
        <img
          src={images[imageIndex].src}
          alt={images[imageIndex].name}
          className={showImage ? "transition" : ""}
        />
      </div>

      {/* Navigation controls and close button */}
      <div className="navigation">
        <button className="prev" onClick={handlePrev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="next" onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <Link to="/gallery">
          <button className="close">
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Modal;
