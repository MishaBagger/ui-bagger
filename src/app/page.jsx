export default function Home() {
    return (
        <>
            <h1 className="text-5xl font-bold text-orange-400 text-center mt-32 p-">
                Hello, Tailwind!
            </h1>
            <button className="bg-orange-500 rounded block mt-10 mx-auto border border-white/50 border-solid hover:bg-orange-400">
                Click me
            </button>

            <div className="bg-blue-400 mt-5 w-24 h-32">
                Width & Height
            </div>
        </>
    )
}
