import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

// Link component that serves as a wrapper for anchor tags
function Link({to, children, className, activeClassName}) {

    // get the current path and navigate to the new path
    const { navigate, currentPath } = useNavigation();

    const classes = classNames('hover:text-blue-600 hover:underline', className, currentPath === to && activeClassName);
    const handleClick = (event) => {
        
        // if user is holding down cmd or ctrl key, let the browser handle the click
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        
        // set window location to 'to'
        navigate(to);
    }

    return (
        <a href={to} className={classes} onClick={handleClick}>{children}</a>
    )
};

export default Link;