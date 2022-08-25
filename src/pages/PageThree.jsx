import { CustomBox } from "../components/CustomBox"
import {HiUser, HiUserGroup} from 'react-icons/hi'
import { CommonButton } from "../components/CommonButton"
import { useState, useRef } from "react"
const PageThree = () => {
    const [checkOption, setCheckOption] = useState({
        optionOne: '',
        optionTwo: ''
    })
    const checkedRed = useRef(null)
    const handleColor= (e) => {
        const boxOne =e.target
        checkOption.optionOne.length > 2 ? setCheckOption({
            optionOne: '',
            optionTwo: '#6645de5'
        }) : setCheckOption({
            optionOne: '#6645de5',
            optionTwo: ''
        })
        boxOne.style.border = `1px solid ${checkOption?.optionOne}`
    }
    const handleColorTwo = () => {

    }
    return (
        <div className="pageOne">
            <section className="welcome-text">
                <h1>How are you planning to use Eden?</h1>
                <p>We'll stramline your setup experience accordingly.</p>
            </section>
            <section onClick={handleColor} ref={checkedRed}  className="option-plan">
                <CustomBox

                boxhead={'For myself'}
                boxbody={'Write better. Think more clearly. Stay organized'}
                >
                <HiUser size={30}/>

                </CustomBox>

                <CustomBox
                boxhead={'With my team'}
                boxbody={'Wikis, docs, tasks & projects, all in one place.'}
                >
                <HiUserGroup size={30}/>

                </CustomBox>

            </section>
            <CommonButton value={'Create Workspace'}/>
        </div>
    )
}
export {PageThree}
