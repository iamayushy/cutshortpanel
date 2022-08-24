import { InputBox } from "./InputBox"
import { CommonButton } from './CommonButton'

const FormPage = ({head, body, textOne, textTwo, placeholderOne, placeholderTwo}) => {
    return(
        <div className="pageOne">
            <section>
            <section className="welcome-text">
            <h1>{head}</h1>
            <p>{body}</p>
            </section>
            <form>
                <InputBox
                inputName={textOne}
                placeholder={placeholderOne}/>
                <InputBox
                inputName={textTwo}
                placeholder={placeholderTwo}/>
                <CommonButton value={'Create Workspace'}/>

            </form>
            </section>
        </div>
    )
}
export {FormPage}
