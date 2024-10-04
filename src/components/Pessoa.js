import styles from "./Pessoa.module.css"

function Pessoa({nome, idade, profissao, foto}) {
    return (
        <div className={styles.PessoaTamanho}>
            <div className={styles.PessoaDiv}>
                <img src={foto} alt={nome}/>
                <h4 className={styles.PessoaH4}>Nome: {nome}</h4>
                <p className={styles.PessoaP}>Idade: {idade}</p>
                <p className={styles.PessoaP}>Profissão: {profissao}</p>
            </div>
        </div>   
    )
}
export default Pessoa