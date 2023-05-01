import Head from "next/head";
import styles from "./index.module.scss";
import Breadcrumbs, { Breadcrumb } from "@/components/Breadcrumbs";
import Description from "@/components/Description";
import Suggestion from "@/components/Suggestion";
import Catalog from "@/components/Catalog";
import Carousel from "@/components/Catalog/Carousel";
import Poster from "@/components/Poster";
import Filters from "@/components/Filters";
import Sort from "@/components/Sort";
import GenresButton from "@/components/Filters/GenresButton";

const breadcrumbs: Breadcrumb[] = [
  { item: "Мой Иви", path: "/" },
  { item: "Фильмы", path: "/movies" },
];

const truncText = (
  <p>
    Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая сайты
    в поисках чего-нибудь интересного? Стоит задержаться на ivi.ru – фильмов,
    которые собраны у нас, вам хватит надолго. Коллекция постоянно пополняется
    как...
  </p>
);
const fullText = (
  <>
    <p>
      Вы любите смотреть фильмы онлайн и проводите много времени, прочесывая
      сайты в поисках чего-нибудь интересного? Стоит задержаться на ivi.ru –
      фильмов, которые собраны у нас, вам хватит надолго. Коллекция постоянно
      пополняется как новыми фильмами, так и признанными шедеврами прошлых лет!
      Независимо от того, кто вы – любитель энергичных боевиков или поклонница
      молодежных сериалов, изобилие нашего каталога заставит вас забыть обо всех
      других способах проведения досуга, и вы будете пересматривать любимые
      фильмы онлайн снова и снова!
    </p>
    <p>
      Выбор фильмов очень широк и многообразен, так что каждый найдет для себя
      что-то интересное, каким бы ни были его вкусы. Предпочитаете картины
      исключительно зарубежного производства? У нас их предостаточно: это и
      золотая классика Голливуда, и душевные французские комедии, и
      темпераментные итальянские драмы, и шумные индийские музыкальные фильмы. А
      может, вы патриот и любите российские фильмы? Что ж, и таких фильмов у нас
      немало. Что вам больше по вкусу – добрая старая классика или новинки
      кинопроката? Неважно, каким будет ваш ответ – у нас есть все, как картины
      эпохи зарождения кинематографа, так 2018 года и фильмы 2017.
    </p>
    <p>
      В нашем каталоге вы найдете любые жанры. Это и фильмы про любовь, и
      детективы, и боевики, и вестерны, и фантастика, и арт-хаус, и уморительные
      комедии, и фильмы про войну, и ужасы, и триллеры, и документалистика...
      Кроме «полного метра» на сайте представлены также короткометражные фильмы,
      а также иностранные и русские сериалы.
    </p>
    <p>
      Если вас интересуют самые знаковые фильмы онлайн в том или ином жанре,
      система рубрикации поможет вам без труда сориентироваться и найти,
      например, лучшие драмы или лучший анимационный фильм онлайн. Не упустите
      замечательную возможность смотреть фильмы онлайн без регистрации, выбирая
      только то, что вам действительно интересно, и тогда, когда вам это удобно.
      Ведь это так просто и приятно!
    </p>
  </>
);

const Movies = () => {
  return (
    <>
      <Head>
        <title>Поиск фильмов</title>
      </Head>
      <div className={styles.container}>
        <section className={styles.headerbar}>
          <Breadcrumbs breadcrumbs={breadcrumbs} type='pages' del="&middot;" />
          <h1 className={styles.title}>Фильмы смотреть онлайн</h1>
          <Description truncText={truncText} fullText={fullText} className={styles.description} />
          <div className={styles.suggestionRow}><Suggestion /></div>
        </section>
        <div className={styles.sortRow}><Sort /></div>
        <section className={styles.filtersRow}><Filters /></section>
      </div>
      <div className={styles.genresRow}>
        <h2 className={styles.genresRow__title}>Жанры</h2>
        <Carousel elem={<GenresButton size="big" genres="Исторические" id={11} />} count={10} />
      </div>
      <Catalog title={"Лучшие фильмы"} elem={<Poster />} count={10} />
    </>
  );
};

export default Movies;
