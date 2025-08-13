"use client"


import { store } from "@/store"
import { useEffect, useState } from "react"
import { Provider } from "react-redux"

interface ReduxProviderProps {
    children: React.ReactNode
}

const ReduxProvider: React.FC<ReduxProviderProps> = ({ children }) => {
    const [isClient, setIsClient] = useState(false)


    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider