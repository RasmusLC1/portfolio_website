const menuPane = () => {
    return (
      <div className="pane pane-menu">
      <nav className="menu">
        <ul>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experience">Technical Skills</a>
          </li>
          <li>
            <a href="#work">Work Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
    );
  };

export default menuPane;
