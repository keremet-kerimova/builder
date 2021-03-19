import Logo from "../Logo/Logo"
import Nav from  "../Nav/Nav"
import classes from "./Drawer.module.css"
import Backdrop from "../Ul/Backdrop/Backdrop"
import { useState } from "react"

const Drawer = () => {
 const [drawerOpen, setDrawerOpen]= useState(false);

  const drawerClasses =[
      classes.content,
      drawerOpen ? classes.open : classes.close
  ];
  

    return (
        <div className={classes.Drawer}>
            <Backdrop show={} />
            <div className={drawerClasses.join(" ")}/>
            <Logo />
            <Nav />
            
        </div>
    );
}
 export default Drawer