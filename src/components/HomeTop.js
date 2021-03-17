import Nav from './Nav';

function HomeTop(props){
    return <div className="home-header">
        <Nav />
        <div className="hero-container">
            <div className="hero-heading">
                <h3>Hey, I'm Kari.</h3>
                <h1>product designer merging user & business insights to tackle <strong>problems that matter.</strong></h1>
            </div>
            <div className="hero-image">
            </div>
        </div>
    </div>
}

export default HomeTop