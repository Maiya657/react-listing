import type { Item } from "../Listing/Listing";

export default function ItemCard(item: Item) {
  const stock = item.quantity && item.quantity <= 10 ? 'stock-low'
    : item.quantity && item.quantity <= 20 ? 'stock-medium'
    : 'stock-high' 

  return (
    <div className="product-card">
      <div className="product-image">
        <a href={item.url} className="product-image">
          {item.MainImage && <img src={item.MainImage.url_570xN}/>}
        </a>
      </div>
      <div className="product-info">
        <p className="product-title">{item.title && item.title.length > 50 ? item.title.slice(0, 50) : item.title}</p>
        <p className="price-container product-price">
          {item.currency_code === 'USD' ? '$'
            : item.currency_code === 'EUR' ? '€'
            : item.currency_code === 'GBP' ? '£'
            : 'CAD'}
          {item.price}
        </p>
        <p className={`${stock} item-quantity`}>{item.quantity} left</p>
      </div>
    </div>
  )
}