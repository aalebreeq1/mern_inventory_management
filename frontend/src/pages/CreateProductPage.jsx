import { useState } from 'react'
import { useNavigate } from 'react-router'
import { createProduct } from '../services/productService'

function CreateProductPage() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'electronics',
        price: '',
        quantity: 0
    })

    const navigate = useNavigate()

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await createProduct(formData)
        navigate('/products')

    }

    return (
        <div>
            <h1>Create Product</h1>


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

                <button>Create Product</button>
            </form>
        </div>
    )
}

export default CreateProductPage