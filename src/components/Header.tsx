import styles from "../styles/index.module.scss";

export default function Header({ title }: { title: string }) {
  return (
    <header className={styles.conainer}>
      <h1 className="text-3xl">{title}</h1>

      <p>This is the header</p>
    </header>
  );
}
