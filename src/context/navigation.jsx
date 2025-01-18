import { createContext, useState, useEffect } from "react";

const NavigationContext = createContext();

// NavigationProvider provides the currentPath and navigate function to the rest of the app
function NavigationProvider( {children} ) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(() => {
        // called when back or forward clicked
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('popstate', handler)

        // cleanup
        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [])


    const navigate = (to) => {
        // to === '/accordion'
        // push state to history
        window.history.pushState({}, '', to)

        // set our current path
        setCurrentPath(to)
    }

    return (
        <NavigationContext.Provider value={{ currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    )
};

export { NavigationProvider };
export default NavigationContext;