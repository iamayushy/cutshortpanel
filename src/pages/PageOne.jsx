import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormPage } from "../components/FormPage";

const PageOne = () => {
  const nav = useNavigate();
  const [details, setDetails] = useState({
    fullName: "",
    displayName: "",
  });

  const checkInput = () => {
    let isValidated = false
    isValidated = details.fullName.length > 5 && details.displayName.length > 3 ? true:false
    return isValidated
  }


  const getPage = (e) => {
    e.preventDefault();
    const checkInpu =  checkInput()
    checkInpu ? nav("/workspace-details") : alert('number of charcter to each box must be 6')

  };
  return (
    <>

      <FormPage
        head={"Welcome! First thing first"}
        body={"You can always change them later"}
        show={true}
        textOne={"Full Name"}
        textTwo={"Display Name"}
        placeholderOne={"Steve Jobs"}
        placeholderTwo={"Steve"}
        handleInputOne={(e) =>
          setDetails({
            ...details,
            fullName: e.target.value,
          })
        }
        handleInputTwo={(e) =>
          setDetails({
            ...details,
            displayName: e.target.value,
          })
        }
        valOne={details.fullName}
        valTwo={details.displayName}
        moveNext={getPage}
      />
    </>
  );
};
export { PageOne };
