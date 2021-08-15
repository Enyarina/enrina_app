import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img
                src='https://webcomplex.com.ua/wp-content/uploads/2014/11/slider.png'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts />
    </div>
}
export default Profile;