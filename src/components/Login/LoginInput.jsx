import styles from './styles/_login-input.module.scss'
import {useState} from "react";

export const LoginInput = (props) => {
    return (
        <div className={styles.anchor}>
            <label className={styles.label} htmlFor={props.type}>{props.toptext}</label>
            <input className={styles.input} {...props}/>
        </div>
    )
}

export const FileInput = (props) => {
    const [fileName, setFileName] = useState("Choose a photo...")
    const handleSetFileName = () => {
        const e = document.getElementById(props.id)
        const filename = e.files.length > 0 ? e.files[0].name : "Choose a photo...";
        setFileName(filename);
    }
    return (
        <div className={styles.anchor + " " + styles.input}>
            <label className={styles.label} htmlFor={props.type}>{props.toptext}</label>
            <input className={styles.hidden} {...props} onChange={handleSetFileName}/>
            <label className="" id="filePath">{fileName}</label>
            <span>Browse</span>
        </div>
    )
}