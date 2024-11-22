/* Reset default margins and paddings */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* Content container that includes the menu pane and main content */
.content-container {
  position: relative; /* Ensure fixed elements are relative to this container when transformed */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content horizontally */
  width: 100%;
  height: 100vh; /* Full viewport height */
  transition: transform 0.3s ease;
}

/* Shift content to the right when menu is open */
.content-container.menu-open {
  transform: translateX(250px); /* Adjust based on burger menu width */
}

/* Burger menu styles */
.burger-menu {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1000;
}

/* Menu pane at the top */
.pane-menu {
  position: fixed; /* Fix the menu pane at the top */
  top: 0;
  left: 0;
  width: 100%;
  background-color: #242424;
  box-sizing: border-box;
  z-index: 999; /* Ensure it sits above other content */
  padding: 10px 0;
}

/* Style the menu */
.menu {
  display: flex;
  justify-content: center;
}

.menu ul {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu li {
  margin: 0 15px;
}

.menu a {
  color: #d7d6d6;
  text-decoration: none;
  font-size: 1.5rem;
}

.menu a:hover {
  color: #b85c0b;
}

/* Main content */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers split-container */
  width: 100%;
  margin-top: 60px; /* Adjust based on the height of pane-menu */
  flex: 1; /* Allows main-content to grow and fill available space */
}

/* Container that holds the side-by-side panes */
.split-container {
  display: flex;
  flex: 1; /* Fills the remaining space */
  max-width: 1200px; /* Adjust as needed */
  width: 100%;
  overflow: hidden; /* Prevents scrolling on split-container */
}

/* Common styles for panes */
.pane {
  background-color: #242424;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers content inside panes */
}

/* Styles for the stationary pane */
.pane-stationary {
  width: 40%;
  overflow: hidden; /* Prevents scrolling */
  height: auto; /* Allows height based on content */
}

/* Styles for the scrollable pane */
.pane-scrollable {
  width: 60%;
  overflow-y: auto; /* Enables vertical scrolling */
  overflow-x: hidden;
  height: 100%; /* Fills the height of split-container */
}

/* Responsive layout for smaller screens */
@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
    align-items: center; /* Centers panes when stacked */
  }

  .pane-stationary,
  .pane-scrollable {
    width: 100%; /* Full width when stacked */
    margin-bottom: 20px; /* Optional spacing between panes */
    height: auto; /* Adjust height when stacked */
  }

  .pane-scrollable {
    height: auto; /* Adjust height when stacked */
  }
}

/* Image styles */
.rounded-image {
  border-radius: 10px;
  height: 200px;
  width: auto;
  overflow: hidden;
  display: block;
}

.circular-image {
  border-radius: 50%;
  height: 150px;
  width: 150px;
  object-fit: cover;
  border: 2px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Heading and paragraph styles */
.pane-stationary h1,
.pane-scrollable h1 {
  font-size: 2rem;
  color: #b85c0b;
  font-weight: bold;
  text-align: left;
}

.pane-stationary p,
.pane-scrollable p {
  font-size: 1.2rem;
  color: #d7d6d6;
  line-height: 1.3;
  margin-top: 10px;
  text-align: left;
}

/* Link container styles */
.link-container {
  width: 50px;
  height: 80px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Link hover effects */
.github-link:hover svg,
.email-link:hover svg,
.linkedin-link:hover svg,
.resume-link:hover svg {
  fill: #b85c0b;
}

/* Link styles */
.github-link,
.email-link,
.linkedin-link,
.resume-link {
  display: inline-block;
  height: 50px;
  width: 50px;
  margin: 0 10px;
  transition: fill 0.2s ease-in-out;
}

/* Links container alignment */
.links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}
