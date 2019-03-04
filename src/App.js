import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './List.js'
import Form from './Form.js'
import './index.css';
import Done from './Done';

class App extends React.Component {
    state = {
        characters: [],
        doneArray: []

    };
   
    removeCharacter = index => {
        const { doneArray } = this.state;

        this.setState({
            doneArray: doneArray.filter((doneArray, i) => {
                return i !== index;
            })
        });
    }
    addToDone = index => {
        const {characters} = this.state;
        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            }),
            doneArray: [...this.state.doneArray,characters[index]]

        });
    
    }
      
    handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] });
    }
    render() {
        return (
            <div className="main">
                <div>
                    <h1>TODO</h1>
                    <div className="cards">
                        <Todo characterData={this.state.characters}
                            addToDone={this.addToDone}
                        />
                    </div>
                   <h1>DONE</h1>
                   <div className="cards">
                   <Done doneArray={this.state.doneArray}
                       removeCharacter={this.removeCharacter}
                   />
                </div>
               </div>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}
export default App;