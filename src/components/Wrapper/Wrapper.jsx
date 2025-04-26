import styles from "./wrapper.module.css"

const Wrapper = ({
    children
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper