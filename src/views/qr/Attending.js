import css from "./QR.module.css";
import QRCode from "react-qr-code";
import Column from "../../components/layout/Column";
import {useEffect, useState} from "react";
import {MdAutorenew} from "react-icons/all";
import Loading from "../../components/loading/Loading";

export default function Attending() {
    const [timer, setTimer] = useState(0);
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(null);
    let interval;

    const startTimer = () => {
        setTimer(60);
        clearInterval(interval);
        return setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000);
    };

    useEffect(() => {
        return clearInterval(interval);
    }, []);

    const generate = () => {
        interval = startTimer();
    };

    const fetchQR = async () => {

    };

    return (
        <Column>
            <h1 className={css.h1}>Ирц өгөх</h1>
            <ul className={css.ul}>
                <li>
                    <h2 className={css.h2}>QR үүсгэх товч дээр дарж шинэ qr код үүсгэнэ үү</h2>
                </li>
                <li>
                    <h2 className={css.h2}>Үүсгэсэн QR код нь 1 минутын хугацаанд хүчинтэй</h2>
                </li>
            </ul>

            <button onClick={generate} className={css.generate}>
                <MdAutorenew className={css.icon}/>
                <p>QR үүсгэх</p>
            </button>
            <p>{"Хүчинтэй хугацаа: " + timer}</p>
            {state !== null ? <QRCode value="hey"/> : null}
            <Loading isLoading={loading} size={"min"}/>
        </Column>
    )
}