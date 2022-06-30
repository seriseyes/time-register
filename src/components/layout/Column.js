import css from "./Layout.module.css";

export default function Column({style, className, onClick, children}) {
    return (
        <div onClick={onClick} style={style} className={`${css.column} ${className ? className : ""}`}>
            {children}
        </div>
    );
};