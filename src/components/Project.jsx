
export default function Project({title, deployedLink, gitHub, imagePath}) {

    const gitHubHandler = () => {
        window.open(gitHub)
    }

    const deployedLinkHandler = () => {
        window.open(deployedLink)
    }

    return(
        <>
        <div className="card bg-dark text-white col-3">
            <img className="card-img" src={imagePath} alt="Card image"></img>
            <div className="card-img-overlay">
                <h2 className="card-title" onClick={deployedLinkHandler}>{title} </h2>
                <h6 onClick={gitHubHandler}>GitHub</h6>
            </div>
        </div>
        </>

    )
}
