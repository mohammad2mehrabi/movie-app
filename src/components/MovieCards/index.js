import { Link } from "react-router-dom"

const MoviesCard = ({ id, title, poster, genres, year }) => {
    return (
        <div key={id} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
            <div className="d-flex flex-column justify-content-center align-item-center" >
                <Link className="text-decoration-none text-dark" to={`/moviedetails/${id}`} key={id}>
                    <img
                        className="img-fluid rounded-3 shadow"
                        src={poster}
                        alt="Movie poster"
                    />
                    <div className="d-flex flex-column px-3 pt-4">
                        <h1 className="fs-6 fw-semibold">{title} ({year})</h1>
                        <p className="text-secondary pt-1">{genres}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MoviesCard