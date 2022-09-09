import ProductItem from '../product-item/product-item'

const Product = ({ data, handlerClickIndex }) => {
    return (
        <div className="product">
            {
                data.map((elem, index) => <ProductItem
                    key={index}
                    onIndex={() => handlerClickIndex(index)}
                    index={index}
                    name={elem} />)
            }
        </div>
    )
}


export default Product;