import PropTypes from 'prop-types'

function Item ({marca, ano_lancamento}) {
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

Item.defaultProps = {
    marca: "Marca nao foi definida",
    ano_lancamento: "0000"
}

export default Item