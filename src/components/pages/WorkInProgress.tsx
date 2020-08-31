import React from 'react'
import { RouteComponentProps } from 'react-router-dom';

// Logo
import {ReactComponent as Logo} from "../../assets/Logo.svg";

interface WorkInProgressProps extends RouteComponentProps<any> {
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({}) => {
  return (
    <div className="wip">
      <div className="middle">
        <Logo className="logo-svg" />
        <p>Coming soon...</p>
      </div>
    </div>
  );
}

export default WorkInProgress