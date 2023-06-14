import { sendComment } from "@/Redux/comments/actions";
import { selectMovieUser } from "@/Redux/movie/selectors";
import axios from "axios";
import dayjs from "dayjs";
import { GetServerSideProps } from "next";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

export const Comments: FC = () => {
  const [newComment, setNewComment] = useState<string>("");
  let now = dayjs().format("DD MMMM YYYY");
  const movie = useSelector(selectMovieUser);
  const [data, setData] = useState<dataCommentsT>([]);
  const { t } = useTranslation();
  const [id, setId] = useState<number>();
  const router = useRouter();
  const [emailUser, setEmailUser] = useState<string | null>();
  const put = useDispatch();

  useEffect(() => {
    setEmailUser(localStorage.getItem("email"));
    console.log(movie);
  }, []);

  // useEffect(() => {}, [data]);

  useEffect(() => {
    if (newComment && newComment.trim() !== "") {
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
      setId(data.length + 1);
    }
  }, [newComment]);

  //оправка комментария
  useEffect(() => {
    if (id) {
      // put(
      //   sendComment({
      //     idFilm: +router.query.id!,
      //     idComment: `${id}`,
      //     comment: newComment,
      //   })
      // );
    }
  }, [id]);

  return (
    <div className={styles.container}>
      {emailUser !== "" ? (
        <div>
          <h2>{t("sliders_title.reviews")}</h2>
          <div></div>
          <PrevComments dataComments={data} setData={setData} />

          <NewComments newComment={newComment} setNewComment={setNewComment} />
        </div>
      ) : (
        <div className={styles.not_auth}>
          <h2>{t("movie.visible_comment")}</h2>
        </div>
      )}
    </div>
  );
};
