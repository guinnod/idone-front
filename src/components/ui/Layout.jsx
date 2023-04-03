import boxStyles from './styles/_box.module.scss'
import listStyles from './styles/_list.module.scss'

export const Layout = ({ gap, children, style, className, onClick, isList }) => {
    if (gap) {
        style = { ...style, gap: `${gap}px` }
    }
    let layoutClassname = isList ? listStyles.anchor : boxStyles.anchor
    if (className) {
        layoutClassname += ` ${className}`
    }
    return (
        <div className={layoutClassname} style={style} onClick={onClick}>
            {children}
        </div>
    )
}
