import classes from "./Control.module.css"

const Control = ({type}) =>{
    return(
        <div className={classes.Control}>
           <button>+</button>
           {type}
           <button>-</button>
        </div>
    )
}
export default  Control;