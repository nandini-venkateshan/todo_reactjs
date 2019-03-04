import React from 'react';
import './index.css';

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <div key={index} >
            <p className="content">{row.name}</p>
            <p class="clickbutton"><i class="fa fa-check-circle-o" onClick={() => props.addToDone(index)}></i></p>
           
        </div>
        );
    });

    return <p>{rows}</p >;
}

class Todo extends React.Component {
    render() {

        return (
                <TableBody 
                    characterData={this.props.characterData} 
                    addToDone={this.props.addToDone} 
                />
           
        );
    }
}

export default Todo;