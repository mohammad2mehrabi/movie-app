import "./indexwar.css"


const Wrapper = (props) => {
    return (
        <main>
            <div className="container12 col-xl-10 col-xxl-8 pt-5">
                <div className="row align-items-center g-lg-5 pt-5">
                    <div className="col-md-5 mx-auto col-lg-5 shadow-sm rounded-4 bg-body-tertiary border border-light">
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Wrapper