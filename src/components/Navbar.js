import {Link, Outlet} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Logo</Link>
                <ul>
                    <li><Link to="/">Эхлэл</Link></li>
                    <li><Link to="/login">Нэвтрэх</Link></li>
                    <li><Link to="/news">Мэдээ мэдээлэл</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};