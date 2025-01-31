import React from "react";
import css from "./Call.module.css"; // Certifique-se de criar este arquivo para estilos
import { Link } from "react-router-dom";

interface CallToActionProps {
  label: string;
  onClick: () => void;
  isRegistering: boolean;
}

const CallToAction: React.FC<CallToActionProps> = ({ label, onClick, isRegistering }) => {
  return (
    <div className={css.callToActionContainer}>
      <p className={css.switchMode}>
        {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
        <Link to="" onClick={(e) => { e.preventDefault(); onClick(); }} className={css.switchLink}>
          {isRegistering ? "Sign In" : "Sign Up"}
        </Link>
      </p>
    </div>
  );
};

export default CallToAction;
