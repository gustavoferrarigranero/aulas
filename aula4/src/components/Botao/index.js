import css from './Botao.module.css'

function Botao({ onClick, children }) {
  return (
    <button className={css.botao} onClick={onClick}>
      {children}
    </button>
  )
}

export default Botao