    import { useState } from "react";
    import { NavLink } from "react-router-dom";
    import img from "../assets/prof.png";
    import {
    FaHome,
    FaBox,
    FaShoppingCart,
    FaChevronDown,
    FaChevronUp,
    FaDollarSign,
    FaComments,
    FaCalendar,
    FaFileContract,
    FaQuestionCircle,
    FaCog,
    } from "react-icons/fa";
    import "../Styles/SideBar.css";

    const SideBar = () => {
    const [isProcurementOpen, setProcurementOpen] = useState(false); // State for procurement dropdown
    const [isFinanceOpen, setFinanceOpen] = useState(false); // State for finance dropdown

    const toggleProcurementDropdown = () => setProcurementOpen(!isProcurementOpen);
    const toggleFinanceDropdown = () => setFinanceOpen(!isFinanceOpen);

    return (
        <div className="sidebar">
        <div className="logo">
            <h2>MAP</h2>
            <p className="logo-details">
            Medical Advanced <div className="logo2">Platform</div>
            </p>
        </div>
        <nav>
            <ul>
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaHome />
                <span>Dashboard</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/inventory" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaBox />
                <span>Inventory</span>
                </NavLink>
            </li>
            <li className={`dropdown-item ${isProcurementOpen ? "active" : ""}`}>
                <div onClick={toggleProcurementDropdown} className="dropdown-toggle">
                <FaShoppingCart />
                <span>Procurement</span>
                {isProcurementOpen ? <FaChevronUp className="arrow" /> : <FaChevronDown className="arrow" />}
                </div>
                {isProcurementOpen && (
                <ul className="dropdown">
                    <li>
                    <NavLink to="/quotes" className={({ isActive }) => (isActive ? "active" : "")}>
                        <span>Quotes</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/procurement/order" className={({ isActive }) => (isActive ? "active" : "")}>
                        <span>Orders</span>
                    </NavLink>
                    </li>
                </ul>
                )}
            </li>
            <li className={`dropdown-item ${isFinanceOpen ? "active" : ""}`}>
                <div onClick={toggleFinanceDropdown} className="dropdown-toggle">
                <FaDollarSign />
                <span>Finance</span>
                {isFinanceOpen ? <FaChevronUp className="arrow" /> : <FaChevronDown className="arrow" />}
                </div>
            </li>
            <li>
                <NavLink to="/communication" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaComments />
                <span className="calendar2">
                    Communication <span className="badge2">10</span>
                </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/calendar" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaCalendar />
                <span className="calendar">
                    Calendar <span className="badge">10</span>
                </span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/contracts" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaFileContract />
                <span>Contracts</span>
                </NavLink>
            </li>

            <br />
            <br />
            <br />

            <li>
                <NavLink to="/support" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaQuestionCircle />
                <span>Support</span>
                </NavLink>
            </li>
            <li>
                <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
                <FaCog />
                <span>Settings</span>
                </NavLink>
            </li>
            </ul>
        </nav>

        <div className="user-profile">
            <img src={img}  alt="User" />
            <div className="user-info">
            <h3>Mark Benson</h3>
            <p>markbenson@core...</p>
            </div>
            <span className="logout">↩</span>
        </div>
        </div>
    );
    };

    export default SideBar;
