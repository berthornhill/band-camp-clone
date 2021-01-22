import React from "react";
import SignupContainer from "../session/signup_form_container";

function Modal({ open, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "signup":
      component = <SignupContainer />;
      break;
    default:
      return null;
  }
}

return (
  <div className="modal-background">
    <div className="modal-child" onClick={(e) => e.stopPropagation()}>
      {component}
    </div>
  </div>
);
