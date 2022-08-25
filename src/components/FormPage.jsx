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
  valTwo
}) => {
  return (
    <div className="pageOne">
      <section>
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
          <InputBox
            inputName={textTwo}
            placeholder={placeholderTwo}
            handleInput={handleInputTwo}
            values={valTwo}
          />
          <CommonButton moveToNextPage={moveNext} value={"Create Workspace"} />
        </form>
      </section>
    </div>
  );
};
export { FormPage };
