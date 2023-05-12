import { Dispatch, FC, ReactNode, SetStateAction, useState } from "react";
import styles from "./index.module.scss";

type Props = {
  newComment: string;
  setNewComment: Dispatch<SetStateAction<string>>;
};
export const NewComments: FC<Props> = ({ newComment, setNewComment }) => {
  const [comment, setComment] = useState("");
  const [isWarning, setIsWarning] = useState(false);

  const addComment = () => {
    if (comment.length === 0) {
      setIsWarning(true);
    } else {
      setIsWarning(false);
      setNewComment(comment);
      setComment("");
    }
  };

  return (
    <div className={styles.container}>
      {/* <input
        type="text"
        name=""
        id=""
        value={name}
        placeholder="Введите имя"
        onChange={(event) => {
          setName(event.target.value);
        }}
      /> */}
      <textarea
        placeholder="Введите комментарий"
        value={comment}
        onChange={(event) => {
          setComment(event.target.value);
        }}
      ></textarea>
      {isWarning && (
        <span className={styles.warning}>Напишите комментарий</span>
      )}
      <button onClick={addComment}>Добавить</button>
    </div>
  );
};
