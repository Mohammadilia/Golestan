import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="cards">
        <div className="cards_all">
          <div className="cards_products">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-4.png"
              alt=""
            />
            <p>سرمایه انسانی</p>
          </div>
          <div className="cards_products">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-3.png"
              alt=""
            />
            <p>مراکز فروش</p>
          </div>
          <div className="cards_products">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-2.png"
              alt=""
            />
            <p>محصولات گلستان</p>
          </div>
          <div className="cards_products">
            <img
              src="https://www.golestan.com/wp-content/uploads/2023/01/statistics-icon-1.png"
              alt=""
            />
            <p>مشتریان گلستان</p>
          </div>
        </div>
      </div>
      <div className="cards_line"></div>
    </>
  );
};

export default Cards;
