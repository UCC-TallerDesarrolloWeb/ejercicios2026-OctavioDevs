import { useState, useEffect } from "react";
import Card from "@/components/Card";
import { diasSemana } from "@/data/activities";
export default function Actividades({ logueado }) {
  const [mensaje, setMensaje] = useState("");
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch(import.meta.env.VITE_BASE_URL + "activities")
      .then((response) => {
        if (!response.ok)
          throw new Error("No se pudieron cargar las actividades");
        return response.json();
      })
      .then(setActivities)
      .catch((error) => setMensaje(error.message));
  }, []);
  return (
    <>
      <h2>Actividades</h2>
      <p role="status">{mensaje}</p>
      <div className="cards">
        {activities.map((actividad) => (
          <Card
            key={actividad.id}
            titulo={actividad.nombre}
            subtitulo={actividad.descripcion}
          >
            <ul>
              {actividad.horarios.map((horario) => (
                <li key={horario.dia}>
                  {diasSemana[horario.dia]}: {horario["hora-inicio"]} a{" "}
                  {horario["hora-fin"]}
                </li>
              ))}
            </ul>
            {logueado && (
              <button
                onClick={() =>
                  setMensaje("Inscripción a " + actividad.nombre + " realizada")
                }
              >
                Inscribirme
              </button>
            )}
          </Card>
        ))}
      </div>
    </>
  );
}
