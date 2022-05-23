import React from "react";

class Nextpage extends React.Component {

    render() {
        return (
            <div className="row-nextpage">
                <div className="page-number" ><p>◀</p></div>
                <div className="page-number-onclick" id="1" ><p>1</p></div>
                <div className="page-number" id="2" ><p>2</p></div>
                <div className="page-number" id="3"><p>3</p></div>
                <div className="page-number" id="4" ><p>4</p></div>
                <div className="page-number" id="5" ><p>5</p></div>
                <div className="page-number" id="..." ><p>...</p></div>
                <div className="page-number" id="10"><p>10</p></div>
                <div className="page-number"><p>▶</p></div>
            </div>
        )
    }
}
export default Nextpage;