import { FC } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { ContextSubMenu } from "@/components/ContextSubMenu";
import { DropDownMenuFilm } from "@/components/ContextSubMenu/DropDownMenuFilm";
import { DropDownMenuSerial } from "@/components/ContextSubMenu/DropDownMenuSerial";
import { DropDownMenuAnim } from "@/components/ContextSubMenu/DropDownMenuAnim";

type Props = {
  subMenuTitle: string;
};

const SubMenu: FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bg_div}>
        <ContextSubMenu className={styles.content}>
          {props.subMenuTitle === 'film' && <DropDownMenuFilm />}
          {props.subMenuTitle === 'series' && <DropDownMenuSerial />}
          {props.subMenuTitle === 'anim' && <DropDownMenuAnim />}
        </ContextSubMenu>
      </div>
    </div>
  );
};

export default SubMenu;
