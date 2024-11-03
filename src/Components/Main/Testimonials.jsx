import style from '../../Static/Main/Testimonials.module.css'
import { FaBriefcaseMedical } from "react-icons/fa6";
const Testimonials = () => {
    return <>
        <div className="col-md-4">
            <div className={`${style.TestimonialsCustomStyle}`}>
                <div className={`${style.testimonials_title_and_icon}`}>
                    <span className={`${style.testimonials_icon_size}`}> <FaBriefcaseMedical className={`${style.icon_size_testimonials}`}/> </span>
                    <span className={`${style.testimonials_title_size}`}> 24 Hours Service </span>
                </div>
                    <p className={`${style.testimonials_description_size}`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus modi itaque eius, qui error eos necessitatibus corporis, atque tempora obcaecati tenetur ut assumenda id veritatis eveniet dolorum a ducimus. Laboriosam.
                    </p>
            </div>
        </div>
    </>
}
export default Testimonials