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
type commentsT = {
  id: number;
  name: string;
  comment: string;
  date: string;
  children?: any;
};
type dataCommentsT = commentsT[];

type Props = {
  dataComments: dataCommentsT;
  setData: Dispatch<SetStateAction<dataCommentsT>>;
};
export const PrevComments: FC<Props> = ({ dataComments, setData }) => {
  const [newComment, setNewComment] = useState("");
  const [idComment, setIdComment] = useState<number>();
  const [id, setId] = useState<number>();
  const [clonedElem, setClonedElem] = useState<any>(); // Хранение клонированного элемента
  let now = dayjs().format("DD MMMM YYYY");

  const containerRef = useRef<any>(null);

  useEffect(() => {}, [idComment]);

  const filterItems = (data: commentsT[], idComment: any) => {
    data?.filter((item) => {
      return item.id === idComment
        ? item
        : filterItems(item?.children, idComment);
    });
  };

  console.log(filterItems(dataComments, 0));
  useEffect(() => {}, [newComment]);

  const renderChildren = (data: commentsT[]) => {
    return data.map((item, index) => {
      return (
        <div key={`${item.id}`}>
          <Comment
            comment={item}
            idComment={item.id}
            setIdComment={setIdComment}
          />
          {idComment === item.id && (
            <NewComments
              newComment={newComment}
              setNewComment={setNewComment}
            />
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
