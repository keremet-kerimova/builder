import Logo from "../Logo/Logo"
import Nav from  "../Nav/Nav"
import classes from "./Drawer.module.css"
import Backdrop from "../Ul/Backdrop/Backdrop"

const Drawer = () => {
    return (
        <div className={classes.Drawer}>
            <Backdrop />
            <div className={[classes.content, classes.close].join(" ")}/>
            <Logo />
            <Nav />
            
        </div>
    );
}
 export default Drawer