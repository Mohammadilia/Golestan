import "./Rice.css";

const Rice = () => {
  return (
    <>
      <div className="rice_image">
        <img
          src="https://www.golestan.com/wp-content/uploads/2023/01/image2-new-1.jpg"
          alt=""
        />
        <div className="image_content">
          <p>برنج گلستان</p>
          <p id="p">معرفی محصول</p>
        </div>
      </div>
      <div className="rice_line"></div>
      <div className="rice_content">
        <h2>رکن اول غذای ایرانی</h2>
        <p>
          مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و
          هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
          كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
          وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با
          هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از
          همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
        </p>
        <div className="links">
          <a href="#">محصولات برنج</a>
          <a href="#">آشپزخانه گلستان</a>
        </div>
      </div>
    </>
  );
};

export default Rice;
