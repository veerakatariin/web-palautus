import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'
import AdminView from './components/AdminView';
import TopPage from './components/TopPage'

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: "",
      adminModeActive: false,
    }
  }

  onSearchFieldChange = (event) => {

    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, manufacturer, price, rating, image) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,
      manufacturer: manufacturer,
      price: price,
      rating: rating,
      image: image
    });

    this.setState({
      items: newItems
    });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    let output =
      <>
      <div className={'TopperClass'}style={{display:'flex', flexDirection:'row'}}>
        <div style={{paddingBottom:'39px', paddingTop:'38px', display:'flex', flexDirection: 'row', color:'white',fontSize:'20px', alignSelf:'center', backgroundColor:'rgb(15, 17, 17)'}}>
        <div style={{marginLeft:'20px', marginRight:'50px'}}>Amazon</div>Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        </div>
        <TopPage/> 
        </div>
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
      </>


    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false}) }
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }
                  deleteItem={ this.deleteItem }
               />;
    }



    return (
      <>
        { output }
      </>
    )
  }
}

export default App;