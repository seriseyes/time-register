import css from "./Loading.module.css";
import ReactDOM from "react-dom";

/**
 * Loading animation component
 *
 * @param {String} size max гэж өгвөл дэлгэц дүүрэн уншиж буй animation харагдана. Юуч өгөхгүй бол уншиж буй component харагдана
 * @param {Boolean} isLoading Уншиж байгаа эсэх
 */
export default function Loading({size, isLoading}) {
    if (!isLoading) return null;

    if (size === "max") {
        return ReactDOM.createPortal(
            <div className={css.max}>
                <div className={css.ldsEllipsis}>
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
            , document.getElementById("loading"));
    } else {
        return <div className={css.min}>
            <div className={css.ldsEllipsis}>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </div>;
    }
}