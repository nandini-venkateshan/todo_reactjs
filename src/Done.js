import React from 'react';

const DoneList = props => { 
    const rows = props.doneArray.map((row, index) => {
        return (
            <div key={index} >
            <p className="content">{row.name}</p>
            <p className="clickbutton"><i className="fa fa-check-circle-o" onClick={() => props.removeCharacter(index)}></i></p>
           
        </div>
        );
    });

    return <p>{rows}</p >;
}

class Done extends React.Component {
    render() {
        return (
            <DoneList doneArray={this.props.doneArray} 
            removeCharacter={this.props.removeCharacter}  />
        );
    }
}

export default Done;