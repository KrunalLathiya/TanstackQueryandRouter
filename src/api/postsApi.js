// src/api/postApi.js

import axios from 'axios';

const fetchPosts = async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return data;
};

const fetchPost = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
};

export { fetchPosts, fetchPost };
