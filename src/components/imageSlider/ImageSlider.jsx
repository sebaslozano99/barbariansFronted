import { useState } from "react";
import PropTypes from "prop-types";
import styles from "./imageSlider.module.css";



export default function ImageSlider({
    images
}) {

    const [currIndex, setCurrIndex] = useState(0);


    function handleIncrement(){
        setCurrIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    }

    function handleDecrement(){
        setCurrIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
    }



  return (
    <div className={styles.mainContainer}>

        <div className={styles.leftArrow} onClick={handleDecrement} >&#10092;</div>
        <div className={styles.rightArrow} onClick={handleIncrement} >&#10093;</div>

        <div className={styles.imagesContainer} >
            <img 
                key={currIndex}
                loading="lazy"
                src={`http://localhost:5000/${images?.at(currIndex)?.image_path}`} 
                alt={images[currIndex].image_id} 
                className={styles.image}
            />
        </div>

    </div>
  )
}



ImageSlider.propTypes = {
    images: PropTypes.array,
}