import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img
            src="https://www.golestan.com/wp-content/uploads/2023/01/logo-fr.png"
            alt=""
          />
        </div>
        <div className="menu">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">صفحه اصلی</a>
            </li>
            <li>
              <a href="#">شرکت گلستان</a>
            </li>
            <li>
              <a href="#">محصولات</a>
            </li>
            <li>
              <a href="#">وبلاگ</a>
            </li>
            <li>
              <a href="#">قرعه کشی</a>
            </li>
            <li>
              <a href="#">استخدام</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
