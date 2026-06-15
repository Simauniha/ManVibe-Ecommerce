import "./Shop.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
  },
  {
    id: 3,
    name: "Sneakers",
    price: "₹2499",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 4,
    name: "Backpack",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
    {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
  },
  {
    id: 3,
    name: "Sneakers",
    price: "₹2499",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 4,
    name: "Backpack",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
    {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
  },
  {
    id: 3,
    name: "Sneakers",
    price: "₹2499",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 4,
    name: "Backpack",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
    {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
  },
  {
    id: 3,
    name: "Sneakers",
    price: "₹2499",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 4,
    name: "Backpack",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  },
    {
    id: 1,
    name: "Wireless Headphones",
    price: "₹1999",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹2999",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f"
  },
  {
    id: 3,
    name: "Sneakers",
    price: "₹2499",
    img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
  },
  {
    id: 4,
    name: "Backpack",
    price: "₹1499",
    img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
  }
];

const Shop = () => {
  return (
    <>
<div className="shop-wrapper container py-5 mt-5">

        {/* TITLE */}
        <h2 className="shop-title text-center mb-5">Shop Collection</h2>

        {/* GRID */}
        <div className="row g-5">
          {products.map((item) => (
            <div className="col-md-3 col-sm-6" key={item.id}>
              <div className="product-card">

                <img src={item.img} alt={item.name} />

                <div className="product-info">
                  <h5>{item.name}</h5>
                  <p>{item.price}</p>

                  <button className="add-btn">Add to Cart</button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Shop;