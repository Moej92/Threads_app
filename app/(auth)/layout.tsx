
export default function AuthLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <body>
            <div className="w-full flex justify-center items-center min-h-screen">
                {children}
            </div>
            
        </body>
    )
}
