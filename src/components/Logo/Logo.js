import classes from "./Logo.module.css" 
import logo from "../../images/logos.jpg"

const Logo = () => {
    return(
        <div className ={classes.Logo}>
        <img src={logo} alt="Logo of the Dried fruits project"/>
        <div>Dried fruits builder</div>
        </div>
    );
}
export default Logo;