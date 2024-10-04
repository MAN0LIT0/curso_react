import PropTypes from 'prop-types'

function Item ({
    marca = "Marca nao foi definida",
    ano_lancamento = '000'
}) {
    return (
        <>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired
}

export default Item