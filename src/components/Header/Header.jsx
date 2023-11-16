import React from 'react'
import './Header.css'
import {FaHome} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../config/firebaseConfig'
import { signOut } from 'firebase/auth'

function Header() {

    const [user] = useAuthState(auth);

    const categories = ["Health", "Food", "Travel", "Technology"]

    const navigate = useNavigate();

  return (
    <div className="header-container">
        <FaHome onClick={() => navigate('/')} />
        <div className="categories-container">
            {
                categories.map(item => 
                    <Link className="nav-link" to={`/category/${item}`} key={item}>
                        {item}
                    </Link>)
            }
        </div>
        {
                user ? <div>
                        <span className="username">
                            {user?.displayName}
                        </span>
                        <button onClick={()=>signOut(auth)} className="auth-link">
                            Log Out
                        </button>
                    </div>
                    :
                    <Link to="/auth" className="auth-link">Sign Up</Link>
            }
    </div>
  )
}

export default Header