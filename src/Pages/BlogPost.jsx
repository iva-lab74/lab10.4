import { useParams } from "react-router-dom"
import posts from "../lib/posts"


//just the post
export default function BlogPost() {

    //we need the slug from url
    const { slug } = useParams();

    //which post matches the slug
    const post = posts.find((p) => p.slug === slug);

    //error
    if(!post) {
        return <h1>No posts found</h1>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}