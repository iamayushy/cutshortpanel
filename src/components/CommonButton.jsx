const CommonButton = ({value}) => {
    function getSomeResp(e){
        e.preventDefault()
    
    }
    return <button onClick={getSomeResp}>{value}</button>
}
export {CommonButton}
