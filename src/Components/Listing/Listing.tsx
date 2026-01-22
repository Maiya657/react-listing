import ItemCard from "../ItemCard/ItemCard";

export type ListingProps = {
  items: Item[],
};

export type Item = {
  listing_id: number,
  url?: string,
  MainImage?: {
    url_570xN: string,
  },
  title?: string,
  currency_code?: string,
  price?: string,
  quantity?: number,
  state?: string,
};


export default function Listing({ items }: ListingProps) {
  return (
    <div className="item-list">
      { items.length > 0 
      && items.map((item) => (item.state === 'active' 
        && <ItemCard key={item.listing_id} {...item} />
      ))
      }
    </div>
  )
}