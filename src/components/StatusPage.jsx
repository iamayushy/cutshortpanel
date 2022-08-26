import { Stepper } from "@mantine/core";
import { useContext } from "react";
import { userContext } from "../context/UserContext";



const StatusPage = () => {
  const { pageCount } = useContext(userContext);

  return (
      <>
      <Stepper   color="violet" iconSize={50}  active={pageCount} >
        <Stepper.Step completedIcon={1} className={ 'completed'} />
        <Stepper.Step completedIcon={2} className={'completed'} />
        <Stepper.Step completedIcon={3} className={'completed'} />
        <Stepper.Step completedIcon={4} />
      </Stepper>
  </>
  );
};
export { StatusPage };
