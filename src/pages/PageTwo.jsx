import { Input } from "@mantine/core"
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { FormPage } from "../components/FormPage"
import { userContext } from "../context/UserContext"

const PageTwo = () => {
    const nav = useNavigate()
    const {completeDetails, setCompleteDetails} = useContext(userContext)

    const nextPage = (e) => {
        e.preventDefault()
        console.log(completeDetails)
        nav('/workspace-plan')

    }
    return(
        <>

        <FormPage
        head={"Let's set up a home for all your work"}
        body={'You can always create another workspace later.'}
        textOne={'Workspace Name'}
        textTwo={`Workspace URL`}
        handleInputOne={(e) => {
            setCompleteDetails({
                ...completeDetails,
                workspaceName: e.target.value
            })
        }}
        valOne={completeDetails.workspaceName}
        moveNext={nextPage}
        >
        <p  className='label-text'>Workspace URL (optional)</p>

        <Input
        className="custom-ip"
        size={'md'}
        variant="unstyled"
        icon={'www.eden.com/'}
        iconWidth={150}
        color='red'
        onChange={(e) => {
            setCompleteDetails({
                ...completeDetails,
                workspaceUrl:e.target.value
            })
        }}
        value={completeDetails.workspaceUrl}

        />
        </FormPage>

        </>
    )
}
export {PageTwo}
