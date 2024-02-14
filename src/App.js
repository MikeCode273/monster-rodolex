import React,{Component} from 'react';

import { CardList } from './componentes/card-list/card-list.component';

import './App.css';
import { SearchBox } from './componentes/search box/search-box.component';


class App extends Component{
  constructor(){
    super();
    this.state={
      monster: [],
      searchField: ''
    };
  }
  
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users=> this.setState({monster:users}))
  }

  handleChange= e=> {
    this.setState({searchField:e.target.value})
  }

  render(){
    const {monster,searchField}=this.state;
    const filteredMonsters=monster.filter(monsters=>
      monsters.name.toLowerCase().includes(searchField.toLowerCase())

    );
    return( 
      <div className='App'>   
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monster={filteredMonsters}/>
      </div>
    );
  }
}

    
  

export default App;
