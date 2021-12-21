import productsList from './productsData';
import Product from './Product';
import './Products.css';

function Products(props) {
    const generateProducts = () => {
        const products = [];
        productsList.forEach(({item, price, stock}) => {
            products.push(
                <>
                    <Product key={item} item={item} price={price} />
                    <div className='item-break'></div>
                </>
            );
        })
        return products;
    }
    return(
        <div id='products-div'>
            {generateProducts()}
        </div>
    )
}

export default Products;
