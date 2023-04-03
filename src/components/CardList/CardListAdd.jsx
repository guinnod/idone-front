import styles from './styles/_card-list-add.module.scss'
import add from '@icons/add-gray.svg';
import { Button } from '@components/ui/Button';

export const CardListAdd = ({ text }) => {
    
    return (
        <Button className={styles.anchor}>
            <img src={add} alt="add" />
            {text}
        </Button>
    )
}