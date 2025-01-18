import useNavigation from "../hooks/use-navigation";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import useThunk from "../hooks/useThunk";
import ParseTextIntoHtml from "../helpers/htmlparser";
import { useEffect } from "react";
import { fetchPost } from "../store";

function Post() {

    // get the current path and extract the post ID
    const { currentPath } = useNavigation();
    const id = currentPath.split('/')[2];

    // initialize fetchPost hook
    const [doFetchPost, isLoadingPost, loadingPostsError] = useThunk(fetchPost);

    // get post from redux store, our state
    const post = useSelector((state) => state.posts.post);

    // fetch post data if `id` is present
    useEffect(() => {
        if (id) {
            doFetchPost(id);
            //console.log('Fetching post with id: ', id);
        }
    }, [doFetchPost, id]);

    // render appropriate content based on state
    let content;

    // if no id, render the footer only
    if (!id) {
        content = (
            <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
                <Footer />
            </div>
        );
    } else if (isLoadingPost) { // if still loading, show spinner
        content = (
            <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
                <Footer />
            </div>
        );
    } else if (loadingPostsError) { // if error loading post, show error message
        content = (
            <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
                <main className="max-w-4xl mx-auto mt-8 p-4">
                    <h2 className="text-2xl mb-4">Welcome</h2>
                    <div>Error loading post: {loadingPostsError.toString()}</div>
                </main>
                <Footer />
            </div>
        );
    } else if (post && post.content) { // if post is loaded and exists, render post content
        const parsedContent = ParseTextIntoHtml(post.content);
        content = (
            <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
                <main className="max-w-4xl mx-auto mt-8 p-4">
                    <h2 className="text-2xl mb-4">{post.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{post.date}</p>
                    
                    {parsedContent}
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <>
            {isLoadingPost && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="spinner border-t-4 border-b-4 border-blue-500 w-16 h-16 rounded-full animate-spin"></div>
                </div>
            )}
            {content}
        </>
    );
};

export default Post;
