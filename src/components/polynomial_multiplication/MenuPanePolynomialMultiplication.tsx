import ResumeLink from "../links/resumeLink";

interface MenuProps {
  setCurrentPage: (page: string) => void;
}

const MenuPanePolynomialMultiplication = ({ setCurrentPage }: MenuProps) => {
  const bachelorURL = `${import.meta.env.BASE_URL}/public/PDF/Bachelor_Polynomial_Multiplication.pdf`;

  return (
    <div className="pane pane-menu">
      
      <nav className="menu">
        <ul>
        <li>
            <a
            href="#"
            onClick={() => setCurrentPage("frontPage")}
            className="front-page-link"
          >
            Front Page
          </a>
          </li>
          <li>
            <ResumeLink link = {bachelorURL} text = "Download Bachelor Report"/>
          </li>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#karatsuba">Karatsuba</a>
          </li>
          <li>
            <a href="#fft">FFT</a>
          </li>
          <li>
            <a href="#testing">Testing</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPanePolynomialMultiplication;
