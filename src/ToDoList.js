import React, {Component} from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

class ToDoList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            item: []
        };


        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem ={
                text:this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return{
                    item: prevState.item.concat(newItem)
                }
            } 
            );
        }

        this._inputElement.value = "";

        console.log(this.state.item);

        e.preventDefault();
    }

    deleteItem(key){
        var filteredItem = this.state.item.filter(function (item) {
            return(item.key !== key)

        });

        this.setState({
            item: filteredItem
        });
    }




    render() {
        return(
        <div className="todolistMain">
          <div className="header">
            <form onSubmit={this.addItem}>
               <input  ref={(a) => this._inputElement = a}
                          placeholder="enter task">
        
               </input>
               <button type="submit">add</button>
            </form>

          </div>
          <TodoItem entries={this.state.item}
                    delete={this.deleteItem}/>
        </div>

        );
    }
}

export default ToDoList;