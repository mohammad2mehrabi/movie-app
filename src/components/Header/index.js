import { Link } from "react-router-dom"
import "./styleheder.css"
import { useNavigate } from "react-router-dom";



const Header = ({ setPage, debouncedOnChange, handleModalLogin, handleModalRegister, genres }) => {

    let navigate = useNavigate()
    const sortGenre = genres.sort((a, b) => a.name.localeCompare(b.name))

    const renderGenres = () => {

        return sortGenre.map(genre => {
            return (
                <Link className="text-decoration-none text-primary" to={`/genre/${genre.id}-${genre.name}`} key={genre.id}>
                    <li className="dropdown-item" key={genre.id}>{genre.name}</li>
                </Link>
            );
        })

    }

    return (
        <div className="container-fluid px-5 ">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between py-3">
                <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none text-uppercase">
                </Link>

                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 fw-semibold text-white boxd  ul ">
                    <li className="nav-item px-3 dropdown">
                        <span className="dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">Genres</span>
                        <ul className="dropdown-menu  ul">
                            {renderGenres()}
                        </ul>
                    </li>
                </ul>

                <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                    <div>
                        <input
                            type="search"
                            className="form-control"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={(e) => {
                                setPage(1)
                                debouncedOnChange(e)
                            }}
                        />
                    </div>
                </form>

                
            </header>
        </div>
    )
}

export default Header