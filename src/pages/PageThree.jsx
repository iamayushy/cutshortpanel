import { CustomBox } from "../components/CustomBox";
import { HiUser, HiUserGroup } from "react-icons/hi";
import { CommonButton } from "../components/CommonButton";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const PageThree = () => {
  const nav = useNavigate()

  const [manageSelect, setManageSelect] = useState({
    optionOne: false,
    optionTwo: false,
  });



  const handleColorOne = () => {
    setManageSelect({
      optionOne: true,
      optionTwo: false,
    });
  };

  const handleColorTwo = () => {
    setManageSelect({
      optionOne: false,
      optionTwo: true,
    });
  };

  const nextPage = () => {
    if(manageSelect.optionOne === true || manageSelect.optionTwo === true){
        nav('/complete')
    }
    else{
        alert('select atleast one option please')
    }
  }
  return (
    <div className="pageOne">
      <section className="welcome-text">
        <h1>How are you planning to use Eden?</h1>
        <p>We'll stramline your setup experience accordingly.</p>
      </section>

      <section className="option-plan">
        <CustomBox
          boxhead={"For myself"}
          boxbody={"Write better. Think more clearly. Stay organized"}
          optionName={"single"}
          color={manageSelect.optionOne ? "#664de5" : "rgb(213, 213, 213)"}
          handleColor={handleColorOne}
        >
          <HiUser color={manageSelect.optionOne ? '#664de5': 'black'} size={30} />
        </CustomBox>

        <CustomBox
          boxhead={"With my team"}
          boxbody={"Wikis, docs, tasks & projects, all in one place."}
          optionName={"multiple"}
          color={manageSelect.optionTwo ? "#664de5" : "rgb(213, 213, 213)"}
          handleColor={handleColorTwo}
        >
          <HiUserGroup color={manageSelect.optionTwo ? '#664de5': 'black'} size={30} />
        </CustomBox>
      </section>
      <CommonButton moveToNextPage={nextPage} value={"Create Workspace"} />
    </div>
  );
};
export { PageThree };
