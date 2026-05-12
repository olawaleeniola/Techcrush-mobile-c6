import axios from 'axios';

//const baseUrl = 'https://jsonplaceholder.typicode.com';
const baseUrl = 'https://dummyjason.com';



const axiosClient = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: { 
    'Content-Type': 'application/json',
  },
});

  export const fetchPostsData = async (skip:number) => {
    try {
      const response = await axiosClient.get (`/posts?Limit=30&skip=${skip}`);
        console.log(response.data);
        return response.data; 
    } catch (error) { 
    } 
     };

     const postsData = async (userData: any) => {
    try {
      const response = await axiosClient.post (`/posts`, userData);
      console.log(response.data);
      return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    } 
     };

     const userData = {name: 'John Doe', email: 'john.doe@example.com',};

     postsData(userData);