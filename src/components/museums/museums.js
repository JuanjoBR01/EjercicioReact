import { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";
import Artworks from "../artworks/artworks";
import Post from "./museum";
import "./style.css";

function Museums() {
  const url = "https://back-museums-uniandes.herokuapp.com/api/museums";
  const [museums, setMuseums] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((museums) => {
        setMuseums(museums);
      });
  }, []);

  const deleteMuseums = (id) => {
    setMuseums([]);

    const titulito = document.getElementById("titulito");
    let filteredPosts = museums.filter((p) => p.id === id);
    titulito.innerHTML = "Museo " + filteredPosts[0].name + ": Obras pricipales";

    const secret = document.getElementById("secret");
    secret.innerHTML = filteredPosts[0].id;

    const containter = document.getElementById("test");
    const root = ReactDOMClient.createRoot(containter);

    root.render(<Artworks />);
  };

  return (
    <div className="div" id="museos">
      <div className="row navBar" id="barra" >
        <div className="col-6">
          <h1 className="banner" id="titulito">
            Museos de Arte Moderno
          </h1>
        </div>
        <div className="col-2">
          <h3 className="barritaMuseos">
            Museos
          </h3>
        </div>
        <div className="col-2">
          <h3 className="barrita">
            Artistas
          </h3>
        </div>
        <div className="col-2">
          <h3 className="barrita">
            Movimientos
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <hr></hr>
        </div>
        <div className="col-1"></div>
      </div>
      <p id="secret" ></p>

      <div className="row test" id="test">
        {museums.map((museum) => (
          <Post key={museum.id} post={museum} onDelete={deleteMuseums} />
        ))}
      </div>
    </div>
  );
}

export default Museums;
