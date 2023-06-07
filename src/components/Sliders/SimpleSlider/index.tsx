import React, { Dispatch, FC, SetStateAction } from "react";
import styles from "../index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { settings } from "../settings";
import { ISimpleMovie } from "@/types/types";
import { Loader } from "@/components/Loader";

type Props = {
  title: string;
  films: ISimpleMovie[];
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
const SimpleSlider: FC<Props> = ({ title, films, isLoading, setIsLoading }) => {
  const newSettings = {
    ...settings,
    slidesToShow: 7,
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h4>{title}</h4>
        <div className="nbl-icon nbl-icon_arrowRight_6x16 nbl-blockHeader__nbl-icon"></div>
      </div>
      {!films ? (
        <Loader type={"loading_simple"} />
      ) : (
        <Slider {...newSettings} className={styles.container}>
          {films?.map((item, index) => (
            <Link
              href={`/film/${item.id}?lang=ru`}
              key={item.id}
              onClick={() => {
                setIsLoading(true);
              }}
            >
              <Poster film={item} />
            </Link>
          ))}
        </Slider>
      )}
      <></>
    </div>
  );
};

export default SimpleSlider;
