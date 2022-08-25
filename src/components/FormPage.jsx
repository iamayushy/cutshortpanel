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
  website
}) => {
  return (
    <div >
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
            // optional={optOne}
          />
          <InputBox
            inputName={textTwo}
            placeholder={placeholderTwo}
            handleInput={handleInputTwo}
            values={valTwo}
            optional={optTwo}
            web={website}
          />
          <CommonButton moveToNextPage={moveNext} value={"Create Workspace"} />
        </form>
      </section>
    </div>
  );
};
export { FormPage };
