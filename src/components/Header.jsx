import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../assets/logo/logo.png'
import { AuthContext } from '../Context/UserContext';
import Loading from './Loading';

const Header = () => {

    const { user, logout, loadingUser } = useContext(AuthContext);

    if (loadingUser) {
        return <Loading></Loading>
    }

    const handleLogout = () => {
        logout()
            .then(toast.warning('User logged out!', { autoClose: 1000 }))
            .catch(error => console.log(error))
    }

    return (

        <Navbar fluid={true} rounded={true} >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src={logo}
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Life Advice
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                {
                    user ?
                        <>
                            {
                                user.photoURL ?
                                    <>
                                        <Dropdown
                                            arrowIcon={false}
                                            inline={true}
                                            label={<Avatar alt="User settings" img={user.photoURL} rounded={true} />}
                                        >
                                            <Dropdown.Header>
                                                <span className="block text-sm">
                                                    {user.displayName}
                                                </span>
                                                <span className="block truncate text-sm font-medium">
                                                    {user.email}
                                                </span>
                                            </Dropdown.Header>
                                            <Dropdown.Item>
                                                Profile
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                Settings
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item>
                                                <NavLink className={({ isActive }) => isActive ? undefined : undefined} onClick={handleLogout} >
                                                    Sign Out
                                                </NavLink>
                                            </Dropdown.Item>
                                        </Dropdown>

                                    </>
                                    :
                                    <>
                                        <NavLink className={({ isActive }) => isActive ? undefined : undefined} onClick={handleLogout} >
                                            Sign Out
                                        </NavLink>

                                    </>
                            }

                        </>
                        :
                        <NavLink to="/login" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>
                            Login
                        </NavLink>

                }

                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <NavLink to="/home" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>
                    Home
                </NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>
                    Courses
                </NavLink>
                <NavLink to="/blog" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>
                    Blog
                </NavLink>
                <NavLink to="/faq" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>
                    FAQ
                </NavLink>
                {
                    user &&
                    <>
                        <NavLink to="/my-review" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>
                        My reviews
                        </NavLink>
                        <NavLink to="/add-service" className={({ isActive }) => isActive ? "bg-[#3A4256] text-white" : undefined}>
                        Add Course
                        </NavLink>
                    </>

                }
            </Navbar.Collapse>
        </Navbar>


    );
};

export default Header;