import React from "react";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function ModalWrapper() {
  return (
    <div>
      <SignUpModal />
      <LoginModal />
    </div>
  );
}
