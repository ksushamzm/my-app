import React from "react";
import "./PostGrid.css";
import { Link } from "react-router-dom";

function PostGrid() {
  return (
    <div class="container">
      <figure>
        <img src="./images/evenskayaVishivka.jpg" className="imgPost" />
        <figcaption>
          <a href="#">Эвенская вышивка</a>
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          <a href="#">
            Как живут коренные якуты: духи огня, праздник лета и никакого
            вегетарианства
          </a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/evenskayaVishivka2.jpg" className="imgPost" />
        <figcaption>
          <a href="#">Эвенская вышивка</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/costumes.jpg" className="imgPost" />
        <figcaption>
          <a href="#">
            Костюмы с конкурса высокой моды национального костюма «Этно-Эрато»
            от Л. Б. Хатхил
          </a>
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          <a href="#">Исчезающие народы России: Кереки</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/vishivka.jpg" className="imgPost" />
      </figure>
      <figure>
        <figcaption>
          <a href="#">История и культура ненецкого народа</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/vishivka2.jpg" className="imgPost" />
      </figure>
      <Link to="/Article">
        <figure>
          <img src="./images/MainArticlePhoto.jpg" className="imgPost" />
          <figcaption>
            <a href="#">Материальная культура телеутов</a>
          </figcaption>
        </figure>
      </Link>
      <figure>
        <img src="./images/jewerly.jpg" className="imgPost" />
        <figcaption>
          <a href="#">Чукотские украшения</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/ornament.jpg" className="imgPost" />
        <figcaption>
          <a href="#">Удмуртский народный орнамент</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/triangle.jpg" className="imgPost" />
      </figure>
      <figure>
        <img src="./images/music.jpg" className="imgPost" />
        <figcaption>
          <a href="#">OTYKEN – STORM</a>
        </figcaption>
      </figure>
    </div>
  );
}

export default PostGrid;
