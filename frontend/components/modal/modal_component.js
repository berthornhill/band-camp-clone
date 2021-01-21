import React from "react";
import LoginFormContainer from "../session/login_form_component";

function Modal({ open, closeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "signup":
      component = <LoginFormContainer />;
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
