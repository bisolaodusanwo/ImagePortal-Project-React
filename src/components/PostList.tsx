import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostCard from './PostCard';

interface Post {
    _id: string;
    mediaUrl: string;
    content: string;
    createdAt: string;
}

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PostsList: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <ListContainer>
            {posts.map(post => (
                <PostCard key={post._id} post={post} />
            ))}
        </ListContainer>
    );
};

export default PostsList;
