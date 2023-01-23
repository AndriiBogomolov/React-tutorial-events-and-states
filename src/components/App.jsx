import React, { Component } from 'react';
// import TodoList from './TodoList';
// import Counter from './Counter';
// import Dropdown from './Dropdown';
// import ColorPicker from './ColorPicker';
import Form from './Form/Form';

// const colorPickerOptions = [
//   { label: 'red', color: '#f44336' },
//   { label: 'green', color: '#4caf50' },
//   { label: 'blue', color: '#2196f3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },

// ];

export class App extends Component {
  state = {
    todos: [
    { id: 'id-1', text: 'Выучить React', completed: false },
    { id: 'id-2', text: 'Разобраться с React Router', completed: false },
    { id: 'id-3', text: 'Освоить Redux', completed: false },
    ],

  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  }


  // handleTagChange = event => {
  //   this.setState({ tag: event.currentTarget.value });
  // };


  render() {
    // const { todos } = this.state;

    // const totalTodoCount = todos.length;
    // const completedTodosCount = todos.reduce((total, todo) => (todo.completed ? total + 1 : total), 0,);

    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
      </div>
   

    );
  };


};
export default App;


// export const App = () => (
//   <>
//   <h1>Состояние компонента</h1>
  
//     <ColorPicker options={colorPickerOptions}  />

//     <Dropdown />

//     <Counter/>

//   </>
//   // return (
//   //   <div
//   //     style={{
//   //       height: '100vh',
//   //       display: 'flex',
//   //       justifyContent: 'center',
//   //       alignItems: 'center',
//   //       fontSize: 40,
//   //       color: '#010101'
//   //     }}
//   //   >
//   //     React homework template
//   //   </div>
//   // );
// );
// export default App;
