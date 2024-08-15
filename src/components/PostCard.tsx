import React from 'react';
import styled from 'styled-components';

interface Post {
    mediaUrl: string;
    content: string;
    createdAt: string;
}

interface PostCardProps {
    post: Post;
}

const Card = styled.div`
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    background-color: #fff;
    margin-bottom: 20px;
    max-width: 600px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Username = styled.span`
    font-weight: bold;
    font-size: 14px;
`;

const Media = styled.img`
    width: 100%;
    height: auto;
`;

const Body = styled.div`
    padding: 10px;
`;

const Caption = styled.p`
    font-size: 14px;
`;

const Date = styled.p`
    font-size: 12px;
    color: #8e8e8e;
`;

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <Card>
            <Header>
                <Avatar src="profile_placeholder.jpg" alt="User" />
                <Username>username</Username>
            </Header>
            <Media src={`http://localhost:3000${post.mediaUrl}`} alt="Post" />
            <Body>
                <Caption>
                    <Username>username </Username>{post.content}
                </Caption>
                <Date>{new Date(post.createdAt).toLocaleDateString()}</Date>
            </Body>
        </Card>
    );
};

export default PostCard;
