import React, { useState, useEffect } from 'react';
import './App.css'

  

const App = () => {
   const [posts, setPosts] = useState([]);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
    <div className="posts-container">
       {posts.map((post) => {
          return (
             <div className='posts-titles'>
                  <tr>
                     <td className="post-id"> {post.id}. </td>
                     <td><a href={'https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments'} target="_blank" rel="noopener noreferrer" className="post-title">{post.title}</a></td>
                  </tr>
             </div>
          );
       })}
    </div>
    );
 };

  export default App
