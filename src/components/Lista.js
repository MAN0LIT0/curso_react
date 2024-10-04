import Item from "./Item"

function Lista () {
    return (
        <>
            <h2>Lista de Carros</h2>
            <ul>
                <Item marca="McLarem" ano_lancamento={1855}/>
                <Item marca="Ferrari" ano_lancamento={1963}/>
                <Item marca="bugatti" ano_lancamento={1756}/>
                <Item />
            </ul>
        </>
    ) 
}

export default Lista