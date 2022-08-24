const InputBox = ({inputName, placeholder}) => {
    return(
        <div>
            <p className="label-text">{inputName}</p>
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}
export {InputBox}
