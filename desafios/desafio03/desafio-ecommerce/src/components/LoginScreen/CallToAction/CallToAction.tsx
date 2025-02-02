import React from "react";
import css from "./Call.module.css"; 
import { Link } from "react-router-dom";

interface CallToActionProps {
  isRegistering: boolean;
  setIsRegistering: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallToAction: React.FC<CallToActionProps> = ({ isRegistering, setIsRegistering }) => {
  return (
    <div className={css.callToActionContainer}>
      <p className={css.switchMode}>
        {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
        <Link 
          className={css.link}
          to="#" 
          onClick={(e) => {
            e.preventDefault();
            setIsRegistering((prev) => !prev);
          }} 
        >
          {isRegistering ? "Sign In here" : "Sign Up here"}
        </Link>
      </p>
    </div>
  );
};

export default CallToAction;
