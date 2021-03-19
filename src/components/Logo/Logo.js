import classes from "./Logo.module.css" 
import logo from "../../images/logo1.svg"


const Logo = () => {
    return(
        <div className ={classes.Logo}>
        <img src={logo} alt="Pizza"></img>
        </div>
    );
}
export default Logo;