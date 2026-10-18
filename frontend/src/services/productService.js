import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_SERVER_URL
})

export async function getProducts() {
  const response = await api.get('/product')
  return response.data
}

export async function getProductById(productId) {
  const response = await api.get(`/product/${productId}`)
  return response.data
}

export async function createProduct(productData) {
  const response = await api.post('/product', productData)
  return response.data
}

export async function updateProduct(productId, productData) {
  const response = await api.put(`/product/${productId}`, productData)
  return response.data
}

export async function deleteProduct(productId) {
  const response = await api.delete(`/product/${productId}`)
  return response.data
}

export async function getLowStockProducts() {
  const response = await api.get('/product/low-stock')
  return response.data
}

export async function getStatistics() {
  const response = await api.get('/product/statistics')
  return response.data
}