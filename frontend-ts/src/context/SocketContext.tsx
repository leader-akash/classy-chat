import React, { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io, { Socket } from "socket.io-client";

interface User {
    // Define your user interface here
}

interface SocketContextType {
    socket: Socket | null;
    onlineUsers: User[];
}

export const SocketContext = createContext<SocketContextType>({
    socket: null,
    onlineUsers: [],
});

const SocketContextProvider: React.FC = ({ children }) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io(`http://localhost:4000`);
            setSocket(newSocket);

            return () => {
                newSocket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, []);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};

export { SocketContextProvider };
