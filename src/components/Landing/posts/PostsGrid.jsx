import React from "react";
import "./PostGrid.css";

function PostGrid() {
  return (
    <div class="container">
      <figure>
        <img src="./images/evenskayaVishivka.jpg" alt="A windmill" />
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
        <img src="./images/evenskayaVishivka2.jpg" />
        <figcaption>
          <a href="#">Эвенская вышивка</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/costumes.jpg" />
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
        <img src="./images/vishivka.jpg" />
      </figure>
      <figure>
        <figcaption>
          <a href="#">История и культура ненецкого народа</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/vishivka2.jpg" />
        <figcaption></figcaption>
      </figure>
      <figure>
        <img src="./images/vishivka3.jpg" />
        <figcaption>
          <a href="#">Вышивка манси</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/jewerly.jpg" />
        <figcaption>
          <a href="#">Чукотские украшения</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/ornament.jpg" />
        <figcaption>
          <a href="#">Удмуртский народный орнамент</a>
        </figcaption>
      </figure>
      <figure>
        <img src="./images/triangle.jpg" />
      </figure>
      <figure>
        <img src="./images/music.jpg" />
        <figcaption>
          <a href="#">OTYKEN – STORM</a>
        </figcaption>
      </figure>
    </div>
  );
}

export default PostGrid;
