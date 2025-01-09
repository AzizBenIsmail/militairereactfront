import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
export default function App() {
  //1
  //const name = "yeser";
  const [count, setCount] = useState(0);

  const element = <h1> hello thoraya</h1>;
  const etudiant = { nom: "mohamed", prenom: "  ben foulen" };
  const listEtudiant = [
    { nom: "aziz", prenom: "ben foulen", age: "27", Id: 0 },
    { nom: "yeser", prenom: "ben foulen", age: "30", Id: 1 },
    { nom: "thoraya", prenom: "ben foulen", age: "90", Id: 2 },
  ];

  function getName(nom) {
    return nom;
  }

  function getetudiant(etudiant) {
    return etudiant.nom + etudiant.prenom;
  }

  const [calculation, setCalculation] = useState(0);

  const [name, setName] = useState("hello world");

  useEffect(() => {
    console.log('cette fonction va etre execute la premiere fois et a chaque modification de la variable count ');
    console.log('car le deuxieme argument est count ');
    return () => {
    console. log('cette partie va etre execute pour nettoyer et lors de loperation unmounting ');
    }
    }, [count])
    
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

  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar name="thoyara" prenom="ben foulen" /> */}
        hello {name}
        {element}
        hello {etudiant.nom} {etudiant.prenom}
        {listEtudiant.map(function (item) {
          return (
            <div key={item.Id}>
              {" "}
              {item.Id} | {item.nom} | {item.prenom} | {item.age}
            </div>
          );
        })}
        {getName("salem")}
        <br />
        {getetudiant(etudiant)}
        <br />
        <p>Vous avez cliqué {count} fois</p>
        <button
          onClick={() => {
            setCount(count + 2);
          }}
        >
          {" "}
          Cliquer ici{" "}
        </button>
        <br />
        {name}
        <input onChange={(e) => setName(e.target.value)}></input>
      </header>
    </div>
  );
}
