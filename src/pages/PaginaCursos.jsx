import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function PaginaCursos() {
  const { id } = useParams();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    fetch(`https://cefis.com.br/api/v1/event/${id}?include=classes`)
      .then(res => res.json())
      .then(data => {
        console.log("dados do curso:", data);
        setCurso(data.data);
      })
      .catch(err => console.error("Erro ao buscar curso:", err));
  }, [id]);

  if (!curso) return <p>Carregando...</p>;

  return (
    <div className="pagina-curso">
      {curso.banner ? (
        <img src={curso.banner} alt={curso.title} className="banner-curso" />
      ) : (
        <div className="sem-imagem">
          <span>Sem imagem</span>
        </div>
      )}

      <h1>{curso.title}</h1>

      <h2>Aulas:</h2>
      <ul className="lista-aulas">
        {curso.classes && curso.classes.length > 0 ? (
          curso.classes.map(aula => (
            <li key={aula.id}>{aula.title}</li>
          ))
        ) : (
          <li>Nenhuma aula disponível.</li>
        )}
      </ul>
    </div>
  );

}

export default PaginaCursos;