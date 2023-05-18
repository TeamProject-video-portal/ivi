import { Button } from "@/components/Button/Button";
import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import { Vote } from "./Vote";
import styles from "./index.module.scss";

type commentsT = {
  id: number | undefined;
  name: string;
  comment: string;
  date: string;
  children?: any;
};
type dataCommentsT = commentsT[];

type Props = {
  comment: commentsT;
  idComment?: number;
  setIdComment: Dispatch<SetStateAction<number | undefined>>;
};
export const Comment: FC<Props> = ({ comment, idComment, setIdComment }) => {
  const handleClick = () => {
    setIdComment(idComment);
  };

  return (
    <div>
      <div className={styles.comment}>
        <h5 className={styles.name}>{comment.name}</h5>
        <p className={styles.comment_text}>{comment.comment}</p>
        <p className={styles.date}>{comment.date}</p>
        <div className={styles.buttons}>
          <Button
            width={"150px"}
            className={styles.comment_button}
            onClick={() => {
              handleClick();
            }}
          >
            Комментировать
          </Button>
          <Vote />
        </div>
      </div>
    </div>
  );
};
