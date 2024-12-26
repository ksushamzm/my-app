import React from "react";
import { PhotoCard } from "./PhotosCard";
import "./Photo.css";

const photoData = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/012d669f48382c01335b35bddafc23191ed4df3fb6d2de3515cbfa5e368bbf11?placeholderIfAbsent=true&apiKey=54aec5a2515343c9b58eb25178651499",
    title: "Вышивка",
    colors: [
      "rgba(233, 51, 33, 1)",
      "rgba(182, 177, 60, 1)",
      "rgba(33, 90, 113, 1)",
      "rgba(17, 17, 18, 1)",
    ],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/24730c621da393dbcc57246cc1ba665ed73067c660f22044235a42e7c6c5c712?placeholderIfAbsent=true&apiKey=54aec5a2515343c9b58eb25178651499",
    title: "Народные промыслы: Орнамент",
    colors: [
      "rgba(209, 57, 41, 1)",
      "rgba(239, 165, 44, 1)",
      "rgba(114, 144, 51, 1)",
      "rgba(97, 141, 171, 1)",
    ],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9993e2a6919e2403901f02080ebce92151b71c8e5ab0106c42679a3ee5117383?placeholderIfAbsent=true&apiKey=54aec5a2515343c9b58eb25178651499",
    title: "Природа. Народный быт",
    colors: [
      "rgba(254, 214, 59, 1)",
      "rgba(101, 121, 164, 1)",
      "rgba(103, 17, 51, 1)",
      "rgba(57, 30, 35, 1)",
    ],
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/d58527034c5d68ecbcf7772cfb4e4b34e7d45593b493bef32e117e34d4fe3a69?placeholderIfAbsent=true&apiKey=54aec5a2515343c9b58eb25178651499",
    title: "Культура: Музыка народов",
    colors: [
      "rgba(253, 224, 192, 1)",
      "rgba(212, 141, 24, 1)",
      "rgba(209, 34, 33, 1)",
      "rgba(172, 175, 173, 1)",
    ],
  },
];

function Photos() {
  return (
    <section className="photoSection">
      <div className="photoContent">
        <h2 className="photoHeading">5. Фотографии</h2>
        <p className="photosDescription">
          Фотография - неотъемлемая часть стиля. С помощью неё визуально
          отражаются особенности культур малочисленных народов. Фотографии
          выбираются по категориям, соответствующим темам публикаций:
        </p>
      </div>

      <p className="guidelines">
        Фотография используется для контраста с текстом и визуального отражения
        темы. Необходимо использовать качественные фото ярких цветов, с тёплым
        оттенком.
      </p>

      <div className="photoGrid">
        {photoData.map((photo, index) => (
          <PhotoCard
            key={`detailed-${index}`}
            imageSrc={photo.imageSrc}
            title={photo.title}
            colors={photo.colors}
          />
        ))}
      </div>
    </section>
  );
}

export default Photos;
