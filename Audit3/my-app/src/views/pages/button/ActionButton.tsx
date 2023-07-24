import React, { Fragment } from "react";
interface ActionButtonProps {
  className?: string;
  action?: () => void;
  title?: string;
  isShow?: boolean;
}
const ActionButton = (props:ActionButtonProps) => {
  return (
    <Fragment>
        {props.isShow && (
            <button className={props.className} onClick ={props.action}>
                {props.title}
            </button>
        )}
    </Fragment>
  )
};

export default ActionButton;
