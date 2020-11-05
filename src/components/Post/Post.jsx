import React from 'react'
import s from './Post.module.css'

const Post = ({title, image, description}) => {
    return (
        <div className={s.post}>
            <div
                style={{
                backgroundImage: `url(${image})`,
                width: '250px'
            }}
                className={s.postImage}></div>
            <div className={s.postInfo}>
                <h2 className={s.postTitle}>{title}</h2>
                <p className={s.postDescription}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Post;