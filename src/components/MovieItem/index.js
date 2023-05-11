import "./index-movi.css"

const MovieItem = ({ poster, title, year, released, genres, runtime, country, plot, director, actors, rated, rating }) => {

    return (
        <div className="col-md-12 col-lg-12 py-3">
            <div className="row g-0  rounded-4 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative1 w-75" >

                <div className="col-auto d-none d-lg-block ">
                    <img
                        className="img-fluid1"
                        src={poster}
                        alt="movie poster"
                    />
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                    <h2 className="pb-2 fw-bold">{title} <span>({year})</span></h2>
                    <div className="d-flex align-items-center pb-2">
                        <span className="fs-4 text-warning"><i className="fa fa-star"></i></span>
                        <h5 className="ps-2 fw-bold pt-2">({rating}/10)</h5>
                    </div>
                    <div className='content mt-2'>
                        <div className="d-flex">
                            <span className="fw-bold pe-1">{released} ({country})</span>
                            <span className="fw-bolder pe-1">.</span>
                            <span className="fw-bold pe-1">{rated}</span>
                            <span className="fw-bolder pe-1">.</span>
                            <span className="fw-bold pe-1">{genres}</span>
                            <span className="fw-bolder pe-1">.</span>
                            <span className="fw-bold pe-1">{runtime}</span>
                        </div>
                        <div className="pt-4">
                            <p className="fw-bold">Overview</p>
                            <p>{plot}</p>
                        </div>
                        <div className="pt-2">
                            <span className="fw-bold">Director: </span>
                            <span>{director}</span>
                        </div>
                        <div className="pt-2">
                            <span className="fw-bold">The Cast: </span>
                            <span>{actors}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}

export default MovieItem