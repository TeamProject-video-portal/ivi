import { FC, useState, ReactNode } from "react";
import styles from "./index.module.scss"
import { Button } from "../Button/Button";

type DescriptionProps = {
  truncText: ReactNode | ReactNode[];
  fullText?: ReactNode | ReactNode[] | null;
  className?: string;
}

const Description: FC<DescriptionProps> = ({ truncText, fullText, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={[styles.description, className].join(" ")}>
      {isOpen ? fullText : truncText}
      <Button className={styles.button} onClick={() => setIsOpen(state => !state)}>{isOpen ? 'Свернуть' : 'Развернуть'}</Button>
    </div>
  );
};

export default Description;