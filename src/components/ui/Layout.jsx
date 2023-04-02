export const Layout = ({ gap, children, style, className }) => {
    if (gap) {
        style = { ...style, gap: `${gap}px` }
    }
    return (
        <div className={className} style={style}>
            {children}
        </div>
    )
}