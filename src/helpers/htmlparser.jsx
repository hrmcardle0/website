// Parse raw text into html
function ParseTextIntoHtml(text) {
    text = parseContentQuotes(text)
    text = parseContentParagraph(text)
    text = parseContentIndents(text)
    text = parseContentCode(text)
    
    return text
}

// Parse raw text code blocks, which start and end with *
const parseContentCode = (content) => {
    let result = []
    for (let i = 0; i < content.length; i++) {
        if (content[i].type === 'p') {
            //console.log(content[i].props.children)
            if (content[i].props.children.startsWith('*') && content[i].props.children.endsWith('*')) {
                // push children but remove *
                result.push(
                    <code key={i} className="bg-gray-300 text-gray-900">
                        {content[i].props.children.slice(1,-1)}
                    </code>
                )
                result.push(<br key={content.length * 100}/>)
                result.push(<br key={content.length * 101}/>)
            } else {
                result.push(content[i])
            }
        } else {
            result.push(content[i])
        }
    }

    return result
};

// Parse indents as part of bullet lists
const parseContentIndents = (content) => {
    let result = [];
    let inPreBlock = false;
    let preContent = [];

    for (let i = 0; i < content.length; i++) {
        if (content[i].props.children.startsWith('<pre>')) {
            // Start a new <pre> block
            inPreBlock = true;
            preContent = []; // Reset preContent for the new block
            continue;
        }

        if (content[i].props.children.endsWith('</pre>')) {
            // End the current <pre> block and process its content
            inPreBlock = false;
            const segments = preContent.join('\\n').split('\\n');
            const list = segments.map((line) => {
                const leadingSpaces = line.match(/^ */)[0].length; // Count leading spaces
                const paddingLeft = Math.floor(leadingSpaces / 4) * 25; // Convert spaces to padding (4 spaces = 25px)

                if (line.trim().startsWith('-')) {
                    const bullet = '-';
                    const text = line.slice(line.indexOf('-') + 1).trim(); // Get text after '-'
                    return { bullet, text, paddingLeft };
                }

                return { bullet: null, text: line.trim(), paddingLeft };
            });

            result.push(
                <ul key={`pre-${i}`} className="list-none">
                    {list.map((item, index) => (
                        <li
                            key={index}
                            style={{
                                paddingLeft: `${item.paddingLeft}px`,
                                display: 'flex', // Flex layout to align bullet and text
                                alignItems: 'flex-start',
                            }}
                        >
                            {item.bullet && (
                                <span style={{ paddingRight: '8px', fontWeight: 'bold' }}>
                                    {item.bullet}
                                </span>
                            )}
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            );

            // Add a newline after the <pre> block
            result.push(<br key={`newline-${i}`} />);
            continue;
        }

        if (inPreBlock) {
            // Collect content within the <pre> block
            preContent.push(content[i].props.children);
        } else {
            // Outside <pre> blocks, render content normally
            result.push(content[i]);
        }
    }

    return result;
};

// Parse paragraphs, which are separated by \n\n
const parseContentParagraph = (content) => {
        // if line ends with \\n, it should be a new paragraph
        let result
        const segments = content.split('\\n\\n');

        const lines = segments.map((segment, index) => {
            return (
                <p className="mb-4" key={index}>
                    {segment}
                </p>
            )
        })

        return lines

};

// Parse starting and ending characters left over from raw json
const parseContentQuotes = (content) => {

    let result = content

    // remove starting quotes
    if (result[0] === '"' || result[0] === "'") {
        result = content.slice(1);
    }

    // remove ending quotes
    if (result[result.length - 1] === '"' || result[result.length - 1] === "'") {
        result = result.slice(0, -1);
    }

    // remove more ending quotes
    if (result[result.length - 2] === '"' || result[result.length - 2] === "'") {
        result = result.slice(0, -2);
    }

    // remove even more ending quotes
    if (result[result.length - 3] === '"' || result[result.length - 3] === "'") {
        result = result.slice(0, -3);
    }

    // remove ending \n
    if (result[result.length - 1] === '\\' || result[result.length - 1] === 'n') {
        result = result.slice(0, -1);
    }

    return result
};

// Take string (segment), determine how many spaces are in front. Format those into html pieces
function formatHtmlSpaces(segment) {
    // for every space in front of segment, add a &nbsp;
    let result = ""
    for (let i = 0; i < segment.length; i++) {
        if (segment[i] === " ") {
            result += "\u00A0"
        } else {
            break
        }
    }
    // add the rest of the segment
    result += segment

    return result
};

export default ParseTextIntoHtml;