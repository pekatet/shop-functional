import './App.css'
import React from 'react';
import PropTypes from 'prop-types';
import ItemModel from './ItemModel';

const item1 = new ItemModel(
  'Tiger of Sweden',
  'Leonard coat',
  'Minimalistic coat in cotton-blend',
  'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  399,
  '£',
)

function ShopItemFunc ({ item }) {
  return (
    <div className="main-content">
      <h2>{item.brand}</h2>
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div className="description">
        {item.descriptionFull}
      </div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"/>
      </div>
      <div className="divider"/>
      <div className="purchase-info">
        <div className="price">
          {item.currency}{item.price.toFixed(2)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
  )
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemModel).isRequired
}

function App () {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'/>
      </div>
      <div className="window">
        <ShopItemFunc item={item1}/>
      </div>
    </div>
  )
}

export default App
