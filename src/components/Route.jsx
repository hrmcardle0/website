import useNavigation from "../hooks/use-navigation";

// Route component that renders children based on the current path
function Route({ path, children }) {

    // get the current path
    const { currentPath } = useNavigation()

    // if target path contains /post, return children so we can render the post page with /post/:id
    if (path.includes('/posts')) {

        // get id from path in form of /post/:id
        const id = currentPath.split('/')[2];

        return children;
    }

    // if currentPath === path, return children
    if (currentPath === path) {
        return children;
    }

    return null;

  };
  
  export default Route;