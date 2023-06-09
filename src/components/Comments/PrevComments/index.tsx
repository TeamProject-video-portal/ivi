import {
  cloneElement,
  Dispatch,
  FC,
  FunctionComponentElement,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./index.module.scss";
import { Comment } from "./Comment";
import { NewComments } from "../NewComments";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { sendComment } from "@/Redux/comments/actions";
import { useRouter } from "next/router";

type commentsT = {
  id: string;
  name: string;
  comment: string;
  date: string;
  children: commentsT[];
};
type dataCommentsT = commentsT[];

type Props = {
  dataComments: dataCommentsT;
  setData: Dispatch<SetStateAction<dataCommentsT>>;
};

export const PrevComments: FC<Props> = ({ dataComments, setData }) => {
  const [newComment, setNewComment] = useState("");
  const [idComment, setIdComment] = useState<string>();
  let now = dayjs().format("DD MMMM YYYY");
  const put = useDispatch();
  const router = useRouter();
  const [currentId, setCurrentId] = useState<string>();
  //поиск выбранного комментария
  const filterItems = (data: commentsT[], idComment: string) => {
    return data?.reduce((acc: commentsT[], item: commentsT) => {
      if (item.id === idComment) {
        setCurrentId(`${item?.id}.${item?.children?.length + 1}`);
        item.children.push({
          id: `${item?.id}.${item?.children?.length + 1}`,
          name: "user",
          comment: newComment,
          date: now,
          children: [],
        });
      } else {
        filterItems(item.children, idComment);
      }
      acc.push(item);
      return acc;
    }, []);
  };

  //оправить дочерний комментарий

  useEffect(() => {
    // put(
    //   sendComment({
    //     idFilm: +router.query.id!,
    //     idComment: currentId!,
    //     comment: newComment,
    //   })
    // );
  }, [currentId]);

  useEffect(() => {
    setData(filterItems(dataComments, `${idComment}`));
  }, [newComment]);

  const renderChildren = (data: commentsT[]) => {
    return data?.map((item, index) => {
      return (
        <div key={`${item.id}`}>
          <Comment
            comment={item}
            idComment={item.id}
            setIdComment={setIdComment}
          />
          {idComment === item.id && (
            <div className={styles.children}>
              <NewComments
                newComment={newComment}
                setNewComment={setNewComment}
              />
            </div>
          )}
          {item.children && (
            <div className={styles.children}>
              {renderChildren(item.children)}
            </div>
          )}
        </div>
      );
    });
  };

  return <div>{renderChildren(dataComments)}</div>;
};
