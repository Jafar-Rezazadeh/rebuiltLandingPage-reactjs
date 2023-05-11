
import ImageSlider from "./imgSlider/slider";
import Banner from "./banner/banner";
import OurServices from "./ourServices/ourServices";
import CarouselPart from "./carousel-part/carousel-part";
import MediaSec from "./media-sec/media-sec";



const HomePage = () => {

    return (
        <div className="homePage">
            <ImageSlider />
            <Banner />
            <OurServices />
            <CarouselPart />
            <MediaSec />
        </div>
    );
}

export default HomePage;