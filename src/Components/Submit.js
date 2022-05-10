import React from "react";

const Submit = ({ handleSubmit }) => {
  return (
    <button className="submit" onClick={handleSubmit}>
      Submit
    </button>
  );
};

export default Submit;
