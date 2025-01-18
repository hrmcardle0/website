import Link from "./Link";


// Navbar component represents the horizontal top navigation bar
function Navbar() {
    const links = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Blog', path: '/blog' },
        { label: 'Socials', path: '/contact'},
    ]

    // render link components, with current path bolded
    const renderedLinks = links.map((link, index) => {
        return (
            <Link className="hover:text-gray-600 hover:font-bold" activeClassName='font-bold' key={index} to={link.path}>{link.label}</Link>
        )
    })
    
    return (
        <header className="bg-white shadow">
            <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
                <h1 className="text-lg">Henry McArdle's Blog</h1>
                <nav>
                <ul className="flex space-x-4">
                    {renderedLinks}
                </ul>
                </nav>
            </div>
        </header>
    )

};

export default Navbar;