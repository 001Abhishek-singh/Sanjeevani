import logo from '../../assets/logo.jpg'
import style from '../../Static/Footer/Footer.module.css'
import { MdOutlineEmail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
const Footer = () => {
    return <>
        <div className="contrainer-fluid">
            <div className="row d-flex justify-content-evenly align-items-center text-center bg-light my-4">
                <div className="col-md-4">
                    <img src={logo} alt="#" />
                    <p className={`${style.about_style}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis dolorum animi repudiandae pariatur ab laboriosam, reprehenderit eum alias dolorem accusantium similique corporis velit quos molestiae neque sunt exercitationem harum blanditiis distinctio minus asperiores corrupti nesciunt! Exercitationem rem assumenda distinctio.</p>
                    <div className={`${style.social_icon}`}>
                        <span><FaLinkedin/></span>
                        <span><BsTwitterX/></span>
                        <span><IoLogoInstagram/></span>
                    </div>
                </div>
                <div className="col-md-2">
                    <p className={`${style.custom_title_style}`}>Department</p>
                    <ul className={`${style.custom_list_style}`}>
                        <li>Emergency</li>
                        <li>Radiology</li>
                        <li>Medicine</li>
                        <li>Surgery</li>
                        <li>Cardioc</li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <p className={`${style.custom_title_style}`}>Support</p>
                    <ul className={`${style.custom_list_style}`}>
                        <li>Terms & Conditions</li>
                        <li>Company Support</li>
                        <li>Company Licence</li>
                        <li>Privacy Policy</li>
                        <li>FAQuestions</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p className={`${style.custom_title_style}`}>Get In Touch</p>
                    <p> <MdOutlineEmail/> <span className={`${style.custom_contact_style}`}>Support Available for 24/7</span>
                        <br /> 
                        <span className='text-danger'>001abhishek287@gmail.com</span>
                    </p>
                    <p> <IoCallOutline/> <span className={`${style.custom_contact_style}`}>Mon to Fri : 08:30 - 18:00</span>
                        <br /> 
                        <span className='text-danger'>+91 7065840881</span>
                    </p>
                </div>
                <div className="col-12 col-md-6 my-4">
                    <p> <MdCopyright/> Copyright Reserved to Abhishek</p>
                </div>
                <div className="col-12 col-md-6">
                    <form action="#">
                        <input type="text" name="search" placeholder='search' id="" />
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Footer