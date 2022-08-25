const InputBox = ({inputName, placeholder, handleInput, values, optional='', web=''}) => {
    return(
        <div>
            <p className="label-text">{inputName} <span>{`${optional}`}</span></p>
            <p className="website">{web}</p>
            <input onChange={handleInput} value={values}
             type="text" placeholder={placeholder}
            />

        </div>
    )
}
export {InputBox}
