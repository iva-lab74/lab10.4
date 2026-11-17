import { Link } from "react-router-dom";
import posts from "../lib/posts";

//list of posts
export default function Blog() {


    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {/*so the blogs make a list */}
                {posts.map((post) => (
                    <li key={post.id}>

                        <Link to={`/blog/${post.slug}`} > {post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}