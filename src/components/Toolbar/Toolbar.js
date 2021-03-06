import DrawerOpen from "../Drawer.js/DrawerOpen/DrawerOpen";
import Logo from "../Logo/Logo";
import Nav from "../../components/Nav/Nav/Nav";
import classes from "./Toolbar.module.css";

const Toolbar = ({ openDrawer }) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <nav>
        <Nav />
      </nav>
      <DrawerOpen click={openDrawer} />
    </div>
  );
}
 
export default Toolbar;