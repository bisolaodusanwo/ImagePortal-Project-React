import React, { useState } from 'react';
import styled from 'styled-components';

interface UploadPostProps {
    onPostCreated: (newPost: Post) => void;
}

interface Post {
    mediaUrl: string;
    content: string;
    createdAt: string;
}

const UploadContainer = styled.div`
    background-color: white;
    border: 1px solid #dbdbdb;
    border-radius: 8px;
    padding: 20px;
    margin: 20px 0;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
    margin-bottom: 10px;
    display: block;
`;

const TextArea = styled.textarea`
    width: 100%;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px;
    font-size: 14px;
    resize: none;
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #0095f6;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
    &:disabled {
        background-color: #b2dffc;
        cursor: not-allowed;
    }
`;

const UploadPost: React.FC<UploadPostProps> = ({ onPostCreated }) => {
    const [file, setFile] = useState<File | null>(null);
    const [caption, setCaption] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        if (file) {
            const formData = new FormData();
            formData.append('media', file);

            const uploadResponse = await fetch('http://localhost:3000/upload', {
                method: 'POST',
                body: formData,
            });

            const uploadData = await uploadResponse.json();

            if (uploadResponse.ok) {
                const postResponse = await fetch('http://localhost:3000/post', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        mediaUrl: uploadData.mediaUrl,
                        content: caption,
                    }),
                });

                const postData: Post = await postResponse.json();
                if (postResponse.ok) {
                    onPostCreated(postData);
                }
            }
        }

        setLoading(false);
    };

    return (
        <UploadContainer>
            <form onSubmit={handleSubmit}>
                <Input type="file" onChange={handleFileChange} required />
                <TextArea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Write a caption..."
                    required
                ></TextArea>
                <Button type="submit" disabled={loading}>
                    {loading ? 'Posting...' : 'Post'}
                </Button>
            </form>
        </UploadContainer>
    );
};

export default UploadPost;
