import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import {
    getProductById,
    deleteProduct
} from '../services/productService'

function ProductDetailsPage() {
    const [product, setProduct] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()


    async function loadProduct() {
        const data = await getProductById(id)
        setProduct(data)

    }
    useEffect(()=>{
        loadProduct()
    },[id])

    function navToEdit() {
        navigate(`/products/${id}/edit`)
    }

    async function handleDelete() {

        await deleteProduct(id)
        navigate('/products')

    }

    return (
        <div>

            <>
                <h1>{product.title}</h1>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>

                <button onClick={navToEdit}>Edit Product</button>
                <button onClick={handleDelete}>Delete Product</button>
            </>

        </div>
    )
}

export default ProductDetailsPage