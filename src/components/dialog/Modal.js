/**
 * Баярхүү.Лув, 2022.1.12 15:01
 */

import Column from "../layout/Column";
import css from "./dialog.module.css";
import Row from "../layout/Row";
import {IoMdClose} from "react-icons/io";
import ReactDOM from "react-dom";

export default function Modal({caption, w, h, children, open, onClose}) {
    if (!open) return null;

    return ReactDOM.createPortal(
        <Column className={css.modal}>
            <Column className={css.window} style={{width: w ? w : "auto", height: h ? h : "auto"}}>
                <Row className={css.modalHeader}>
                    <span/>
                    <h2>{caption}</h2>
                    <IoMdClose onClick={onClose} className={css.closeIcon}/>
                </Row>
                {children}
            </Column>
        </Column>, document.getElementById("window")
    );
}