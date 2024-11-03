import style from '../../Static/Main/Features.module.css'
import FeatureCard from "./FeatureCard"
const Features = () => {
    return <>
    <div className="container-fluid">
        <div className="row">
            <div className={`${style.feature_Container} col-12`}>
                <div className={`d-flex justify-content-center align-items-center text-center`}>
                    <div className={`text-center`}>
                        <h2 className={`${style.heading_style}`}>Award winning patient care</h2>
                        <div className={`${style.Separator}`}></div>
                        <p className={`${style.text_para}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores perferendis neque nam <br /> totam soluta, ratione distinctio adipisci molestias sequi quaerat.</p>
                    </div>
                </div>
                <div className={`${style.labs_container_card}`}>
                    <FeatureCard />
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Features