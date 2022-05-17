import Link from 'next/link'
import classes from "./main-header.module.css";


const MainHeader = () => {
    return (
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link href={"/"}>NextEvents</Link>
        </div>
        <nav>
          <ul className={classes.navigation}>
            <li>
              <Link href={"/events"}>Browser all events</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default MainHeader;