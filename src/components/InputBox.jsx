const InputBox = ({inputName, placeholder, handleInput, values}) => {
    return(
        <div>
            <p className="label-text">{inputName}</p>
            <input onChange={handleInput} value={values} type="text" placeholder={placeholder}/>
        </div>
    )
}
export {InputBox}
