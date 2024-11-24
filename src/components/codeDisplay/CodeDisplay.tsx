import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./CodeDisplay.css"

interface Props {
    codeString: string
}


const CodeDisplay = ({codeString}: Props) => {

    const customStyle = {
        fontSize: '20px',
        lineHeight: '1.2'
      };
      
  return (
    <div className = "codeHighlight">
    <SyntaxHighlighter language="python" style={vscDarkPlus}
    customStyle={customStyle}>
      {codeString}
    </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
