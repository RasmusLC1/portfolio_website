
import './PolynomialMultiplication.css'; // Import the CSS file
import MenuPanePolynomialMultiplication from './MenuPanePolynomialMultiplication';
import Introduction from './Introduction';
import Karatsuba from './Karatsuba';
import FFT from './FFT';
import TEST from './Test';
import "./PolynomialMultiplication.css"


interface DungeonProps{
  setCurrentPage: (page: string) => void;
}

const PolynomialMultiplication = ({setCurrentPage}: DungeonProps) => {
  
  
    return (
      <div id="Polynomial Multiplication" className = "bachelor">
        <div className="pane-menu">
          {<MenuPanePolynomialMultiplication setCurrentPage={setCurrentPage}/>}
        </div>

        <div className="content-container">
          {Introduction()}
          {Karatsuba()}
          {FFT()}
          {TEST()}
          </div>
          </div>
          
    );
    
};

export default PolynomialMultiplication;
