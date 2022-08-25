import { createContext, useState } from "react";

const userContext = createContext()

const HandleContext = ({children}) => {

    const [completeDetails, setCompleteDetails] = useState({
        fullName: '',
        displayName: '',
        workspaceName:'',
        workspaceUrl: '',
        edenType: ''
    })
    return(
        <userContext.Provider value={{
            completeDetails,
            setCompleteDetails
        }}>
            {children}
        </userContext.Provider>
    )
}
export {HandleContext}
