import Logo from '../../assets/logo.jpg'
import style from '../../Static/Header/Navbar.module.css'
import { IoIosArrowDropdown } from "react-icons/io";
import { CiCircleChevUp } from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
    const [value, setValue] = useState(false);
    const [secondValue, setsecondValue] = useState(false);
    const [thirdValue, setthirdValue] = useState(false);

    const HandleShowNavList = () => {
        setValue(!value);
        console.log(value)
    }

    const SHandleShowNavList = () => {
        setsecondValue(!secondValue)
    }

    const THandleShowNavList = () => {
        setthirdValue(!thirdValue);
    }
    return <>
    <div className="container-fluid">
        <div className="row d-flex justify-content-evenly align-items-center text-center py-2">
            <div className="col-md-4">
                <img src={Logo} width={240} height={100} alt="" />
            </div>
            <div className="col-md-8">
                <ul className={`${style.list_styling}`}>
                    <li className={`${style.list_effect_styling}`}>Home</li>
                    <li className={`${style.list_effect_styling}`}>About</li>
                    <li className={`${style.list_effect_styling}`}>Services</li>
                    <li className={`${style.list_effect_styling}`} onClick={HandleShowNavList}>Department {value == true? <CiCircleChevUp/>:<IoIosArrowDropdown/>} 
                        {value == true? 
                            <ol className={`${style.Inner_list_styling}`}>
                                <li className={`${style.inner_list_style}`}>Surgeon</li>
                                <li className={`${style.inner_list_style}`}>Cardiologist</li>
                                <li className={`${style.inner_list_style}`}>Nephrologist</li>
                            </ol> : <ol className={`${style.Close_Inner_list_styling}`}>
                                <li>Surgeon</li>
                                <li>Cardiologist</li>
                                <li>Nephrologist</li>
                            </ol>}
                    </li>
                    <li className={`${style.list_effect_styling}`} onClick={SHandleShowNavList}>Doctors {secondValue == true? <CiCircleChevUp/>:<IoIosArrowDropdown/>}
                    {secondValue == true? <ol className={`${style.Inner_list_styling}`}>
                        <li className={`${style.inner_list_style}`}>Medicine</li>
                        <li className={`${style.inner_list_style}`}>Appointment</li>
                        <li className={`${style.inner_list_style}`}>Report</li>
                        <li className={`${style.inner_list_style}`}>Help</li>
                    </ol> : <ol className={`${style.Close_Inner_list_styling}`}>
                        <li>Medicine</li>
                        <li>Appointment</li>
                        <li>Report</li>
                        <li>Help</li>
                    </ol>}
                    
                    </li>
                    <li className={`${style.list_effect_styling}`} onClick={THandleShowNavList}>Blog {thirdValue == true? <CiCircleChevUp/>:<IoIosArrowDropdown/>}
                    {thirdValue == true? <ol className={`${style.Inner_list_styling}`}>
                        <li className={`${style.inner_list_style}`}>Health</li>
                        <li className={`${style.inner_list_style}`}>Diet</li>
                        <li className={`${style.inner_list_style}`}>Exercise</li>
                    </ol>: <ol className={`${style.Close_Inner_list_styling}`}>
                        <li>Health</li>
                        <li>Diet</li>
                        <li>Exercise</li>
                    </ol>}
                    </li>
                    <li className={`${style.login_style}`}>Login</li>
                </ul>
            </div>
        </div>
    </div>
    </>
}
export default Navbar