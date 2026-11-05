import { useState } from "react";
import Card from "@/components/Card";
import { activities, diasSemana } from "@/data/activities";
export default function Actividades({ logueado }) {
  const [mensaje, setMensaje] = useState("");
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
