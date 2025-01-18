import { GrLinkedin } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { VscGithubInverted } from "react-icons/vsc";
import Footer from "../components/Footer";
import Link from "../components/Link";

function Contact() {
        
    return (        
        <div className="bg-gray-100 text-gray-900 min-h-screen flex flex-col">      
            <main className="max-w-4xl mx-auto mt-8 p-4 text-left">
                <h2 className="text-2xl mb-4">Socials</h2>
                <ul className="list-none list-inside ml-4 mb-4">
                    <li className="flex items-center">
                        <GrLinkedin className="inline-block m-2" size={16} />
                        <a href="https://www.linkedin.com/in/henryrmcardle/" className="text-blue-600 hover:underline">LinkedIn</a>
                    </li>
                    <li className="flex items-center">
                        <VscGithubInverted className="inline-block m-2" size={16} />
                        <a href="https://github.com/hrmcardle0" className="text-blue-600 hover:underline">GitHub</a>
                    </li>
                </ul>
                <p>
                    Conect with me on LinkedIn or follow me on GitHub. This page is self ran and represents only the views of me, myself and I. 
                    This page is hosted on GitHub <a href="https://github.com/hrmcardle0/website" className="text-blue-600 hover:underline">here</a>.
                </p>
            </main>

            <Footer />
        </div>
    )
}

export default Contact;