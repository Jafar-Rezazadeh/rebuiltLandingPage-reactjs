//css
import "./style.css";
//icons
import { BsInstagram, BsFillPlayFill, BsTwitter, BsFacebook, BsYoutube, BsLinkedin } from "react-icons/bs";
import { VscChromeRestore } from "react-icons/vsc";
import { SlArrowRight } from "react-icons/sl";
//images
import img1 from "../../assets/1.jpg";

const Footer = () => {


    const images = []
    let index = 0
    for (index = 0; index < 9; index++) {
        images.push(
            <a href="/" key={index}>
                <div>
                    <img src={img1} alt="images" />
                    {/* condition for if it is video or picture */}
                    {(index % 2) === 0 ? <BsFillPlayFill /> : <VscChromeRestore />}
                </div>
            </a>
        )
    }
    //Todo: animate 
    return (
        <footer>
            <div className="footerContainer">
                <div className="row">
                    <div className="col1 col">
                        <h3>Id laboris</h3>
                        <div className="menu">
                            <ul>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                                <li><a href="/">Do ipsum elit</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col2 col">

                        <h3>Fugiat</h3>
                        <div className="menu">
                            <ul>
                                <li><a href="/">Turnkey fit out</a></li>
                                <li><a href="/">Ad ut officia</a></li>
                            </ul>
                        </div>

                    </div>
                    <div className="col3 col">
                        <h3>Fugiat</h3>
                        <div className="menu">
                            <ul>
                                <li><a href="/">Featured projects</a></li>
                                <li><a href="/">Sectors</a></li>
                                <li><a href="/">Markets</a></li>
                                <li><a href="/">All projects</a></li>
                                <li><a href="/">Video gallery</a></li>
                                <li><a href="/">Home </a></li>
                                <li><a href="/">Sitemap</a></li>
                                <li><a href="/">Dubai</a></li>
                                <li><a href="/">Abu Dhabi</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col4 col">
                        <div className="header">
                            <a href="/"><BsInstagram /></a>
                            <a href="/"><h3>Non excepteur</h3></a>
                        </div>
                        <div className="stores">
                            {images}
                        </div>
                        <div className="buttons">
                            <a href="/"><BsInstagram /> Follow on Instagram</a>
                        </div>
                    </div>
                </div>

                <div className="subscribe">
                    <form action="/">
                        <h3>Subscribe to our newsletter</h3>
                        <div>
                            <input type="text" required id="emailinput" name="emailinput" />
                            <button type="submit" id="submit"><SlArrowRight /></button>
                        </div>
                        <br />
                        <input type="checkbox" id="iagree" name="iagree" required />
                        <label htmlFor="iagree" >I agree to the <a href="/">blabla Policy agreement .</a></label>
                    </form>
                    <ul className="social-media-links">
                        <li><a href="/"><BsTwitter /></a></li>
                        <li><a href="/"><BsFacebook /></a></li>
                        <li><a href="/"><BsInstagram /></a></li>
                        <li><a href="/"><BsYoutube /></a></li>
                        <li><a href="/"><BsLinkedin /></a></li>
                    </ul>
                    <p>© 2023 blabla One Interiors</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;