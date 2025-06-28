import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaCursos() {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    fetch("https://cefis.com.br/api/v1/event")
      .then(res => res.json())
      .then(data => {
        console.log("API respondeu:", data);
        setCursos(data.data);
      })
      .catch(err => console.error("Erro ao buscar cursos:", err));
  }, []);

  if (cursos.length === 0) {
    return <h2>Carregando cursos...</h2>;
  }

  return (
    <div>
      <h1>Lista de Cursos</h1>

      {cursos.map(curso => (
      <Link key={curso.id} to={`/curso/${curso.id}`} className="card">
        {curso.banner ? (
          <img src={curso.banner} alt={curso.title} />
        ) : (
          <div className="sem-imagem">
            <span>Sem imagem</span>
          </div>
        )}
        <h2>{curso.title}</h2>
      </Link>
    ))}

    </div>
  );
}

export default ListaCursos;