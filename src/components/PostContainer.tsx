import { PostI } from "../models/PostI";
import { postApi } from "../services/postService"
import PostComponent from "./PostComponent";

export default function PostContainer() {
    const { data: posts, isLoading, isError } = postApi.useFetchAllPostsQuery(10);
    const [createPost, { }] = postApi.useCreateNewPostMutation();
    const [removePost, { }] = postApi.useDeletePostMutation();
    const [updatePost, { }] = postApi.useUpdatePostMutation();
    const addPost = async () => {
        const postTitle = prompt('Title');
        const postAuthor = prompt('Author');
        await createPost({
            title: postTitle,
            author: postAuthor
        } as PostI);
    }
    const remove = async (post: PostI) => {
        await removePost(post);
    }
    const update = async (post: PostI) => {
        const title = prompt('newTitle');
        await updatePost({ ...post, title: title })
    }
    return (
        <div>
            <button onClick={addPost}>Add new Post</button>
            {isLoading && <h1>Loading</h1>}
            {isError && <h1>Что то пошло не так</h1>}
            {posts?.map((post: PostI) => {
                return <PostComponent update={update} remove={remove} post={post} />
            })
            }
        </div>
    )
}
