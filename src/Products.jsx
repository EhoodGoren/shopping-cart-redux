import productsList from './productsData';
import Product from './Product';

function Products(props) {
    const generateProducts = () => {
        const products = [];
        productsList.forEach(({item, price, stock}) => {
            products.push(
                <Product key={item} item={item} price={price} />
            );
        })
        return products;
    }
    return(
        <div id='products'>
            {generateProducts()}
        </div>
    )
}

export default Products;
