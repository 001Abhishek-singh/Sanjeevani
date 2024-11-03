import style from '../../Static/Main/Button.module.css'
const Button = (props) => {
    return <>
    <div className={`${style.Button_container}`}>
        <button> {props.children} </button>
    </div>
    </>
}
export default Button