import React from "react";
import classes from './Post.module.css'

const Post = () => {
    return <div>
        <div className={classes.item}>
            <img src='http://archilab.online/images/1/123.jpg'/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    </div>
}
export default Post;