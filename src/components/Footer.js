function Footer(props){
    return <footer>
        <div className="footer-row">
            <div className="footer-col">
                <div className="footer-bold">Built with React + ☕</div>
                <div className="footer-links">
                    <a href="mailto:karibergstedt@gmail.com"><strong>karibergstedt@gmail.com</strong></a>
                    <a href="https://www.linkedin.com/in/karibergstedt/">LinkedIn</a>
                    <a href="https://dribbble.com/kariberg">Dribbble</a>
                    <a href="/">Resume</a>
                </div>
                <div className="light">© 2021 Kari Bergstedt</div>
            </div>
            <div className="footer-col-right">
                <div className="footer-bold">Dive in →</div>
                <div>Case study title</div>
            </div>
        </div>
    </footer>
}

export default Footer