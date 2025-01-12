import logo from "./logo.svg";
import "./App.css";
import Welcome from "./welcom.js";
import useIsOnlineCustomName from './useIsOnline.js'; 
import React, { useState, useEffect } from "react";

function App() {
  //1
  let name = "Jane Doe";
  const element = <h1> Hello, name </h1>;
  //2
  const etudiant = {
    nom: "Mohamed Aziz ",
    prenom: "Ben Ismail ",
  };
  //3
  function getEtudiant(etudiant) {
    return etudiant;
  }
  //4
  const listEtudiant = [
    { nom: "Doe", prenom: "Jane", age: "27", objectID: 0 },
    { nom: "Elisa", prenom: "benz", age: "30", objectID: 0 },
  ];

  //5
  const inlineStyle = {
    color: "#2ecc71", //vert
    fontSize: "26px", //size
  };

  //6
  const welcom = <Welcome name="Jane Doe" />;

  //7
  //const [state, setState] = useState(initialState);

  //8
  const [{ color, background }, setColor] = useState({
    color: "red",
    background: "purple",
  });

  //9
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  });

  //10
  useEffect(() => {

    setTimeout(() => { 
      setCount((count) => count + 1); 
    }, 1000);
  
    }, [] );
  
    //11
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {

      setCalculation(() => count * 2);
      }, [count]);

    //12
    //const [{color,background}, setColor] = useState({color:"red",background:"purple"});

    useEffect(() => {
      console.log(isOnline)
      console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable color ');
      console.log('car le deuxieme argument est color ');
      return () => {
      console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
      }
      }, [color])
      
      useEffect(() => {
      console.log('cette fonction va etre execute une fois seulement ');
      console.log('car le deuxieme argument est un tableau vide ');
      return () => {
      console. log(' cette partie va etre execute seulement lors de loperation unmounting ')
      }
      
      }, [])
      
      useEffect(() => {
      console.log('cette fonction va etre execute chaque re-render');
      console.log('car pas de deuxieme argument passer');
      });

      //13
      const isOnline = useIsOnlineCustomName();

    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}

        {/*1*/}
        {element}

        {/*2*/}
        Bonjour {etudiant.nom} {etudiant.prenom}

        {/*3*/}
        <h1> Bonjour {getEtudiant("Ahmed Naffati")} </h1>

        {/*4*/}
        <div>
          {listEtudiant.map(function (item) {
            return <div key={item.objectID}> {item.prenom} </div>;
          })}
        </div>

        {/*5*/}
        <div className="maClasse">
          <p style={inlineStyle}>Hi React Class</p>
        </div>

        {/*6*/}
        <Welcome name="Formation React" />

        {/*7*/}

        {/*8*/}
        <div className="App">
          <input
            onChange={(e) =>
              setColor((current) => ({ ...current, color: e.target.value }))
            }
          />
          <h1>My favorite color is {color}!</h1>
        </div>

        {/*9*/}
        <div>
          <p>Vous avez cliqué {count} fois</p>

          <button onClick={() => setCount(count + 1)}> Cliquez ici </button>
        </div>

        {/*10*/}
        <h1>l've rendered {count} times!</h1>

        {/*11*/}
        <p>Count: {count }</p>

        <button onClick={() => setCount((c) => c + 1) } > +</button>

        <p>Calculation: {calculation}</p>

        {/*13*/}
        {isOnline ? (
        <h1>Vous êtes actuellement en ligne.</h1>
      ) : (
        <h1>Vous êtes actuellement hors ligne.</h1>
      )}
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
