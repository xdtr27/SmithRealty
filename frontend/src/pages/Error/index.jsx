import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div>
      <h1>Error 404</h1>
      <h2>Página não encontrada</h2>
      <Link to={'/'}>voltar para a página inicial</Link>
    </div>
  )
}
