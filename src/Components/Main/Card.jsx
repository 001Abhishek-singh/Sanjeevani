import style from '../../Static/Main/Card.module.css'
import Button from "./Button"
import { FaRegClock } from "react-icons/fa6";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
const Card = () => {
    return <>
    <div className="container-fluid my-4">
        <div className="row d-flex justify-content-evenly align-items-center text-center py-2">
            {/* card 1 */}
            <div className={`${style.card_container} col-md-4`}>
                <div className={`${style.icon_style}`} > <FaRegClock className={`${style.icon_dimensions}`} /> </div>
                <p className={`${style.title_style}`}>24 Hours Service</p>
                <h2 className={`${style.sub_title_style}`}>Online Appoinment</h2>
                <p className={`${style.info}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore officia sunt ea et doloremque.</p>
                <Button>Appoinment</Button>
            </div>
            {/* card 2 */}
            <div className={`${style.card_container} col-md-4`}>
                <div className={`${style.icon_style}`} > <FaBriefcaseMedical className={`${style.icon_dimensions}`} /> </div>
                <p className={`${style.title_style}`}>Timing schedule</p>
                <h2 className={`${style.sub_title_style}`}>Working Hours</h2>
                <div className={`${style.time_table_container}`}>
                    <p className={`${style.info_date}`}>
                        <span>Sun - Wed : </span>
                        <span>8:00 - 17:00</span>
                    </p>
                    <p className={`${style.info_date}`}>
                        <span>Thu - Fri : </span>
                        <span>9:00 - 17:00</span>
                    </p>
                    <p className={`${style.info_date}`}>
                        <span>Sat - sun : </span>
                        <span>10:00 - 17:00</span>
                    </p>
                </div>
            </div>
            {/* card 3 */}
            <div className={`${style.card_container} col-md-4`}>
                <div className={`${style.icon_style}`} > <RiCustomerService2Fill className={`${style.icon_dimensions}`} /> </div>
                <p className={`${style.title_style}`}>Emegency Cases</p>
                <h2 className={`${style.sub_title_style}`}>1-800-700-6200</h2>
                <p className={`${style.info}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic vero dolores itaque laudantium eum, adipisci at dolor esse suscipit autem ullam dolore quia reprehenderit distinctio.</p>
            </div>
        </div>
    </div>
    </>
}
export default Card