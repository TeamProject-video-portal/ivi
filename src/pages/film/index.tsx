import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { DescriptionCard } from "@/components/DescriptionCard";
import SimpleSlider from "@/components/Sliders/SimpleSlider";
import SliderContinueBrowsing from "@/components/Sliders/SliderContinueBrowsing";
const breadcrumbs: Breadcrumb[] = [
  { item: "Фильмы", path: "/movies" },
  { item: "Комедии", path: "/movies" },
];
const data = {
  title: "Фильм Беспринципные в деревне смотреть онлайн",
  raiting: 7.3,
  actors: [
    [
      "https://thumbs.dfs.ivi.ru/storage28/contents/e/f/f5aa64a42ba26efa25cdd8f3b41d03.jpg/44x44/?q=85",
      "Павел Деревянко",
    ],
    [
      "https://thumbs.dfs.ivi.ru/storage4/contents/2/1/e28d6a06ec7ce012855b7c8d81dd4b.jpg/44x44/?q=85",
      "Николай Фоменко",
    ],
    [
      "https://thumbs.dfs.ivi.ru/storage2/contents/e/7/5e02e1b92d380142ecfd6b1ab3f11c.jpg/120x144/?q=85",
      "Оксана Акиньшина",
    ],
    [
      "https://thumbs.dfs.ivi.ru/storage28/contents/4/3/17ce55ecf5c53967f5f027d7c42c6a.jpg/44x44/?q=85",
      "Аглая Тарасова",
    ],
  ],
  description:
    "Культовая драма Дэвида Финчера с Брэдом Питтом, Эдвардом Нортоном и Хеленой Бонэм Картер. Экранизация одноименного романа Чака Паланика, которая значительно повысила популярность писателя в мире и стала одним из главных фильмов 90-х. Рассказ ведётся от лица человека без имени. Это типичный «белый воротничок», страдающий от бессонницы, сомнений на тему выбора посуды («Какой сервиз лучше выразит меня как личность?») и собственной никчемности. Однажды в самолёте он знакомится с харизматичным бунтарём Тайлером Дерденом, который живёт по совсем другим установкам: «Всё, что имеешь ты, в конце концов имеет тебя». Рассказчик попадает под влияние опасного, дерзкого и загадочного Тайлера. Вместе они организуют закрытый бойцовский клуб, о котором нельзя говорить. Смотреть легендарный «Бойцовский клуб» можно онлайн. Приглашаем посмотреть фильм «Бойцовский клуб» в нашем онлайн-кинотеатре в хорошем HD качестве. Приятного просмотра!",
};

import dataJSON from "../../data/One_film_response.json";
import { TrailerCard } from "./TrailerCard";
import Ad from "@/components/Header/DesktopMenu/SubMenu/Ad";

const Card = () => {
  console.log(dataJSON);
  return (
    <div className={styles.container}>
      <Ad type={"summary"} />
      <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />
      <div className={styles.wrapper}>
        <TrailerCard filmPicture={dataJSON.filmPicture} />
        <DescriptionCard
          data={data}
          filmGrade={dataJSON.filmGrade}
          filmAge={dataJSON.filmAge}
          filmDate={dataJSON.filmDate}
          filmLang={dataJSON.filmLang}
        />
      </div>
      <SimpleSlider title={"С фильмом смотрят"} />
      <SliderContinueBrowsing
        title={"Трейлеры и доп. материалы"}
        type={"summary"}
      />
    </div>
  );
};

export default Card;
