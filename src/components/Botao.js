function Botao ({numero}) {
    function ClickBotao() {
        console.log(`fui Clicado! ${numero}`);
    }
    return (
        <div>
            <p>Clique aqui para ativar um evento:</p>
            <button onClick={ClickBotao}>Ativar</button>
        </div>
    )
}

export default Botao