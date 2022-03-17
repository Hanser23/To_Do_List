import './App.css';
import React from 'react';
import ListTask from './ListTask';


class App extends React.Component{
  constructor (props){
    super(props)
    this.state={
      items:[],
      currentItems:{
        text:"",
        key:""
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);


  }
  handleInput(e){
    this.setState({
      currentItems:{
        text: e.target.value,
        key: Date.now()
      }
    })

  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItems;
    console.log(newItem)
    if (newItem.text!==""){
      const newItems =[...this.state.items, newItem];
      this.setState({
        items:newItems,
        currentItems:{
          text:'',
          key:''
        }
      })
    }

  }
  render(){
    return(
      <div className='App'>
        <header>
          <form id= "to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder='Write Taks' value={this.state.currentItems.text} onChange={ this.handleInput}/>
            <button type="submit"> Add</button>
          </form>
        </header>
        <ListTask items= {this.state.items}></ListTask>
        </div>

    )
  }

}

export default App;
