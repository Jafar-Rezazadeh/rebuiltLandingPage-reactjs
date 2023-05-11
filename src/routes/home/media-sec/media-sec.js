import { useInView, motion } from "framer-motion";
import { useRef } from "react";

//css
import "./style.css"
//images
import i1 from "../../../assets/6.jpg";
//icons
import { BsFillArrowRightCircleFill, BsPlayCircle } from "react-icons/bs"
import CountUp from "react-countup";



const MediaSec = () => {

    const containerRef = useRef(null)
    const contIsInView = useInView(containerRef, { once: true, amount: 0.5 })

    const textAnimate = useRef(null)
    const txtAniIsInView = useInView(textAnimate, { once: true, amount: 0.5 })

    return (
        <div className="media-sec">
            <div className="container" ref={containerRef}>
                <motion.h2
                    initial={{ opacity: 0, y: "100%" }}
                    animate={contIsInView && { opacity: 1, y: 0, transition: { type: "spring", duration: 1, delay: 0.3 } }}
                >Media</motion.h2>
                <div className="row">
                    <motion.div className="columnLeft"
                        initial={{ opacity: 0, y: "50%" }}
                        animate={contIsInView && { opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 0.5 } }}
                    >
                        <a href="/">
                            <img src={i1} alt="images 1" />
                            <BsPlayCircle className="playIcon" />
                            <div className="desc">
                                <h1>Consectetur do officia esse do consectetur eiusmod anim laborum dolor duis.</h1>
                            </div>
                        </a>
                    </motion.div>
                    <motion.div className="columnRight"
                        initial={{ opacity: 0, y: "100%" }}
                        animate={contIsInView && { opacity: 1, y: 0, transition: { type: "spring", duration: 1.5, delay: 1 } }}
                    >
                        <div className="row">
                            <a href="/">
                                <article>
                                    <ul>
                                        <li className="date">11/2/2023</li>
                                        <li>Anim cillum </li>
                                    </ul>
                                    <h3>Exercitation est exercitation est deserunt in irure reprehenderit nisi proident.</h3>
                                    <BsFillArrowRightCircleFill className="arrowIcon" />
                                </article>
                            </a>
                            <a href="/">
                                <article>
                                    <ul>
                                        <li className="date">11/2/2023</li>
                                        <li>Anim cillum </li>
                                    </ul>
                                    <h3>Exercitation est exercitation est deserunt in irure reprehenderit nisi proident.</h3>
                                    <BsFillArrowRightCircleFill className="arrowIcon" />
                                </article>
                            </a>
                        </div>
                    </motion.div>
                </div>

            </div>

            <div className="text-animate" ref={textAnimate}>
                {txtAniIsInView && <>
                    <motion.h2
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2.3 } }}
                    >Laborum do esse aliquip</motion.h2>
                    <div className="row">

                        <motion.div className="item"
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2.3, delay: 0.5 } }}
                        >
                            <span>
                                <CountUp
                                    start={0}
                                    end={1700}
                                    duration={1}
                                    delay={1}
                                    decimal=","
                                />+
                            </span>
                            <p>Et et velit consectetur</p>
                        </motion.div>
                        <motion.div className="item"
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2.3, delay: 1 } }}
                        >
                            <span>
                                <CountUp
                                    start={0}
                                    end={7}
                                    duration={1}
                                    decimal=","
                                    delay={1.5}
                                />
                            </span>
                            <p>consectetur</p>
                        </motion.div>
                        <motion.div className="item"
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2.3, delay: 1.5 } }}
                        >
                            <span>
                                <CountUp
                                    start={0}
                                    end={520000}
                                    duration={1}
                                    decimal=","
                                    delay={2.5}
                                />
                            </span>
                            <p>Elit ipsum</p>
                        </motion.div>
                        <motion.div className="item"
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0, transition: { type: "spring", duration: 2.3, delay: 2 } }}
                        >
                            <span>
                                <CountUp
                                    start={0}
                                    end={132}
                                    duration={1}
                                    decimal=","
                                    delay={3.5}
                                />m
                            </span>
                            <p>Cillum labore</p>
                        </motion.div>


                    </div>
                </>}
            </div>
        </div>
    );
}

export default MediaSec;