import { Layout } from './Layout'
import styles from './styles/_list.module.scss'

export const List = (props) => {
    return (
        <Layout {...{ ...props, ...{ className: styles.anchor } }} />
    )
}