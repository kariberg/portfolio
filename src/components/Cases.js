function Cases(props){
    return <div>
        <div className="arch"></div>
        <div className="cases-container">
            <h2>case studies</h2>
            <div className="case-blocks">
                <CaseRow />
                <div className="block-row">
                    <CaseColumn /> <CaseColumn />
                </div>
                <CaseRow />
                <div className="block-row">
                    <CaseColumn /> <CaseColumn />
                </div>
            </div>
        </div>
    </div>
}

function CaseRow(props){
    return <div className="row">
        <div className="row-image"></div>
        <div className="row-content">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p class="case-category">Product Design</p>
        </div>
    </div>
}

function CaseColumn(props){
    return <div className="column">
    <div className="col-image"></div>
    <div className="col-content">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p class="case-category">Product Design</p>
    </div>
</div>
}

export default Cases