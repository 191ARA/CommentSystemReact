import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts');
  }
};

export const getPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch post ${postId}`);
  }
};

export const getCommentsByPostId = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/posts/${postId}/comments`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch comments for post ${postId}`);
  }
};

export const addNewComment = async (comment) => {
  try {
    const response = await axios.post(`${API_URL}/comments`, comment);
    return response.data;
  } catch (error) {
    throw new Error('Failed to add new comment');
  }
};

export const deleteCommentById = async (commentId) => {
  try {
    await axios.delete(`${API_URL}/comments/${commentId}`);
    return commentId;
  } catch (error) {
    throw new Error(`Failed to delete comment ${commentId}`);
  }
};