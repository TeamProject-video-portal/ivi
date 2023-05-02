import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import styles from "./index.module.scss";
import { TrailerCard } from "@/components/TrailerCard";
import { DescriptionCard } from "@/components/DescriptionCard";
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
};
const Card = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs breadcrumbs={breadcrumbs} type="pages" del="/" />
      <div className={styles.wrapper}>
        <TrailerCard />
        <DescriptionCard data={data} />
      </div>
    </div>
  );
};

export default Card;
