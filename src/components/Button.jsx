export default function Button({ children, ...props }) {
    return (
        <>
            <button className="bg-indigo-800 text-white px-6 py-2 rounded-lg cursor-pointer shadow hover:bg-indigo-900 " {...props}>
                {children}
            </button>
        </>
    )
}

// this is button css : hover:scale-105 transform transition duration-300