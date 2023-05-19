import styles from './styles/_circle-button.module.scss'
export const CircleButton = ({ color, svg, onClick }) => {
    return (
        <div onClick={onClick} className={styles.anchor} style={{ background: color }}>
            <img src={svg} alt="svg" />
        </div>
    )
}