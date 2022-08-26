import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormPage } from "../components/FormPage";
import { userContext } from "../context/UserContext";

const PageOne = () => {
  const nav = useNavigate();
  // const [details, setDetails] = useState({
  //   fullName: "",
  //   displayName: "",
  // });

  const {completeDetails, setCompleteDetails} = useContext(userContext)

  const checkInput = () => {
    let isValidated = false
    isValidated = completeDetails.fullName.length > 5 && completeDetails.displayName.length > 3 ? true:false
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
          setCompleteDetails({
            ...completeDetails,
            fullName: e.target.value,
          })
        }
        handleInputTwo={(e) =>
          setCompleteDetails({
            ...completeDetails,
            displayName: e.target.value,
          })
        }
        valOne={completeDetails.fullName}
        valTwo={completeDetails.displayName}
        moveNext={getPage}
      />
    </>
  );
};
export { PageOne };
