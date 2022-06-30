import css from "./Layout.module.css";

export default function Row({style, className, children}) {
    return (
        <div className={`${css.row} ${className ? className : ""}`} style={style}>
            {children}
        </div>
    );
};