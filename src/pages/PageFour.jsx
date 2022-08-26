import { useContext, useEffect } from "react"
import { userContext } from "../context/UserContext"
import {BsFillCheckCircleFill} from 'react-icons/bs'

const PageFour = () => {
    const {completeDetails, setPageCount} = useContext(userContext)
    useEffect(() => {
      setPageCount(4)
    }, [])

    return(
        <div className="pageOne">
          <section className="checked">
            <BsFillCheckCircleFill size={80} color="#664de5"/>
          </section>
      <section className="welcome-text">
        <h1>Congratulations, {completeDetails.displayName}!</h1>
        <p>Your have completed onboarding, you can start using the Eden!</p>
      </section>
      </div>
    )
}
export {PageFour}
