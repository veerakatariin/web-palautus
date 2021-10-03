import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

function randomNum()
{return Math.floor(Math.random() * 11);}


/* A ES6 class style stateful component for the shopping list application */

class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'x' },
        { id: 2, value: 'Bread', qty: 6, unit: 'x' },
        { id: 3, value: 'Carrots', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  addCarrots = () =>
  {
    this.setState({items: [...this.state.items, {id: 0, value: "Carrots", qty: randomNum(), unit: 'x'}]})
  }
  addMilk = () =>
  {
    this.setState({items: [...this.state.items, {id: 1, value: "Milk", qty: randomNum(), unit: 'x'}]})
  }
  addBread = () =>
  {
    this.setState({items: [...this.state.items, {id: 2, value: "Bread", qty: randomNum(), unit: 'x'}]})
  }
  addEggs = () =>
  {
    this.setState({items: [...this.state.items, {id: 3, value: "Eggs", qty: randomNum(), unit: 'x'}]})
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ () => this.addCarrots()}>Add carrots</button>
      <button onClick={ () => this.addMilk()}>Add milk</button>
      <button onClick={ () => this.addBread()}>Add bread</button>
      <button onClick={ () => this.addEggs()}>Add eggs</button>
    </div>
  }
}

export default App;
