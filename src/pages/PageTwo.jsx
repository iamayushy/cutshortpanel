import { FormPage } from "../components/FormPage"

const PageTwo = () => {
    const nextPage = (e) => {
        e.preventDefault()
        
    }
    return(
        <>
        <FormPage
        head={"Let's set up a home for all your work"}
        body={'You can always create another workspace later.'}
        moveNext={nextPage}
        />

        </>
    )
}
export {PageTwo}
