import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./imageSlider.module.css";


export default function ImageSlider({images}) {
    
    const listRef = useRef();
    const [currIndex, setCurrIndex] = useState(0);

    useEffect(() => {
        const listNode = listRef.current; // gets UL dom element with all its node children
        const imgNode = listNode.querySelectorAll("li > img")[currIndex]; // returns an array of the images nodes and with [currIndex] we select the item depending on the currIndex

        if(imgNode){
            imgNode.scrollIntoView({
                behavior: "smooth"
            });
        }

    }, [currIndex])


    function handleIncrement(){
        setCurrIndex(prev => prev < images.length - 1 ? prev + 1 : 0);
    }

    function handleDecrement(){
        setCurrIndex(prev => prev > 0 ? prev - 1 : images.length - 1);
    }



  return (
    <div className={styles.mainContainer} >
        <div className={styles.sliderContainer} > 

            <div className={styles.leftArrow} onClick={handleDecrement} >&#10092;</div>

            <div className={styles.rightArrow} onClick={handleIncrement} >&#10093;</div>

            <div className={styles.imagesContainer} >
                <ul ref={listRef} >
                    {
                        images.map((item) => <li key={item.id}>
                            <img src={item.image} alt={item.image} width={700} height={480} />
                        </li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}



ImageSlider.propTypes = {
    images: PropTypes.array
}