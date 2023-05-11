import { motion, useInView } from "framer-motion"
import { useRef } from "react"
// imgs
import i1 from "../../../assets/1.jpg"
import i2 from "../../../assets/2.jpg"
//css
import "./style.css"

const Banner = () => {
    // Todo: use framer motion to animate (useInView(ref,{ once:true , amount: 0.5 })) to when the banner on view
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.5 })

    return (
        <div className="banner" ref={ref}>
            {/* images */}
            <div className="left">
                <motion.div
                    className="shape1"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={isInView && { opacity: 1, x: 0, transition: { duration: 2, type: "spring" }, }}
                />
                <motion.img src={i1} alt="" className="img1"
                    initial={{ opacity: 0, x: "-100%" }}
                    animate={isInView && { opacity: 1, x: 0, transition: { duration: 2, type: "spring", delay: 0.5 } }}
                />
                <motion.img src={i2} alt="" className="img2"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={isInView && { opacity: 1, x: 0, transition: { duration: 2, type: "spring", delay: 1 } }}
                />
                <motion.div className="shape2"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={isInView && { opacity: 1, x: 0, transition: { duration: 2, type: "spring", delay: 1.5 } }}
                />
            </div>

            {/* contents */}
            <motion.div className="right"
                initial={{ opacity: 0, y: "100%" }}
                animate={isInView && { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } }}

            >
                <h1>Aliquip ex tempor anim consectetur eu sint irure Lorem</h1>
                <p>Veniam reprehenderit eu laborum sunt Aliquip ex tempor anim consectetur eu sint irure Lorem</p>
                <p>Mollit ea aliqua consequat exercitation laborum. Velit ipsum veniam consectetur dolore enim duis eu laborum eu aliquip elit velit nisi exercitation. Nulla proident elit amet magna elit ad minim commodo tempor. Esse eiusmod duis ullamco pariatur laborum. Velit eiusmod Lorem do eu ullamco ad sunt aliqua aliquip mollit.</p>
                <p>Veniam reprehenderit eu laborum sunt Aliquip ex tempor anim consectetur eu sint irure Lorem</p>
                <a href="/">more about us</a>
            </motion.div>
        </div>
    );
}

export default Banner;