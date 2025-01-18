import Footer from "../components/Footer";

function About() {
        
    return (        
        <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">
            <main className="max-w-4xl mx-auto mt-8 p-4">
            <h2 className="text-2xl mb-4">About Me</h2>
            <p className="mb-4">
                I've been in the industry for over 10 years, and specialize in AWS, Azure, and GCP.
                I'm extremely partial to AWS with GCP a close second and Azure a distant third, in order
                of usability preference. My interests include:
            </p>
            <ul className="list-disc list-inside ml-4 mb-4">
                <li>The 3 major Cloud platforms</li>
                <li>Containers & Kubernetes</li>
                <li>React as my frontend of choice</li>
                <li>Python &amp; Golang</li>
                <li>CyberSecurity</li>
            </ul>
            <p>
                I'm an extreme fan of documentation and you can find me creating docs that should've been there but aren't. 
                Outside of tech, you can find me on my boat or somewhere in downtown Annapolis, Maryland.
            </p>
            <p className="py-4">
                But enough about me, head over to the <a href="blog.html" className="text-blue-600 hover:underline">Blog</a>.
            </p>
            </main>

            <Footer />
        </div>
    )
};

export default About;