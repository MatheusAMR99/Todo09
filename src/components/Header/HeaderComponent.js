import './HeaderComponent.css'

const HeaderComponent = () => {
  return (
    <header className="header">
      <div id="text-header">
        <h3 >Uma seleção de produtos para você</h3>
      </div>
      <div id = "titulo-principal">
      <h1>especial para você</h1>
      <div id = "descricao-site">
      <p>Todos os produtos desta lista foram selecionados a partir da sua navegação, Aproveite!</p>
      </div>
      </div>
      <div className="buttons-header">
        <button>Conheça a Linx</button>
        <button>Ajude o algoritimos</button>
        <button>Seus produtos</button>
        <button>Compartilhe</button>
      </div>
    </header >
  )
}

export default HeaderComponent