import "./style.css"
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { animate } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr"
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, } from "react-icons/bs"

//variables
const animDelay = 0.5;



const NavBar = () => {
    //variables
    const [isMenuOpen, setisMenuOpen] = useState(false);
    const [isSearchBarOpen, setisSearchBarOpen] = useState(false);
    const [searchValue, setsearchValue] = useState("");
    const navigate = useNavigate()

    return (

        <div className="navComponent">
            <div className="navBar" id="navBar">
                <div className="navbuttons">

                    {/* menu button */}
                    {!isMenuOpen && <GiHamburgerMenu className="menuBtn" onClick={() => {
                        animate(".menuOpened", { height: "100%", opacity: 1, display: "flex" }, { duration: animDelay, ease: "easeInOut" })
                        setisMenuOpen(!isMenuOpen)
                    }} />}
                    {isMenuOpen && <GrClose className="menuBtn" onClick={() => {
                        animate(".menuOpened", { height: 0, opacity: 0 }, { duration: animDelay, ease: "easeInOut" }).then(() => {
                            animate(".menuOpened", { display: "none" })
                        })
                        setisMenuOpen(!isMenuOpen)
                    }} />}

                    {/* search button */}
                    {!isSearchBarOpen && < AiOutlineSearch className="searchBtn" onClick={() => {
                        animate(".searchBarInput", { width: "300px", padding: "30px 20px", border: "0px solid white" })
                        setisSearchBarOpen(!isSearchBarOpen)
                    }} />}
                    {isSearchBarOpen &&
                        <>
                            <AiOutlineSearch className="searchBtn" style={{ backgroundColor: "greenyellow", fill: "black" }} onClick={() => {

                                if (searchValue !== "") {
                                    navigate("/search", { state: { Svalue: searchValue } });
                                    setsearchValue("");
                                    animate(".searchBarInput", { padding: "30px 0px", width: "0", border: "0px solid white" });
                                    setisSearchBarOpen(!isSearchBarOpen);
                                } else if (searchValue === "") {
                                    animate(".searchBarInput", { border: "2px solid red" });
                                }

                            }} />
                            <GrClose className="serachBtnClose" onClick={() => {
                                animate(".searchBarInput", { padding: "30px 0px", width: "0", border: "0px solid white" })
                                setsearchValue("")
                                setisSearchBarOpen(!isSearchBarOpen)
                            }} />
                        </>
                    }

                    {/* search input */}
                    <input className="searchBarInput" type="search" value={searchValue} id="searchBarInput"
                        onChange={(e) => {
                            setsearchValue(e.target.value)

                        }}

                    />


                </div>
                <div className="navlogo" >
                    <Link to="/">buildsoftapp.ir</Link>
                </div>
            </div>
            {/* menu open */}
            <div className="menuOpened" >

                <div className="links">
                    <div className="locations">
                        <h3>Locations</h3>
                        <ul>
                            <li><Link>Iran</Link></li>
                            <li><Link>Iran</Link></li>
                            <li><Link>Iran</Link></li>
                        </ul>
                    </div>
                    <div className="media">
                        <h3>Media</h3>
                        <ul>
                            <li><Link>image gallery</Link></li>
                            <li><Link>video gallery</Link></li>
                            <li><Link>insights</Link></li>
                        </ul>
                    </div>
                    <div className="other">
                        <h3>Other</h3>
                        <ul>
                            <li><Link>partners portal</Link></li>
                            <li><Link>careers</Link></li>
                            <li><Link>contact us</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="socialMedia">
                    <BsTwitter className="socialMedia-icons" />
                    <BsFacebook className="socialMedia-icons" />
                    <BsInstagram className="socialMedia-icons" />
                    <BsLinkedin className="socialMedia-icons" />
                </div>
            </div>
            {/* searchBar */}
            <div className="searchBar">

            </div>
        </div>
    );
}

export default NavBar;