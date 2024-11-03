import style from '../../Static/Main/Testimonials.module.css'
import { FaBriefcaseMedical } from "react-icons/fa6";
import Carousel from 'react-bootstrap/Carousel';
const Testimonials = () => {
    return <>
        <Carousel className={`${style.Carousel_Custom}`}>

            <Carousel.Item>
                <div className={`${style.Carousel_Item_Custom_Style} col-md-4`}>
                    <div className={`${style.TestimonialsCustomStyle}`}>
                        <div className={`${style.testimonials_title_and_icon}`}>
                            <span className={`${style.testimonials_icon_size}`}> <FaBriefcaseMedical className={`${style.icon_size_testimonials}`}/> </span>
                            <span className={`${style.testimonials_title_size}`}> 24 Hours Service </span>
                        </div>
                        <p className={`${style.testimonials_description_size}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi itaque eius, qui error eos necessitatibus corporis, atque tempora obcaecati tenetur ut assumenda id veritatis eveniet dolorum a ducimus. Laboriosam 1.
                        </p>
                    </div>
                </div>
                <Carousel.Caption className={`${style.Caption_custom}`}>
                <h3>24x7 Service</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className={`${style.Carousel_Item_Custom_Style} col-md-4`}>
                    <div className={`${style.TestimonialsCustomStyle}`}>
                        <div className={`${style.testimonials_title_and_icon}`}>
                            <span className={`${style.testimonials_icon_size}`}> <FaBriefcaseMedical className={`${style.icon_size_testimonials}`}/> </span>
                            <span className={`${style.testimonials_title_size}`}> 24 Hours Service </span>
                        </div>
                        <p className={`${style.testimonials_description_size}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi itaque eius, qui error eos necessitatibus corporis, atque tempora obcaecati tenetur ut assumenda id veritatis eveniet dolorum a ducimus. Laboriosam 2.
                        </p>
                    </div>
                </div>
                <Carousel.Caption>
                <h3>5k+ Happy Patient</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <div className={`${style.Carousel_Item_Custom_Style} col-md-4`}>
                    <div className={`${style.TestimonialsCustomStyle}`}>
                        <div className={`${style.testimonials_title_and_icon}`}>
                            <span className={`${style.testimonials_icon_size}`}> <FaBriefcaseMedical className={`${style.icon_size_testimonials}`}/> </span>
                            <span className={`${style.testimonials_title_size}`}> 24 Hours Service </span>
                        </div>
                        <p className={`${style.testimonials_description_size}`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi itaque eius, qui error eos necessitatibus corporis, atque tempora obcaecati tenetur ut assumenda id veritatis eveniet dolorum a ducimus. Laboriosam 3.
                        </p>
                    </div>
                </div>
                <Carousel.Caption>
                <h3>47+ Branches across India</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>

    </Carousel>
    </>
}
export default Testimonials
