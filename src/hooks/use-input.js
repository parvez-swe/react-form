import { useState } from "react";
const useInput = (validatValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validatValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
  };
};

export default useInput;
