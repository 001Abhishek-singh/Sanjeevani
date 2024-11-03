import Testimonials from "./Testimonials"
import style from '../../Static/Main/FAQ.module.css'
const FAQ = () => {
    return <>
    <div className="container-fluid">
        <div className="row">
                <div className={`col-md-12 d-flex justify-content-center align-items-center text-center`}>
                    <div className={`text-center`}>
                        <h2 className={`${style.custom_heading}`}>We served over 5000+ <br /> Patients</h2>
                        <div className={`${style.Separator}`}></div>
                        <p className={`${style.custom_about_faq}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis neque nam <br /> totam soluta, ratione distinctio adipisci molestias sequi quaerat.</p>
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <Testimonials/>
                </div>
        </div>
    </div>
    </>
}
export default FAQ