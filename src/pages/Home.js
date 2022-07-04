import chime0 from '../imgs/chime0.png'
function Home() {
    return (
        <div className="container text-center">
            <div>
                <h1>Chinemerem Theodore.</h1>
            </div>
            <div>
                <article>
                    <h1>FRONTEND DEVELOPER</h1>
                    {/* <p>I build things for the web.</p> */}
                    <p>I'm a software engineer specializing in building and designing exceptional digital experiences.</p>
                </article>
            </div>
            <div>
                <article>
                    <img src={chime0} alt='logo' className="logomain" />
                </article>
            </div>
        </div>
    )
}
export default Home