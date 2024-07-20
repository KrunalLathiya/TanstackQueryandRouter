// src/hooks/usePosts.js


import { useQuery } from '@tanstack/react-query';
import { fetchPosts, fetchPost } from '../api/postsApi';

export const usePosts = () => {
    return useQuery({ queryKey: ['posts'], queryFn: fetchPosts });
};

export const usePost = (id) => {
    return useQuery({
        queryKey: ['post', id],
        queryFn: () => fetchPost(id),
        enabled: !!id, // Ensure the query only runs if the id is defined
    });
};
