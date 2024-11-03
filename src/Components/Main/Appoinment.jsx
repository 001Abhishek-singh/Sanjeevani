import Button from "./Button"
import doctor from '../../assets/doctor_1.jpg'
import style from '../../Static/Main/Appoinment.module.css'
const Appoinment = () => {
    return <>
    <div className="container-fluid">
        <div className="row d-flex justify-content-evenly align-items-center text-center py-4 px-4">

    {/* image section */}

            <div className="col-md-4">
                <div className="image_container">
                    <img src={doctor} alt="" className={`${style.doctor_image_style}`} />
                </div>
            </div>
    {/* form */}

            <div className="col-12 col-md-8">
                <div className="form_container">
                    <div className={`text-center`}>
                        <h2 className={`${style.appoinment_title}`}>Book Appoinment</h2>
                        <p className={`${style.appoinment_text_para}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quam sunt omnis ipsum delectus tenetur at dolorum ad odio voluptatum!</p>
                    </div>
                    <div className={`${style.form_center_container}`}>    
                        <form action="#" className={`${style.form_style}`}>
                            <input className={`${style.form_inpfield_style}`} type="text" name="name" placeholder='Name' id="" />
                            <br />
                            <input className={`${style.form_inpfield_style}`} type="text" name="number" placeholder='Phone Number' id="" />
                            <br />
                            <input className={`${style.form_inpfield_style}`} type="time" name="time" placeholder='Time' id="" />
                            <br />
                            <input className={`${style.form_inpfield_style}`} type="date" name="date" placeholder='Date' id="" />
                            <br />
                            <select className={`${style.form_inpfield_style}`} name="doctor" placeholder='Select Doctors' id="">
                            <option className={`${style.form_inpfield_style}`} value="">Select Doctors</option>
                                <option value="Prem">Prem</option>
                                <option value="Jaspreet">Jaspreet</option>
                                <option value="Priya">Priya</option>
                                <option value="Divya">Divya</option>
                                <option value="Deepak">Deepak</option>
                                <option value="Shreya">Shreya</option>
                            </select>
                            <br />
                            <select className={`${style.form_inpfield_style}`} name="department" placeholder='Choose Department' id="">
                                <option value="">Choose Department</option>
                                <option value="Cardiologist">Cardiologist</option>
                                <option value="Nephrologist">Nephrologist</option>
                                <option value="Surgery">Surgery</option>
                                <option value="Psycologist">Psycologist</option>
                                <option value="Medicine">Medicine</option>
                                <option value="Oncologist">Oncologist</option>
                            </select>
                            <br />
                            <textarea className={`${style.form_textfield_style}`} name="message" placeholder='Your Message' id=""></textarea>
                        </form>
                    </div>
                    <div className={`${style.button_Center_Container}`}>
                        <Button>Submit</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
}
export default Appoinment