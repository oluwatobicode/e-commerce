import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <AddToCart />
      <Body />
    </div>
  );
}

const nav = ["Collection", "Men", "  Women", "  About", "  Contact"];

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/images/logo.svg" alt="Sneakers Logo" />
      </div>
      <ul className="nav-list">
        {nav.map((list) => (
          <NavList list={list} key={list} />
        ))}
      </ul>
      <div className="add-to-cart">
        <img src="/images/icon-cart.svg" alt="cart" />
      </div>

      <div className="user-image">
        <img
          src="/images/image-avatar.png"
          alt="user-image"
          className="user-image-pic"
        />
      </div>
    </div>
  );
}

function NavList({ list }) {
  return (
    <div className="list-items">
      <li className="nav-links">
        <a href="#" className="links">
          {list}
        </a>
      </li>
    </div>
  );
}

function AddToCart() {
  return (
    <div className="checkout">
      <h6>Cart</h6>
      <div className="cart-details">
        <img
          src="/images/image-product-1-thumbnail.jpg"
          alt="image-checkout"
          className="checkout-image"
        />
        <div className="checkout-items">
          <p> Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {"X"} = <span>{"$375.50"}</span>
          </p>
        </div>
        <img src="images/icon-delete.svg" className="delete" />
      </div>
      <button className="payment">Checkout</button>
    </div>
  );
}

function Body() {
  return (
    // Images

    <div>
      <div className="sneakers-body">
        <div className="image-gallery">
          <div className="main">
            <img
              src={`/images/image-product-${1}.jpg`}
              className="main-image"
            />
          </div>
          {/* MOVING BUTTONS */}
        </div>

        {/* {body-text} */}

        <div className="details">
          <p>SNEAKER COMPANY</p>
          <h1> Fall Limited Sneakers</h1>
          <p>
            {" "}
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p>
            {" "}
            $125.00 <span>50%</span>
          </p>
          <p> $250.00</p>

          <div>
            <div>
              <button>
                <img src="/images/icon-minus.svg" alt="" />
              </button>
              <p>0</p>
              <button>
                <img src="/images/icon-plus.svg" alt="" />
              </button>
            </div>

            <button>
              <img src="/images/icon-cart.svg" alt="cart" />
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div>
        <button>
          {" "}
          <img src={`/images/image-product-${1}-thumbnail.jpg`} />
        </button>
        <button>
          {" "}
          <img src={`/images/image-product-${2}-thumbnail.jpg`} />
        </button>
        <button>
          {" "}
          <img src={`/images/image-product-${3}-thumbnail.jpg`} />
        </button>
        <button>
          {" "}
          <img src={`/images/image-product-${4}-thumbnail.jpg`} />
        </button>
      </div>
    </div>
  );
}
