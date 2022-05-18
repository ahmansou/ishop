import styles from "./Container.module.scss";

const Container = ({ children }: { children?: JSX.Element }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;
