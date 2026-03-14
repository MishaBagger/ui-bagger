export default function Home() {
    return (
        <>
        <div className="container mx-auto">
            <h1 className="text-5xl font-bold text-orange-400 text-center mt-32 p-">
                Hello, Tailwind!
            </h1>
            <button className="bg-orange-500 rounded block mt-10 mx-auto border border-white/50 border-solid hover:bg-orange-400 transition-colors ease-in-out duration-300">
                Click me
            </button>

            <div className="bg-blue-400 mt-5 w-24 h-32 animate-pulse">
                Width & Height
            </div>
            <div className="flex justify-between gap-5">
                <div className="bg-blue-300 w-20 h-20"/>
                <div className="bg-blue-300 w-20 h-20"/>
            </div>

            <div className="grid grid-cols-2 gap-5">
                <div className="bg-blue-500 h-20"/>
                <div className="bg-blue-500 h-20"/>
            </div>
            </div>
        </>
    )
}
