import { Layout } from './Layout'

export const List = (props) => {
    return (
        <Layout {...{...props, ...{isList: true}}} />
    )
}