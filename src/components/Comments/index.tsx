import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-export-i18n";
import { FC, ReactNode, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NewComments } from "./NewComments";
import { PrevComments } from "./PrevComments";

type commentsT = {
  id: string;
  name: string;
  comment: string;
  date: string;
  children: commentsT[];
};
type dataCommentsT = commentsT[];
const dataComments: dataCommentsT = [
  {
    id: "0",
    name: "Анастасия",
    comment:
      "Не имею привычки пересматривать фильмы,но этот смотрела раз 6. Самый любимый!",
    date: "1 февраля 2019",
    children: [
      {
        id: "1.1",
        name: "user",
        comment: "Good film!",
        date: "13 февраля 2019",
        children: [
          {
            id: "1.1.1",
            name: "user",
            comment: "любимый фильм!",
            date: "28 февраля 2022",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Paladin",
    comment:
      'Фильм "настоящий" и очень душевный, из цикла тех фильмов, которые интересно смотреть даже повторно',
    date: "1 февраля 2019",
    children: [],
  },
];

export const Comments: FC = () => {
  const [newComment, setNewComment] = useState("");
  const [idComment, setIdComment] = useState<dataCommentsT[]>();
  const [isClickCommentButton, setIsClickCommentButton] = useState(false);
  let now = dayjs().format("DD MMMM YYYY");
  const [data, setData] = useState(dataComments);
  const { t } = useTranslation();

  useEffect(() => {
    if (newComment.trim() !== "") {
      setData([
        ...data,
        {
          id: `${data.length + 1}`,
          name: "user",
          comment: newComment,
          date: now,
          children: [],
        },
      ]);
    }
  }, [newComment]);

  return (
    <div className={styles.container}>
      <h2>{t("sliders_title.reviews")}</h2>
      <div></div>
      <PrevComments dataComments={data} setData={setData} />

      <NewComments newComment={newComment} setNewComment={setNewComment} />
    </div>
  );
};
