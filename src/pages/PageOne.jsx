import { FormPage } from "../components/FormPage"

const PageOne = () => {
    return (
        <>
        <FormPage
        head={'Welcome First! first thing first'}
        body={'You can always change them later'}
        textOne={'Full Name'}
        textTwo={'Display Name'}
        placeholderOne={'Steve Jobs'}
        placeholderTwo={'Steve'}
        />
        </>
    )
}
export {PageOne}
