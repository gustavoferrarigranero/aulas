import styles from './ComponenteTexto.module.css'

function ComponenteTexto({onChange}) {
    return (
        <input type="text" className={styles.texto} onChange={onChange} />
    )
}

export default ComponenteTexto;