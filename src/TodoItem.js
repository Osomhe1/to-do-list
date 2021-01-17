import React, {Component} from "react";

class TodoItem extends Component{
    constructor(props){
        super(props);

       this.createTask = this.createTask.bind(this);
    }



    createTask(item){
        return <li onClick={() => this.delete(item.key)}
        
                      key={item.key}>{item.text}</li>
    }

    delete(key){
        this.props.delete(key);
    }

    render() {
        var todoEntries = this.props.entries;
        var listItem = todoEntries.map(this.createTask)

        return(
            <ul className="theList">
                {listItem}

            </ul>
        );
    }
}

export default TodoItem;