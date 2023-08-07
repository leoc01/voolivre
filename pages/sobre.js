import Link from "next/link";

function Sobre() {
  return (
    <div>
      <h1>Sobre o blog.</h1>
      <p>
        {" "}
        Este blog tem um único propósito: Tornar o esporte do voo livre cada vez
        mais acessível para todos os que tem interesse em conhecer e voar
      </p>
      <Link href="/">Página inicial</Link>
    </div>
  );
}

export default Sobre;
