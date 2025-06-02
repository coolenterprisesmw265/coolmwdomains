import { useState, useEffect } from "react"

type ToastType = "success" | "error" | "warning" | "info"

interface Toast {
    id: string
    message: string
    type: ToastType
    duration?: number
}

export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([])

    const addToast = (message: string, type: ToastType = "info", duration = 5000) => {
        const id = Math.random().toString(36).substring(2, 9)
        setToasts((prev) => [...prev, { id, message, type, duration }])
    }

    const removeToast = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id))
    }

    useEffect(() => {
        if (toasts.length > 0) {
            const timer = setTimeout(() => {
                setToasts((prev) => prev.slice(1))
            }, toasts[0].duration)

            return () => clearTimeout(timer)
        }
    }, [toasts])

    return {
        toasts,
        addToast,
        removeToast,
        toast: {
            success: (message: string, duration?: number) => addToast(message, "success", duration),
            error: (message: string, duration?: number) => addToast(message, "error", duration),
            warning: (message: string, duration?: number) => addToast(message, "warning", duration),
            info: (message: string, duration?: number) => addToast(message, "info", duration),
        },
    }
}