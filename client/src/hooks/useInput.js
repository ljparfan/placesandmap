import { useState } from "react";

function useInput(initialValue = "") {
  const [state, setState] = useState(initialValue);

  const handleChange = (e) => {
    setState(e.currentTarget.value);
  };

  const clearValue = setState("");

  return [state, handleChange, clearValue];
}

export default useInput;
