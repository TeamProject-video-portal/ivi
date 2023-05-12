import { Dispatch, FC, SetStateAction } from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import Ad from "./Ad";
import { ContextSubMenu } from "@/components/ContextSubMenu";
import { DropDownMenuFilm } from "@/components/ContextSubMenu/DropDownMenuFilm";
import { DropDownMenuSerial } from "@/components/ContextSubMenu/DropDownMenuSerial";
import { DropDownMenuAnim } from "@/components/ContextSubMenu/DropDownMenuAnim";
import { DropDownMenuButton } from "@/components/ContextSubMenu/DropDownMenuButton";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  subMenuTitle: string;
};

const SubMenu: FC<Props> = (props) => {
  return (
    <div
      className={styles.container}
      onMouseLeave={() => props.setIsOpenSubMenu?.(false)}
    >
      {props.isOpenSubMenu && (
        <div className={styles.wrapper}>
          <div className={styles.bg_div}></div>
          {props.subMenuTitle !== "button" ? (
            <div>
              <ContextSubMenu className={styles.content}>
                {props.subMenuTitle === "film" && <DropDownMenuFilm />}
                {props.subMenuTitle === "series" && <DropDownMenuSerial />}
                {props.subMenuTitle === "anim" && <DropDownMenuAnim />}
              </ContextSubMenu>
              <Ad type={"ad_small"} />
            </div>
          ) : (
            <DropDownMenuButton />
          )}
        </div>
      )}
    </div>
  );
};

export default SubMenu;
