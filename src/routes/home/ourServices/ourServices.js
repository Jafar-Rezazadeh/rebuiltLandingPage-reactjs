
import { animate, useInView, motion } from "framer-motion";
import { useRef } from "react";
//icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
//css
import "./style.css"
//images
import icon1 from "../../../assets/icons/service-icon-1.png";
import icon2 from "../../../assets/icons/service-icon-2.png";
// Todo: design the service section

const OurServices = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })
    function viewEnter() {
        animate(".items", { y: 0, opacity: 1 }, { type: "spring", duration: 2, stiffness: 30, ease: "easeInOut", delay: 0.3 })
    }
    if (isInView) {
        viewEnter()
    }

    //Todo: next section

    return (
        <div className="our-services" ref={ref}>
            <div className="container">
                <motion.h1
                    initial={{ y: "100%", opacity: 0 }}
                    animate={isInView && { y: 0, opacity: 1, transition: { type: "tween", duration: 0.5, ease: "easeInOut" } }}
                >our services</motion.h1>

                <motion.div className="items"
                    initial={{ y: "100%", opacity: 0 }}
                >
                    <div className="item">
                        <img src={icon1} alt="" />
                        <a href="/" className="title">Pariatur</a>
                        <p>Deserunt anim pariatur consectetur culpa et deserunt ut commodo cupidatat magna ad.Dolor aute fugiat est cupidatat aute excepteur amet laborum eiusmod.</p>
                        <a href="/" className="read-more">read more <MdOutlineKeyboardArrowRight /></a>
                    </div>

                    <div className="item">
                        <img src={icon2} alt="" />
                        <a href="/" className="title">Pariatur</a>
                        <p>Deserunt anim pariatur consectetur culpa et deserunt ut commodo cupidatat magna ad.Dolor aute fugiat est cupidatat aute excepteur amet laborum eiusmod.</p>
                        <a href="/" className="read-more">read more <MdOutlineKeyboardArrowRight /></a>
                    </div>

                </motion.div>

            </div>
        </div>

    );
}

export default OurServices;