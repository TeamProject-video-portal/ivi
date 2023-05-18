import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { FC, ReactNode, useEffect, useState } from "react";
import styles from "./index.module.scss";
import { NewComments } from "./NewComments";
import { PrevComments } from "./PrevComments";

type commentsT = {
  id: number;
  name: string;
  comment: string;
  date: string;
  children?: any;
};
type dataCommentsT = commentsT[];
const dataComments: dataCommentsT = [
  {
    id: 0,
    name: "Анастасия",
    comment:
      "Не имею привычки пересматривать фильмы,но этот смотрела раз 6. Самый любимый!",
    date: "1 февраля 2019",
    children: [
      {
        id: 2,
        name: "user",
        comment: "Good film!",
        date: "13 февраля 2019",
        children: [
          {
            id: 3.12,
            name: "user",
            comment: "любимый фильм!",
            date: "28 февраля 2022",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "Paladin",
    comment:
      'Фильм "настоящий" и очень душевный, из цикла тех фильмов, которые интересно смотреть даже повторно',
    date: "1 февраля 2019",
  },
];

export const Comments: FC = () => {
  const [newComment, setNewComment] = useState("");
  const [idComment, setIdComment] = useState<number>();
  const [isClickCommentButton, setIsClickCommentButton] = useState(false);
  let now = dayjs().format("DD MMMM YYYY");
  const [data, setData] = useState(dataComments);

  useEffect(() => {
    if (newComment.trim() !== "") {
      setData([
        ...data,
        { id: data.length + 1, name: "user", comment: newComment, date: now },
      ]);
    }
  }, [newComment]);

  return (
    <div className={styles.container}>
      <h2>Отзывы</h2>
      <div></div>
      <PrevComments dataComments={data} setData={setData} />

      <NewComments newComment={newComment} setNewComment={setNewComment} />
    </div>
  );
};
