import styles from "../src/styles/Button.module.css"
export default function Button ({content}){
    return(
    <button className={styles.btn}>
        <span className={styles.button_top}> {content}
        </span>
    </button>
    )
}