import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL || 'http://localhost:3000'

const fetchMessages = async () => {
  const response = await axios.get('/')
  console.log('fetchMessages', response.data)
  if (response.status === 200) {
    return response.data
  } else {
    return []
  }
}

const sendMessage = async (message) => {
  const response = await axios.post('/', message)
  return response.data
}

export { fetchMessages, sendMessage }
