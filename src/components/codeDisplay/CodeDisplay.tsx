import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeDisplay.css';

interface Props {
  codeString: string;
  language: string;
}

const CodeDisplay = ({ codeString, language}: Props) => {
  const customStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.2',
    fontFamily: "'Courier New', Courier, monospace",
    color: '#fff', // Ensure text color is set
  };

  return (
    <div className="codeHighlight">
      <SyntaxHighlighter
        language= {language}
        style={vscDarkPlus}
        codeTagProps={{ style: customStyle }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
