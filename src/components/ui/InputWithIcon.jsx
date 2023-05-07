import styles from './styles/_input-with-icon.module.scss'

export const InputWithIcon = ({type, placeholder, src, style, onClick, id, name}) => {
    return (
        <div className={styles.anchor}>
            <input type={type} value={placeholder} style={style} id={id} name={name} disabled/>
            <div>
                <img src={src} alt="icon" onClick={onClick}/>
            </div>
        </div>
    )
}