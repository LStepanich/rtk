import { FunctionComponent } from "react";
import { PostI } from "../models/PostI";

interface PostComponentProps {
    post: PostI,
    remove: (post: PostI) => void
    update: (post: PostI) => void
}

const PostComponent: FunctionComponent<PostComponentProps> = ({ post, remove, update }) => {
    return (<div>
        id: {post.id}<br></br>
        Title: {post.title}<br></br>
        Author: {post.author}<br></br>
        <button onClick={() => { remove(post) }}>Delete</button>
        <button onClick={() => { update(post) }}>Update</button>
    </div>);
}

export default PostComponent;