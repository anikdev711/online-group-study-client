
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user, signOutGroupStudyUser } = useContext(AuthContext);
    const handleGroupStudyUserSignOut = () => {
        signOutGroupStudyUser()
            .then(() => {
                console.log('user signed out successfully');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const navLinks = <>
        <li> <NavLink to="/all-assignments">All Assignments</NavLink> </li>
        <li> <NavLink to="/create-assignments">Create Assignments</NavLink> </li>
        <li> <NavLink to="/my-assignments">My Assignments</NavLink> </li>
        <li> <NavLink to="/submitted-assignments">Submitted Assignments</NavLink> </li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li>
                                <a>Assignments Menu</a>
                                <ul className="p-2">
                                    {navLinks}
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-col lg:flex-row lg:justify-center lg:items-center ">
                        <img src={logo} alt="" className="" />
                        <h1 className="font-extrabold text-xl">StudyPeerConnect</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Assignments Menu</summary>
                                <ul className="p-2">
                                    {navLinks}
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? (
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL ? user?.photoURL
                                                : 'https://i.imgur.com/GgbSxBC.png'}
                                            />
                                        </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <p>{user?.displayName ? user?.displayName
                                            : 'Anonymous/Reload'}</p>
                                    </li>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleGroupStudyUserSignOut}
                                            className="btn btn-secondary font-bold">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                            : (<Link to="/login">
                                <button className="btn btn-secondary font-bold">Login</button>
                            </Link>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;