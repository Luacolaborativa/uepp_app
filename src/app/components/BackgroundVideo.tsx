export default function Background() {
    return (
        <main className="absolute h-screen w-screen -z-40">
            <video 
                className="h-full w-full -z-50 absolute top-0 object-cover"
                autoPlay loop muted
                preload="none"
            >
                <source src="/videos/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
                
            </video>

            <div className = "absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-800 bg-opacity-50 -z-40"></div>
        </main>
    );
}