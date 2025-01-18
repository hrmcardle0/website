import { useContext } from "react";
import NavigationContext from "../context/navigation";

// useNavigation hook that returns the currentPath and navigate function
function useNavigation() {
    
    return useContext(NavigationContext);
};

export default useNavigation;