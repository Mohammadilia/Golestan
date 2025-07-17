import "./Ghoree.css";

const Ghoree = () => {
  return (
    <>
      <div className="ghoree">
        <div className="ghoree_content">
          <h1>قرعه‌کشی مصرف‌کنندگان گلستان</h1>
          <h2>قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان</h2>
          <p>
            هر یک از مصرف‌کنندگان محصولات چای گلستان می‌توانند با ارسال کد قرعه
            کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای سال 1403شرکت
            کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی است.
          </p>
          <div className="ghoree_link">
            <a href="">اطلاعات بیشتر</a>
          </div>
        </div>
        <div className="ghoree_image">
          <img
            src="https://www.golestan.com/wp-content/uploads/2023/07/tea-pic1.png"
            alt=""
          />
        </div>
      </div>
      <div className="line_hr"></div>
    </>
  );
};

export default Ghoree;
