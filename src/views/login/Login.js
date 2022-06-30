import Column from "../../components/layout/Column";
import TextField from "../../components/controls/TextField";
import {useEffect, useState} from "react";
import axios from "../../utils/AxiosInstance";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const [state, setState] = useState({
        username: "",
        password: ""
    });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.clear();
    }, []);

    const onChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const login = async () => {
        try {
            const result = await axios.post("/auth/login", state);
            await localStorage.setItem("token", result.data.token);
            toast.success("Амжилттай нэвтэрлээ");
            navigate("/");
        } catch (e) {
            console.log(e);
            toast.error(e.response.data);
        }
    }

    return <Column>
        <TextField onChange={onChange} name={"username"} caption={"Нэвтрэх нэр"}/>
        <TextField onChange={onChange} name={"password"} caption={"Нууц үг"} type={"password"}/>
        <button onClick={login}>Нэвтрэх</button>
    </Column>;
}
