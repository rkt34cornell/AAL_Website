import styles from "../style";
import taxonomy from "../assets/sparta.png";

const Taxonomy = () => {
  return (
    <div id="taxonomy" className={`${styles.marginY} ${styles.padding} flex flex-col justify-center items-center mt-[-30px]`}>
      <h2 className={styles.heading2}>Taxonomy</h2>
      <img src={taxonomy} alt="taxonomy" className="p-5 mt-5 w-[90%] h-[90%] z-1 relative" />
    </div>
  );
};

export default Taxonomy;
