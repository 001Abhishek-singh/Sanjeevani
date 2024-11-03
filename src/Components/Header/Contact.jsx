import style from '../../Static/Header/Contact.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
const Contact = () => {
    return <>
        <div className={`${style.custom_style_contact} container-fluid `}>
        <div className="row d-flex justify-content-evenly align-items-center text-center py-2">
            <div className="col-md-4">
                <p>
                    <i> <MdOutlineEmail/> </i>
                    <span> 001abhishek287@gmail.com</span>    
                </p>
            </div>
            <div className="col-md-4">
                <p>
                    <i> < IoLocationOutline/> </i>
                    <span> Address :</span><span> Laxmi Nagar, New Delhi</span>
                </p>
            </div>
            <div className="col-md-4">
                <p>
                    <i> <IoCallOutline/> </i>
                    <span> Call Now : </span> <span className={`${style.Number_highlight}`}>7065840881</span>
                </p>
            </div>
        </div>
        </div>
    </>
}
export default Contact