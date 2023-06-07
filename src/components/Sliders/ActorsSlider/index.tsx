import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.scss";
import Slider from "react-slick";
import Poster from "@/components/Poster";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { settings } from "./settings";
import { ActorsType } from "@/types/types";
import { Actor } from "@/components/DescriptionCard/Actors";
import { Raiting } from "@/components/DescriptionCard/Raiting";
import { useRouter } from "next/router";

type Props = {
  actors: ActorsType[];
  filmGrade: number;
  className: string;
};

const ActorsSlider: FC<Props> = ({ actors, filmGrade, className }) => {
  const router = useRouter();
  const [locale, setLocale] = useState<string | string[]>("ru");

  const newSettings = {
    ...settings,
  };

  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  return (
    <div className={[styles.container, className].join(" ")}>
      <Slider {...newSettings} className={styles.slider}>
        <Raiting filmGrade={filmGrade} />
        {actors.map((item: any) => (
          <Link href={`/person/${item.id}?lang=${locale}`} key={`${item.id}`}>
            <Actor img={item.photo} name={item.name} key={`${item.id}`} />
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ActorsSlider;
