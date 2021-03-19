import Logo from "../Logo/Logo"
import Nav from  "../Nav/Nav"
import classes from "./Drawer.module.css"
import Backdrop from "../Ul/Backdrop/Backdrop"

const Drawer = () => {
    return (
        <div className={classes.Drawer}>
            <Logo />
            <Nav />
            <Backdrop />
        </div>
    );
}
 export default Drawer