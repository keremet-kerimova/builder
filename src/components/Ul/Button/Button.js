import classes from "./Button.module.css";

const Button = (props) => {
  const className = [classes.Button];
  if (props.green) {
    className.push(classes.green);
  }
  if (props.red) {
    className.push(classes.red);
  }
  return (
    <button {...props} className={className.join(' ')}>{props.children}</button>
  );
}

export default Button;

// import React from "react";
// import classes from "./Button.module.css";

// export default ({ children, click, enabled, red, green }) => {
//   const buttonClasses = [classes.Button];

//   if (red) buttonClasses.push(classes.red);
//   if (green) buttonClasses.push(classes.green);

//   return (
//     <button
//       onClick={click}
//       className={buttonClasses.join(" ")}
//       disabled={enabled === undefined ? false : !enabled}
//     >
//       {children}
//     </button>
//   );
// };