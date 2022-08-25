import { Input } from "@mantine/core"
import { useState } from "react"
import { FormPage } from "../components/FormPage"

const PageTwo = () => {
    const [workspaceState, setWorkSpaceState] = useState({
        wname: '',
        wurl: ''
    })
    const nextPage = (e) => {
        e.preventDefault()
        console.log(workspaceState)

    }
    return(
        <>

        <FormPage
        head={"Let's set up a home for all your work"}
        body={'You can always create another workspace later.'}
        textOne={'Workspace Name'}
        textTwo={`Workspace URL`}
        handleInputOne={(e) => {
            setWorkSpaceState({
                ...workspaceState,
                wname: e.target.value
            })
        }}
        valOne={workspaceState.wname}
        moveNext={nextPage}
        >
        <br />
        <p  className='label-text'>Workspace URL (optional)</p>
        <Input
        className="custom-ip"
        size={'md'}
        variant="unstyled"
        icon={'www.eden.com/'}
        iconWidth={150}
        color='red'
        onChange={(e) => {
            setWorkSpaceState({
                ...workspaceState,
                wurl:e.target.value
            })
        }}
        value={workspaceState.wurl}

        />
        </FormPage>

        </>
    )
}
export {PageTwo}
