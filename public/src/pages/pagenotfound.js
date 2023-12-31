import React from "react";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <>
            <div class="d-flex align-items-center justify-content-center vh-100 bg-primary">
                <div class="text-center">
                    <h1 class="display-1 fw-bold text-white">404</h1>
                    <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                    <p class="lead">
                        The page you’re looking for doesn’t exist.
                    </p>

                    <Link to='/dashboard' className="btn btn-success">Go Home</Link>
                </div>
            </div>


        </>
     ); 
}
 
export default PageNotFound;