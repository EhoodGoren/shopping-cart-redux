import productsList from './productsData';
import Product from './Product';

function Products(props) {
    const generateProducts = () => {
        const products = [];
        productsList.forEach(({item, price, stock}) => {
            products.push(
                <Product item={item} price={price} stock={stock} />
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
