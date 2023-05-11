import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
//css
import "./style.css"

//data
import carouselData from "../../../models/carouselData";
const renderItems = carouselData.map((item) => {
    return (
        <div className="item" key={item.id}>
            <a href="/">
                <div>
                    <img src={item.src} alt={item.alt} />
                    <h3>{item.label}</h3>
                </div>
            </a>
        </div>
    )
})



const CarouselPart = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.8 })

    return (
        <div className="carousel-container" ref={ref}>
            <motion.div className="heads"
                initial={{ opacity: 0, y: "500px" }}
                animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } }}
            >
                <a href="/">incididunt</a>
                <p>Amet reprehenderit incididunt culpa esse est nisi incididunt magna adipisicing.</p>
            </motion.div>

            <motion.div className="carousel-main-c"
                initial={{ opacity: 0, y: "500px" }}
                animate={isInView && { opacity: 1, y: 0, transition: { duration: 1, type: "spring", delay: 0.5 } }}
            >
                <Carousel
                    showArrows={true}
                    autoPlay={false}
                    infiniteLoop={true}
                    centerMode={true}
                    centerSlidePercentage={27}
                    showIndicators={false}
                    showThumbs={false}
                    showStatus={false}
                    selectedItem={3}
                    renderArrowNext={
                        (clickHandler, hasNext, labelPrev) =>
                            hasNext &&
                            (
                                <button className="arrowRight" onClick={clickHandler}>
                                    <SlArrowRight />
                                </button>)}
                    renderArrowPrev={
                        (clickHandler, hasPrev, labelPrev) => hasPrev &&
                            (
                                <button className="arrowLeft" onClick={clickHandler}>
                                    <SlArrowLeft />
                                </button>)}
                >
                    {renderItems}
                </Carousel>
            </motion.div>
        </div>
    );
}

export default CarouselPart;