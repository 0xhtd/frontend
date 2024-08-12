import { STATUS } from "../../../types/enum";

const StatusIcon = ({ status }: { status: STATUS }) => {
  if (status === STATUS["working"]) {
    return <div>{"WORKING"}</div>;
  } else if (status === STATUS["repairing"]) {
    return <div>{"REPAIRING"}</div>;
  } else if (status === STATUS["cleaning"]) {
    return <div>{"CLEANING"}</div>;
  } else if (status === STATUS["disabled"]) {
    return <div>{"DISABLED"}</div>;
  }
};

export default StatusIcon;
