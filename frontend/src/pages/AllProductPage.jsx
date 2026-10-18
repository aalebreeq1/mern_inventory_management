import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { getProducts } from '../services/productService'

function AllProductPage() {
    const [products, setProducts] = useState([])


    async function getAllProducts() {
        const data = await getProducts()
        setProducts(data)

    }
    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <div>
            <h1>All Products</h1>

            {products.length === 0 && <p>No products found.</p>}

            {products.map((product) => (
                <div className="product" key={product._id}>
                    <h2>{product.title}</h2>
                    <p>Price: {product.price}</p>
                    <Link to={`/products/${product._id}`}>View Details</Link>
                </div>
            ))}
        </div>
    )
}

export default AllProductPage