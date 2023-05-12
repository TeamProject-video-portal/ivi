import { FC, ReactNode, useState } from "react";
import styles from "./index.module.scss";
import { Button } from "../../Button/Button";
import { Vote } from "./Vote";
type commentsT = { name: string; comment: string; date: string };
type dataCommentsT = commentsT[];

type Props = {
  dataComments: dataCommentsT;
};
export const PrevComments: FC<Props> = ({ dataComments }) => {
  return (
    <div>
      {dataComments.map((item, index) => {
        return (
          <div className={styles.comment} key={`${item.name.length}-${index}`}>
            <h5 className={styles.name}>{item.name}</h5>
            <p className={styles.comment_text}>{item.comment}</p>
            <p className={styles.date}>{item.date}</p>
            <div className={styles.buttons}>
              <Button width={"150px"} className={styles.comment_button}>
                Комментировать
              </Button>
              <Vote />
            </div>
          </div>
        );
      })}
    </div>
  );
};
