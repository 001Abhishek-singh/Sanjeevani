import style from '../../Static/Main/Count.module.css'
const Count = () => {
    return <>
    <div className="container">
        <div className={`${style.custom_css_row} row d-flex justify-content-evenly align-items-center text-center`}>
            <div className={`${style.custom_counter} col-3`}>
                <div>
                    <span className={`${style.value_style}`}>58</span>
                    <br />
                    <hr />
                    <span className={`${style.value_style_2}`}>Happy People</span>
                </div>
            </div>
            <div className={`${style.custom_counter} col-3`}>
                <div>
                    <span className={`${style.value_style}`}>700</span>
                    <br />
                    <hr />
                    <span className={`${style.value_style_2}`}>Customer</span>
                </div>
            </div>
            <div className={`${style.custom_counter} col-3`}>
                <div>
                    <span className={`${style.value_style}`}>40</span>
                    <br />
                    <hr />
                    <span className={`${style.value_style_2}`}>Dicipline</span>
                </div>
            </div>
            <div className={`${style.custom_counter} col-3`}>
                <div>
                    <span className={`${style.value_style}`}>20</span>
                    <br />
                    <hr />
                    <span className={`${style.value_style_2}`}>Worldwide Branch</span>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default Count