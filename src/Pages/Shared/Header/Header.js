import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/Firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
import logo from '../../../Assets/Logo/logo.png'

const Header = () => {
    const [user] = useAuthState(auth)
    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
            <nav className="sticky-top navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} className='logo img-fluid' alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/allitemsshow'>All Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/blogs'>Blogs</Link>
                            </li>
                            {
                             user ? (   
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Profile
                                </div>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to='/manageitems'>Manage Items</Link></li>
                                    <li><Link className="dropdown-item" to='/additem'>Add New Item</Link></li>
                                    <li><Link className="dropdown-item" to='/myitems'>My Items</Link></li>
                                    <li><button className='dropdown-item' onClick={handleSignOut}>Sign Out</button></li>
                                </ul>
                            </li>):
                            (
                            <li className="nav-item">
                                <Link className="nav-link" to='/login'>Login</Link>
                            </li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Header;