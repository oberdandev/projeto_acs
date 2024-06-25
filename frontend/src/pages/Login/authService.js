import axios from axios;
const API_URL = 'http://localhost:2101/';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });

    if (response.status === 200) {
      const token = response.data.token;
      localStorage.setItem('token', token);
    }
    
    return response;
  } catch (e) {
    return e.response;
  }
}