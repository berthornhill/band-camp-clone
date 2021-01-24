import React from "react";
import SignupContainer from "../session/signup_form_container";
import WelcomeModal from "../session/welcome_modal";

function Modal({ modal, removeModal }) {
  if (!modal) {
    return null;
  }

  let component;
  switch (modal) {
    case "signup":
      component = <WelcomeModal />;
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={() => removeModal()}>
      <div className="modal-child" onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default Modal;
