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
        textOne={'Workspace Name'}
        textTwo={`Workspace URL`}
        moveNext={nextPage}
        optTwo={'(optional)'}
        website={'www.eden.com/'}
        />
        </>
    )
}
export {PageTwo}
