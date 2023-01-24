import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <ul>
        <li>Nikke</li>
        {/* <li>Menu1</li>
        <li>Menu2</li> */}
      </ul>
    </header>
  );
};
export default Header;
