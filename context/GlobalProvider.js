import { createContext, useContext, useEffect, useState } from "react";


const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
}

const GlobalProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // getCurrentUser()
    //     .then((res) => {
    //         if(res){
    //             setUser(res);
    //             setIsLoggedIn(true);
    //         }
    //         else{
    //             setIsLoggedIn(false);
    //             setUser(null);
    //         }
    //     }) 
    //     .catch((error) => {
    //         console.log("error", error);
    //     })
    //     .finally(() => {
    //         setIsLoading(false);
    //     })
  }, []);

  return (
    <GlobalContext.Provider value={{ 
        isLoggedIn, 
        setIsLoggedIn,
        user,
        setUser,
        isLoading
     }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;