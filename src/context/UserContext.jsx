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

    const [pageCount, setPageCount] = useState({
        one: false,
        two: false,
        three: false,
        four: false
    })
    return(
        <userContext.Provider value={{
            completeDetails,
            setCompleteDetails,
            pageCount,
            setPageCount
        }}>
            {children}
        </userContext.Provider>
    )
}
export {HandleContext, userContext}
