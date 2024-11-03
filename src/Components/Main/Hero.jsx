import style from "../../Static/Main/Hero.module.css"
import Button from "./Button"
import Card from "./Card"
const Hero = () => {
    return <>
    <div className="container-fluid">
        <div className="row">
            <div className={`${style.Hero_background} col-12`}>
                <div className={`${style.Hero_content_container}`}>
                    <div className={`${style.Hero_separator}`}></div>
                    <p className={`${style.Hero_title}`}>Total health care solution</p>
                    <h1 className={`${style.Hero_main_title}`}>Your Most Trusted <br /> Health Partner</h1>
                    <p className={`${style.Hero_para}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae odio ut <br /> ipsum deserunt animi voluptatem illum ex omnis natus iusto.</p>
                </div>
                <Button />
            </div>

            <div className="card_container">
                <Card />
            </div>
        </div>
    </div>
    </>
}
export default Hero
