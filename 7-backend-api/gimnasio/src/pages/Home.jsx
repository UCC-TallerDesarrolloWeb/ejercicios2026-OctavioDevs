import Card from "@/components/Card";
import { home } from "@/data/home";
export default function Home() {
  return (
    <>
      <h2>Conocé nuestras actividades</h2>
      <div className="cards">
        {home.map((actividad) => (
          <Card key={actividad.nombre} titulo={actividad.nombre}>
            <img src={actividad.imagen} alt={actividad.nombre} />
          </Card>
        ))}
      </div>
    </>
  );
}
