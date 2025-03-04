import styles from "./cardcode.module.css";
export const CardCode = ({ post }) => {
  return (
    <>
      <h2 className={styles.titulo}>Código:</h2>
      <div
        className={styles.code}
        dangerouslySetInnerHTML={{ __html: post.markdown }}
      />
    </>
  );
};
