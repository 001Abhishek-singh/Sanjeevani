import style from '../../Static/Main/Service.module.css'
import Button from "./Button"
import doctor1 from '../../assets/doctor_1.jpg'
import doctor2 from '../../assets/doctor_2.jpg'
import doctor3 from '../../assets/doctor_3.jpg'
const Service = () => {
    return <>
    <div className="container-fluid">
        <div className="row d-flex justify-content-between align-items-center text-center px-4">
            <div className="col-md-4">
                <div className="image_container">
                    <img src={doctor2} className={`${style.image_style_second}`} alt="" />
                    <img src={doctor3} className={`${style.image_style_second}`} alt="" />
                </div>
            </div>
            <div className="col-md-4">
                <div className="image_container">
                    <img src={doctor1} alt="" className={`${style.image_style}`} />
                </div>
            </div>
            <div  className={`${style.service_text_container} col-md-4`}>
                <div>
                    <h2>Personal care <br /> & healthy living</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quas nesciunt? Iste quas alias, quam cupiditate incidunt illo doloremque hic.</p>
                    <Button />
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Service