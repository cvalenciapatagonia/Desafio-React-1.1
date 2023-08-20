import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const perritos = [
  {
    hipervinculo:
      "https://cdn.pixabay.com/photo/2015/03/14/03/40/border-collie-672633_1280.jpg",
    nombre: "Kai",
    descripcion:
      "Lleno de energia, llega a ser incluso en ocasiones intolerable, no se aburre de destruir cosas, botar panderetas y ladrar como loco, asi y todo, es un buen perro.",
    tagText: "Energético",
    tagColor: "danger",
  },
  {
    hipervinculo:
      "https://cdn.pixabay.com/photo/2016/11/08/18/10/dog-1809044_1280.jpg",
    nombre: "Max",
    descripcion:
      "Ladra cada vez que llegas a casa. Si en alguna oportunidad te sigue a un negocio cercano, lo lamentaras dado el desastre que deja y la verguenza que te hara pasar.",
    tagText: "Caotico",
    tagColor: "primary",
  },
  {
    hipervinculo:
      "https://cdn.pixabay.com/photo/2016/02/11/17/00/dog-1194087_1280.jpg",
    nombre: "Black",
    descripcion:
      "Amigo de Max. Cuando a este no lo dejan salir, el se las arregla para burlar la seguridad de sus dueños y planea los escapes mas epicos para soltar a su amigo.",
    tagText: "Leal",
    tagColor: "bg=success",
  },
  {
    hipervinculo:
      "https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_1280.jpg",
    nombre: "Inti",
    descripcion:
      "El mas tierno de todos. Un perro de casa que lo maximo que molesta es cuando pide jugar con su pelotita, el perro ideal si lo que quieres es compañia y ternura. ",
    tagText: "Tierno",
    tagColor: "secondary",
  },
];

function App() {
  return (
    <div className="page-container">
      <Header title="Adopta un perrito" />
      <div className="card-container">
        {perritos.map((perrito, index) => (
          <Card
            key={index}
            hipervinculo={perrito.hipervinculo}
            nombre={perrito.nombre}
            descripcion={perrito.descripcion}
            tagText={perrito.tagText}
            tagColor={perrito.tagColor}
          />
        ))}
      </div>
      <Footer description="Explora nuestra galeria de adopcion de perros callejeros. No te prometemos el mejor comportamiento canino pero si mucho amor para tu hogar y familia. ¡Adopta un callejero!" />
    </div>
  );
}

export default App;
