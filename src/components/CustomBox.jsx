const CustomBox = ({ children, boxbody, boxhead, handleColor, color, optionName }) => {
  return (
    <div style={{border:`1px solid ${color}`}}  name={optionName} onClick={handleColor} className="box">
      {children}
      <h3 className="box-head">{boxhead}</h3>
      <p className="box-body">{boxbody}</p>
    </div>
  );
};
export { CustomBox };
