import React, { Component} from 'react'
import { connect } from 'react-redux'
import Todo from './Todo'

// here, we want to get our state from Redux
//we need a mapStateToProps(), and include it as an argument for connect()


// Todo in this case doesn't have any Redux related code, and is a regular, functional component.
class TodosContainer extends Component {
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text ={todo} />)


    render() {
        // console.log(this.props.todos)
        return(
            <div>
                {this.renderTodos()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(TodosContainer)

// now, we need to create a presentational component to handle displaying our todos.