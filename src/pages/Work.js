function Work() {
    return (
        <div className="container">
            <div>
                <h2>My Work.</h2>
            </div>
            <div className="row mt-2">
                <div className="col-sm-6 hover">
                    <a href="https://nkuziigbo.com" >
                        <div className="mt-2 p-5 bg rounded">
                            <h4>Nkuzi Igbo</h4>
                            <p>A single page app built with HTML and CSS.</p>
                        </div>
                    </a>
                </div>
                <div className="col-sm-6 hover">
                    <a href="https://react-projects-23-quiz.netlify.app/" >
                        <div className="mt-2 p-5 bg rounded">
                            <h4>Quiz</h4>
                            <p>A simple quiz web app basically built with React. </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Work