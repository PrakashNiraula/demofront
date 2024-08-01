import React from "react";

function Button({ title ,onclick}) {
  return (
   

    <button className="btn btn-primary" onClick={onclick}>
                 {title}
                </button>
  );
}

export default Button;