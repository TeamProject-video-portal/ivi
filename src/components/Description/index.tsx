import { FC, useState, ReactNode } from "react";
import styles from "./index.module.scss"
import { Button } from "../Button/Button";

type DescriptionProps = {
  truncText: ReactNode | ReactNode[];
  fullText?: ReactNode | ReactNode[] | null;
  classname?: string;
}

const Description: FC<DescriptionProps> = ({ truncText, fullText, classname }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={[styles.description, classname].join(" ")}>
      {isOpen ? fullText : truncText}
      <Button className={styles.button} onClick={() => setIsOpen(!isOpen)}>{isOpen ? 'Свернуть' : 'Развернуть'}</Button>
    </div>
  );
};

export default Description;