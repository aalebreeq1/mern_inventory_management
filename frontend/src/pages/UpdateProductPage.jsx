import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import {
    getProductById,
    updateProduct
} from '../services/productService'

function UpdateProductPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'electronics',
        price: '',
        quantity: 0
    })

    const { id } = useParams()
    const navigate = useNavigate()

    async function loadProduct() {
        const data = await getProductById(id)

        setFormData({
            title: data.title,
            description: data.description || '',
            category: data.category || 'other',
            price: data.price,
            quantity: data.quantity
        })

    }
    useEffect(() => {
        loadProduct()
    }, [id])

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()

        await updateProduct(id, formData)
        navigate(`/products/${id}`)
    }

    return (
        <div>
            <h1>Edit Product</h1>


            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <label htmlFor="category">Category:</label>
                <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                >
                    <option value="electronics">Electronics</option>
                    <option value="food">Food</option>
                    <option value="clothing">Clothing</option>
                    <option value="furniture">Furniture</option>
                    <option value="other">Other</option>
                </select>

                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    min="0.1"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    min="0"
                    step="1"
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                />

                <button>Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage