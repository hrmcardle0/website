
import Footer from "../components/Footer";
import Link from "../components/Link";

function Home() {
        
    return (        
        <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
            <main className="max-w-4xl mx-auto mt-8 p-4">
                <h2 className="text-2xl mb-4">Welcome</h2>
                <p className="mb-4">
                    I am  cloud security engineer with a decade of experience in the tech space. I'm passionate about all things cloud and technology in
                    general. I enjoy building things. In fact, this simple, minimalistic React-based website is hosted on a far-too-complex
                    kubernetes cluster, because why not?
                </p>
                <p>
                    Feel free to poke around, check out the <Link to="/about" className="text-blue-600 hover:underline">About</Link> page to learn more about my background, visit my <Link to="/blog" className="text-blue-600 hover:underline">Blog</Link> for technical insights, or <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link> me if you want to get in touch.
                </p>
            </main>
            
            <Footer />
        </div>
    )
}

export default Home;