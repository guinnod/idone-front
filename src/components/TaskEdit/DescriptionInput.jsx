import styles from './styles/_description-input.module.scss'

export const DescriptionInput = ({id}) => {
    return (
        <div className={styles.anchor}>
            <h3>Description</h3>
            <textarea name="" id={id} cols="30" rows="5" placeholder='Add a more detail description...'></textarea>
        </div>
    )
} 