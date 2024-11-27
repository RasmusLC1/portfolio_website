import { useState } from 'react'
import Project from '../resume/Project'
import "./PolynomialMultiplication.css"

const Introduction = () => {

    const [temp, setTemp] = useState("")

    const recipePage = {
      title: 'Bachelor Project: Polynomial Multiplication',
      language: ["C", "Python"],
        libraries: ["MPFR", "GMP"],
        technologies: ["Build Essentials",  "check"],
        period: 'February 2024- June 2024',
        github: "https://github.com/RasmusLC1/Polynomial-Multiplication",
        features: "Bachelor Project in Optimising Polynomial Multiplication using Karatsuba, Recursive and Iterative Fast Fourier Transform",
    };
    console.log(temp)
    
    const techSection = () => {
        return (<div className='techsection'>
            <Project project={recipePage} setCurrentPage={setTemp}/>
            </div>)
    }

  return (
    <div id = "introduction" className='section'>
    <div  className='introduction-bachelor'>
        
        {techSection()}
    </div>
    </div>
  )
}

export default Introduction