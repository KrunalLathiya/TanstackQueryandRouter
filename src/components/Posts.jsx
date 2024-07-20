// src/components/Posts.jsx


import { Link as RouterLink } from '@tanstack/react-router';
import { Container, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { usePosts } from '../hooks/usePosts';

const Posts = () => {
    const { data, error, isLoading } = usePosts();

    if (isLoading) return <CircularProgress />;
    if (error) return <Typography color="error">An error occurred: {error.message}</Typography>;

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                Posts
            </Typography>
            <List>
                {data.map(post => (
                    <ListItem key={post.id} button component={RouterLink} to={`/posts/${post.id}`}>
                        <ListItemText primary={post.title} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Posts;
