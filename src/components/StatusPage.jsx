import { createStyles, Group, Stepper } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { userContext } from "../context/UserContext";

const useStyle = createStyles((theme) => ({
    verticalSeparator:{
        height:22
    }
}))

const StatusPage = () => {
  const routes = ["workspace-details", "workspace-plan", "complete"];
  const { pageCount } = useContext(userContext);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState({
    work: false,
    user: false,
    completed: false,
  });
  const classes = useStyle()
  return (
    <div className="stepper">
      {/* <section
             className={`statusIcon statusColor ${pageCount.one === true ? 'completed': 'init'}`}>1</section>
            <section
             className={`statusIcon  ${ pageCount.two   ?  'completed' : 'init statusColor' }`}>2</section>
            <section
            className={`statusIcon  ${pageCount.three ?  'completed' : 'init statusColor'}`}>3</section>
            <section
            className={`statusIcon  ${pageCount.four ?  'completed' : 'statusColor'}`}>4</section> */}
      <section className="child">
      <Stepper  color="violet" iconSize={50}  active={1}
      className={{
        verticalSeparator: classes.verticalSeparator
      }}>
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>
    </section>
    </div>
  );
};
export { StatusPage };
