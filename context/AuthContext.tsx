import { createContext, useState } from "react";

export const MyContext = createContext({

    user: {name: "", email: "", age: 0 },
    
    setUser: (user: {name: "", email: "", age: 0}) => {},
});

export const MyProvider = ({ children }: { children: React.ReactNode }) => {
   
    const [user, setUser] = useState({name: "", email: "", age: 0 });

    return (
        <MyContext.Provider value={{ user, setUser }}>
        {children}
        </MyContext.Provider>

    );
};