import { ReactNode, createContext, useContext, useEffect, useState } from "react";
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

const SocketContextProvider = ({ children }: { children: ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
    const { authUser } = useAuthContext();

    console.log('authUsersID', authUser?._id)

    useEffect(() => {
        if (authUser) {
            const socket = io(`https://classychat.onrender.com/`, {
                query: {
                    userId: authUser?._id
                }
            });
            setSocket(socket);

            socket.on('getOnlineUsers', (users: any) => {
                setOnlineUsers(users)
            })

            return () => {
                socket.close();
            };
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};

const useSocketContext = () => {
    return useContext(SocketContext)
}

export { SocketContextProvider, useSocketContext };
