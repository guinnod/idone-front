import { Layout } from './Layout'
import styles from './styles/_box.module.scss'
export const Box = (props) => {
    return (
        <Layout {...{ ...props, ...{ className: styles.anchor } }} />
    )
}