const CustomBox = ({children, boxbody, boxhead, handleColor}) => {

    return(
        <div onClick={handleColor} className="box">
            {children}
            <h3 className="box-head">{boxhead}</h3>
            <p className="box-body">{boxbody}</p>
        </div>
    )
}
export {CustomBox}
