import { Link } from "react-router-dom";
import "./articles.scss";

const Articles = () => {
  return (
    <section className="blog">
      <div className="blog__container">
        <div className="blog__title title border-line-h pos-relative">
          <span>Blog</span>
        </div>

        <div className="blog__content pos-relative">
          <div className="blog__items-container pos-relative">
            <div className="blog__items">
              <div className="blog__item border-line-h pos-relative">
                <Link className="blog__image-link">
                  <div className="blog__image">
                    <img src="/images/news1.jpg" />
                  </div>
                </Link>
                <div className="blog__desc">
                  <div className="blog__date date-green">January 28, 2024</div>
                  <div className="blog__title">
                    <span>Brand Identity with Code</span>
                  </div>
                  <p className="blog__text">
                    Creating a digital representation of a brand’s values,
                    personality, and message through web design, user
                    experience, and visual elements
                  </p>
                </div>
              </div>
              <div className="blog__item border-line-h pos-relative">
                <Link className="blog__image-link">
                  <div className="blog__image">
                    <img src="/images/work1-2.jpg" />
                  </div>
                </Link>
                <div className="blog__desc">
                  <div className="blog__date date-green">January 28, 2024</div>
                  <div className="blog__title">
                    <span>Brand Identity with Code</span>
                  </div>
                  <p className="blog__text">
                    Creating a digital representation of a brand’s values,
                    personality, and message through web design, user
                    experience, and visual elements
                  </p>
                </div>
              </div>
              <div className="blog__item border-line-h pos-relative">
                <Link className="blog__image-link">
                  <div className="blog__image">
                    <img src="/images/blog3.jpg" />
                  </div>
                </Link>
                <div className="blog__desc">
                  <div className="blog__date date-green">January 28, 2024</div>
                  <div className="blog__title">
                    <span>Brand Identity with Code</span>
                  </div>
                  <p className="blog__text">
                    Creating a digital representation of a brand’s values,
                    personality, and message through web design, user
                    experience, and visual elements
                  </p>
                </div>
              </div>
              <div className="blog__item border-line-h pos-relative">
                <Link className="blog__image-link">
                  <div className="blog__image">
                    <img src="/images/news1.jpg" />
                  </div>
                </Link>
                <div className="blog__desc">
                  <div className="blog__date date-green">January 28, 2024</div>
                  <div className="blog__title">
                    <span>Brand Identity with Code</span>
                  </div>
                  <p className="blog__text">
                    Creating a digital representation of a brand’s values,
                    personality, and message through web design, user
                    experience, and visual elements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
