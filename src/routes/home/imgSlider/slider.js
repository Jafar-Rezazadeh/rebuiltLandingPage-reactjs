import HeroSlider, { Slide } from "hero-slider";

//css
import "./style.css"
// images
import img1 from "../../../assets/1.jpg"
import img2 from "../../../assets/2.jpg";
import img3 from "../../../assets/3.jpg";
import img4 from "../../../assets/4.jpg";
import img5 from "../../../assets/5.jpg";
import img6 from "../../../assets/6.jpg";
const images = [img1, img2, img3, img4, img5, img6]
const slides = [];
//slides 
for (let index = 0; index < images.length; index++) {
    slides.push(
        <Slide background={{ backgroundImageSrc: images[index], }} key={index} >
            <div className="slideContent">
                <h2>hello</h2>
                <h1>hello world</h1>
                <a href="/"> let's discover your projects </a>
            </div>
        </Slide>
    )
}


const ImageSlider = () => {
    return (
        <div className="image-slider">
            <HeroSlider
                autoplay={{
                    autoplayDuration: 6000,

                }}

                settings={{
                    sliderColor: "white",
                    sliderStyle: "white",

                }}
            >
                {slides}
            </HeroSlider>
        </div>
    );
}

export default ImageSlider;