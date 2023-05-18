
const Navbar = () => {
    return (
        <header className="p-3">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <div className="col-6">
                        <h2 className="fw-bold">Welcome Back</h2>
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                        </form>

                        <div className="dropdown text-end">
                            <div className="d-block link-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            </div>
                            <ul className="dropdown-menu text-small">
                                <li className="dropdown-item">Profile</li>
                                <li><hr className="dropdown-divider" /></li>
                                <li className="dropdown-item">Log out</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar