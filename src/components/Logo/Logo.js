import classes from "./Logo.module.css" 
import logo from "../../images/logo4.png"

const Logo = () => {
    return(
        <div className ={classes.Logo}>
        <img src={logo} alt="Logo of the Dried fruits project"/>
        <div className={ classes.Fonts}>Dry Fruits Builder</div>
        </div>
    );
}
export default Logo;