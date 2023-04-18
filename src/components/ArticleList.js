import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList () {
    const post = blogData.posts
    const article = posts.map((post) => {
        return <Article key = {post.id} title = {post.title} date= {post.date} preview = {post.preview}></Article> 
    })
    return (
        <main>
            <Article />
        </main>
    )
}

export default ArticleList