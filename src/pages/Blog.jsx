import { useSelector } from "react-redux";
import useThunk from "../hooks/useThunk";
import { useEffect } from "react";
import { fetchPosts } from "../store";
import Link from "../components/Link";

function Blog() {

    // initialize fetchPosts thunk
    const [doFetchPosts, isLoadingPosts, loadingPostsError] = useThunk(fetchPosts);

    // get posts from redux store, our state
    const { posts } = useSelector((state) => state.posts);

    // fetch posts on component mount
    useEffect(() => {
        doFetchPosts();
    }, [doFetchPosts]);

    // render appropriate content based on state
    let content = null;
    if (!isLoadingPosts && !loadingPostsError && posts) {

        // render posts when data is available
        content = (
            <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
                <main className="max-w-4xl mx-auto mt-8 p-4">
                    <h2 className="text-2xl mb-4">Blog Posts</h2>
                    {posts.map((post) => (
                        <article key={post.id} className="mb-8">
                            <h3 className="text-lg mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                            <p>{post.description}</p>
                            <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                                Read more
                            </Link>
                        </article>
                    ))}
                </main>
            </div>
        );
    }

    return (
        <>
            {isLoadingPosts && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="spinner border-t-4 border-b-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
                </div>
            )}
            {content}
        </>
    )
};

export default Blog;
