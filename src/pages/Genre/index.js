import { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { enhancedFetch } from "../../services/Http";
import "./indexgen.css"

import Loading from "../../components/Loading"
import ErrorMessage from "../../components/ErrorMessage"
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";


const Genre = () => {

    const [genre, setGenre] = useState([])
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const { id } = useParams()


    const fetchGenre = useCallback(async () => {
        try {
            setLoading(true)
            const response = await enhancedFetch(`https://moviesapi.ir/api/v1/genres/${id}/movies?page=${page}`)
            console.log('response', response.metadata)
            setGenre(response.data)
            setPageCount(response.metadata.page_count)
        } catch (err) {
            setError(true)
        } finally {
            setLoading(false)
        }
    }, [id, page])


    useEffect(() => {
        fetchGenre()
    }, [fetchGenre])

    console.log('genre', genre)


    const renderGenre = () => {

        if (loading) {
            return <Loading />
        }

        if (error) {
            return <ErrorMessage />
        }

        return genre.map(genre => {
            return (
                <div key={genre.id} className="col-lg-3 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
                    <div className="d-flex flex-column justify-content-center align-item-center" >
                        <Link className="text-decoration-none text-dark" to={`/moviedetails/${genre.id}`} key={genre.id}>
                            <img
                                className="img-fluid rounded-3 shadow"
                                src={genre.poster}
                                alt="Movie poster"
                            />
                            <div className="d-flex flex-column px-3 pt-4">
                                <h1 className="fs-6 fw-semibold">{genre.title}</h1>
                                <p className="text-secondary pt-1">{genre.genres.join(', ')}</p>
                            </div>
                        </Link>
                    </div>
                </div >
            );
        })

    }


    return (
        <div className="home">
            <div className="bg-black">
                <div className="row justify-content-center col-lg-12 pt-5 pb-2">
                    <div className="col-lg-12 col-12">
                        <div className="row">
                            {renderGenre()}
                        </div>
                    </div>
                </div>
                <Pagination
                    page={page}
                    setPage={setPage}
                    pageCount={pageCount}
                />
            </div>
            <Footer/>
        </div>
    )
}

export default Genre