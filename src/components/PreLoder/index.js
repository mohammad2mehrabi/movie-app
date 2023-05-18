import ReactLogo from "../../assets/react-logo.svg"

const PreLoader = ({ show }) => {
    return (
        <div className={`preloader bg-soft flex-column justify-content-center align-items-center ${{show} ? "" : "show"}`}>
            <img className="loader-element animate__animated animate__jackInTheBox" src={ReactLogo} alt="ReactLogo" height={40} />
        </div>
    );
}

export default PreLoader