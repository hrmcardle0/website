import classNames from "classnames"

// Footer component that serves as the footer for each page
function Footer({ className }) {

    let classes = classNames('max-w-4xl mx-auto py-4 mt-8 text-center text-sm text-gray-500', className)
    return (
        <footer className={classes}>
            &copy; 2025 Henry McArdle. All rights reserved. All opionions are my own.
        </footer>
    )
};

export default Footer;