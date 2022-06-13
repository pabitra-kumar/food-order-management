import React from 'react';
import { Link } from 'react-router-dom'
import "./component.css"
export const Header = ({num}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/food-order-management/">Home</Link>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                    </div> */}
                    <div className='text-light ms-auto me-3 d-flex'>
                        <Link className='nav-link' to="/food-order-management/cart"><img src="images/cart-bag.ico" height='35vh' alt="cart bag" /> Cart</Link>
                        <div id="numcart">{num}</div>
                    </div>
                </div>
            </nav>
        </>
    )
}

