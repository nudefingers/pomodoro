import React, { useState, useEffect } from 'react';

function Posts() {
    const [posts, setPosts] = useState([])
    const [isSmallWindow, setIsSmallWindow] = useState(false)
    const AMOUNT = 10

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json()
                setPosts(data.slice(0, AMOUNT))
            } catch (error) {
                console.error(error)
            }
        }
    
        fetchPosts()
    
        const handleResize = () => {
            setIsSmallWindow(window.innerWidth < 768)
        }
    
        handleResize()
        window.addEventListener('resize', handleResize)
    
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    

    return (
        <div>
            <h1>Top posts</h1>
            <div className={`${isSmallWindow ? "compact" : "posts-container"}`}>
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Posts;
