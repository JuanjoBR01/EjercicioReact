import { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import Museums from "../museums/museums";
import Artwork from "./artwork";
import "./style.css";

function Artworks() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";

  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        const secret = document.getElementById("secret");
        let id = parseInt(secret.innerHTML);
        setMuseums(museums.filter((p) => p.id === id));
      });
  }, []);

  const createMuseums = () => {
    const containter = document.getElementById("root");
    const root = ReactDOMClient.createRoot(containter);

    root.render(<Museums />);
  };

  const titulito = document.getElementById("titulito");
  titulito.onclick = function () {
    createMuseums();
  };

  const barra = document.getElementById("barra");
  barra.onclick = function () {
    createMuseums();
  };

  return (
    <div className="row">
      {museums.map((museum) => (
        <Artwork key={museum.id} post={museum.artworks} />
      ))}
    </div>
  );
}

export default Artworks;