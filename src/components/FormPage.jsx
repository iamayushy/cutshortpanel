import { InputBox } from "./InputBox";
import { CommonButton } from "./CommonButton";

const FormPage = ({
  head,
  body,
  textOne,
  textTwo,
  placeholderOne,
  placeholderTwo,
  moveNext,
  handleInputOne,
  handleInputTwo,
  valOne,
  valTwo,
  optTwo,
  website,
  children,
  show = false
}) => {
  return (
    <div className="formPage" >
      <section className="pageOne">
        <section className="welcome-text">
          <h1>{head}</h1>
          <p>{body}</p>
        </section>
        <form>
          <InputBox
            inputName={textOne}
            placeholder={placeholderOne}
            handleInput={handleInputOne}
            values={valOne}
          />
          <br />
          {show &&
          <InputBox
            inputName={textTwo}
            placeholder={placeholderTwo}
            handleInput={handleInputTwo}
            values={valTwo}
          />}
          {children}
          <CommonButton moveToNextPage={moveNext} value={"Create Workspace"} />
        </form>
      </section>
    </div>
  );
};
export { FormPage };
