/**
 * Баярхүү.Лув, 0000.00.00 00:00
 */
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Column from "../../components/layout/Column";
import {toast} from "react-toastify";
import css from "./App.module.css";
import Row from "../../components/layout/Row";
import {
    HiOutlineQrcode,
    IoLogOut,
    IoMdListBox
} from "react-icons/all";
import axios from "../../utils/AxiosInstance";
import Loading from "../../components/loading/Loading";

export default function App() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            toast.error("Нэвтрэх эрх дууссан байна. Дахин нэвтрэх шаардлагатай.");
            setTimeout(() => navigate("/login"), 1000);
        } else {
            void async function () {
                const result = await axios.get("/user/data");
                if (result) {
                    setUser(result.data);
                }
            }();
        }
    }, []);

    const attend = async () => {
        setLoading(true);

        await navigator.geolocation.getCurrentPosition(async position => {
            try {
                const result = await axios.post("/attendee/save", {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                toast.success(result.data.message);
                setState([...state, {
                    targetDate: result.data.targetDate,
                    status: result.data.status
                }]);
                setLoading(false);
            } catch (e) {
                console.log(e);
                toast.error(e.response.data);
                setLoading(false);
            }
        }, err => {
            if (err.code === 1) {
                toast.error("Байршил ашиглах эрх өгнө үү.");
            } else if (err.code === 2) {
                toast.error("Байршил тогтоох үед алдаа гарлаа. Дахин оролдоно уу.");
            } else if (err.code === 3) {
                toast.error("Интернет холболтоо шалгана уу.");
            }
            setLoading(false);
        });

    };

    const formatDate = (date) => {
        date = new Date(date);
        return (
            [
                date.getFullYear(),
                padTo2Digits(date.getMonth() + 1),
                padTo2Digits(date.getDate()),
            ].join('-') +
            ' ' +
            [
                padTo2Digits(date.getHours()),
                padTo2Digits(date.getMinutes()),
                padTo2Digits(date.getSeconds()),
            ].join(':')
        );
    }

    const padTo2Digits = (num) => {
        return num.toString().padStart(2, '0');
    }

    return (
        <Column className={css.background}>

            {user !== null ?
                <h1 className={css.hello}>Сайн байна уу? {user.lastname + " " + user.firstname}</h1>
                : null
            }

            <Row style={{gap: "20px"}}>
                <button onClick={attend} className={css.card}>
                    <HiOutlineQrcode className={css.icon}/>
                    <h1 className={css.h1}>Ирц өгөх</h1>
                </button>
                <Link className={css.card} to="attendance">
                    <IoMdListBox className={css.icon}/>
                    <h1 className={css.h1}>Ирц харах</h1>
                </Link>
                <Link className={`${css.card} ${css.cardRed}`} to="/login">
                    <IoLogOut className={`${css.icon} ${css.iconLogout}`}/>
                    <h1 className={css.h1}>Гарах</h1>
                </Link>
            </Row>

            <Loading isLoading={loading} size={"min"}/>

            <Column>
                {state.map((item, index) => {
                    return (
                        <Row key={index}>
                            <span>{formatDate(item.targetDate)}</span>
                            <span style={{margin: "0 10px", fontWeight: "bold"}}>-</span>
                            <span>{item.status === 'gone' ? "Явсан" : "Ирсэн"}</span>
                        </Row>
                    )
                })}
            </Column>

            <Routes>
                <Route path="attendance" element={<div>attendance</div>}/>
            </Routes>
        </Column>
    );
}