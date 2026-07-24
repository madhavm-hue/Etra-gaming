import "./particles.css";

const particles = Array.from({ length: 18 }, (_, index) => index + 1);

export default function Particles() {
  return (
    <div className="particles" aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle}
          className={`particle particle-${particle}`}
        />
      ))}
    </div>
  );
}