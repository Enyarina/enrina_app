import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        </div>
        <Post/>
        <Post/>
        <Post/>
    </div>
}
export default MyPosts;