import style from '../../Static/Main/FeatureCard.module.css'
import { ImLab } from "react-icons/im";
import { FaHeartbeat } from "react-icons/fa";
import { FaTooth } from "react-icons/fa";
import { RiHealthBookFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { FaHandsHoldingChild } from "react-icons/fa6";

const FeatureCard = () => {

    const cardContentDict = [
        {'id':'1','icon': <ImLab/>,'title':'Laboratory Services', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minima qui totam consequatur, cum optio officiis'},
        {'id':'2','icon': <FaHeartbeat/>,'title':'Heart Disease', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minima qui totam consequatur, cum optio officiis'},
        {'id':'3','icon': <FaTooth/>,'title':'Dental Care', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minima qui totam consequatur, cum optio officiis'},
        {'id':'4','icon': <RiHealthBookFill/>,'title':'Body Surgery', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minima qui totam consequatur, cum optio officiis'},
        {'id':'5','icon': <GiBrain/>,'title':'Neurology Surgery', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minima qui totam consequatur, cum optio officiis'},
        {'id':'6','icon': <FaHandsHoldingChild/>,'title':'Gynecology', 'description':'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam minima qui totam consequatur, cum optio officiis'},
    ]

    return <>
        <div className="container-fluid">
            <div className="row d-flex justify-content-center align-items-center text-center">
                <div className={`${style.custom_card_style} col-4 col-md-10`}>
                    {cardContentDict.map((cardContent) => (
                        <div key={cardContent.id} className={`${style.CardCustomStyle}`}>
                            <div className={`${style.title_and_icon}`}>
                                <span className={`${style.icon_size}`}>{cardContent.icon}</span>
                                <span className={`${style.title_size}`}>{cardContent.title}</span>
                            </div>
                            <p className={`${style.description_size}`}>{cardContent.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
}
export default FeatureCard
// display: grid;
// grid-template-columns: 280px 280px 280px;
// grid-template-rows: auto auto;
// grid-gap: 16px;