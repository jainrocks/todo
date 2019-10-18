import React, {Component} from 'react';
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            inputText: ''
        }
    }
    onChange = (event) => {
        
        this.setState({
            inputText: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        let items = this.state.items;
        let item = {};
        item["text"] = this.state.inputText;
        item["isChecked"] = false;
        items.push(item);
        this.setState({
            inputText: '',
            items: items
        })
    }

    handleChangeChk = (index) => {
        let items = this.state.items;
        items[index].isChecked = !items[index].isChecked;
        this.setState({
            items
        });
    }

    removeItem = (index) => {
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({
            items
        });
    }
    render() {
        return (<div>
            <form onSubmit={this.onSubmit}>
                <label>Add ToDo Item</label><br />
                <input type="text" value={this.state.inputText} onChange={this.onChange} />
                <button className="paddingLeft">Submit</button>
            </form>
            <br /><br />
            <label>ToDo Items in the List</label>
            <ul>
                {
                    this.state.items.map((item, index) => {
                        return <li key={index}><input type="checkbox" value={item.isChecked} onChange={() => this.handleChangeChk(index)}/> <span className={item.isChecked ? 'strikeThrough': 'normal'} >   {item.text} </span> <button onClick={() => this.removeItem(index)}>delete</button></li>        
                    })
                }
            </ul>
        </div>);
    }
}

export default Todo;