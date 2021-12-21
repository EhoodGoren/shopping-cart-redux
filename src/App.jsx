import Products from './Products';
import Checkout from './Checkout';
import './App.css';

function App() {
  return (
    <div id='app'>
      <h1 id='app-title'>Shopping Cart</h1>
      <div id='products'>
        <h2 className='shop-titles'>ITEMS</h2>
        <Products />
      </div>
      <div id='checkout'>
        <h2 className='shop-titles'>ORDER SUMMARY</h2>
        <Checkout />
      </div>
    </div>
  );
}

export default App;
