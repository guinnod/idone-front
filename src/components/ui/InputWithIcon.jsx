import styles from './styles/_input-with-icon.module.scss'

export const InputWithIcon = ({type, placeholder, src, style, onClick, id, name, href, isDiv}) => {
    return (
        <div  className={styles.anchor} >
            <input type={type} placeholder={placeholder} style={style} id={id} name={name} />
            {isDiv?<div style={{width: '40px'}}></div>:<></>}
            <a href={href}>
                <img src={src} alt="icon"  onClick={onClick}/>
            </a>
        </div>
    )
}