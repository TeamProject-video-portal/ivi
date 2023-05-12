import dayjs from "dayjs";
import { FC, ReactNode, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NewComments } from "./NewComments";
import { PrevComments } from "./PrevComments";

type commentsT = { name: string; comment: string; date: string };
type dataCommentsT = commentsT[];
const dataComments: dataCommentsT = [
  {
    name: "Анастасия",
    comment:
      "Не имею привычки пересматривать фильмы,но этот смотрела раз 6. Самый любимый!",
    date: "1 февраля 2019",
  },
  {
    name: "Paladin",
    comment:
      'Фильм "настоящий" и очень душевный, из цикла тех фильмов, которые интересно смотреть даже повторно',
    date: "1 февраля 2019",
  },
];

export const Comments: FC = ({}) => {
  const [newComment, setNewComment] = useState("");
  let now = dayjs().format("DD MMMM YYYY");

  useEffect(() => {
    dataComments.push({
      name: "user",
      comment: newComment,
      date: now,
    });
  }, [newComment]);
  return (
    <div className={styles.container}>
      <h2>Отзывы</h2>
      <PrevComments dataComments={dataComments} />
      <NewComments newComment={newComment} setNewComment={setNewComment} />
    </div>
  );
};
