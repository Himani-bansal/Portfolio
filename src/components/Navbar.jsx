import React from 'react'

export const Navbar = () => {
    return <nav className="navbar z_index navbar-dark .bg_union navbar-expand-lg py-lg-2">
        <div className=" container-xl">
            <a className="text-decoration-none text-white w_15_lg" href="/">himanibansal137@gmail.com</a>
            <button className="navbar-toggler p-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close btn-close-white p_12" data-bs-dismiss="offcanvas" aria-label="Close"> </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item position-relative hover_nav mx-0 mx-lg-3 mx-xl-4">
                            <a className="nav-link active p-3 ff_roboto fs-5 text-nowrap" aria-current="page" href="#about">About
                                me</a>
                        </li>
                        <li className="nav-item position-relative hover_nav mx-0 mx-lg-2 mx-xl-3">
                            <a className="nav-link active p-3 ff_roboto fs-5 " href="#skills">Skills</a>
                        </li>
                        <li className="nav-item position-relative hover_nav mx-0 mx-lg-2 mx-xl-3">
                            <a className="nav-link active p-3 ff_roboto fs-5" href="#education">Education</a>
                        </li>
                        <li className="nav-item position-relative hover_nav mx-0 mx-lg-2 mx-xl-3">
                            <a className="nav-link active p-3 ff_roboto fs-5" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item position-relative hover_nav mx-0 mx-lg-2 mx-xl-3">
                            <a className="nav-link active p-3 ff_roboto fs-5" href="#contact">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

}

