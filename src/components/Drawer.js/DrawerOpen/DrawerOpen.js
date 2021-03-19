import classes from "./DrawerOpen.module.css";

const DrawerOpen = ({ click }) => {
  return (
    <div className={classes.DrawerOpen} onClick={click}>Drawer</div>
  );
}

export default DrawerOpen;