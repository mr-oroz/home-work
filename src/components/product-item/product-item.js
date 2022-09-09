const ProductItem = ({ name, onIndex }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }} className="product-item">
            <p>{name}</p>
            <div><button onClick={onIndex}>click</button></div>
        </div>
    )
}

export default ProductItem;