import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { AuthProfile } from "./AuthProfile";
import { NotAuthProfile } from "./NotAuthProfile";
import Link from "next/link";

type Props = {
  isOpenSubMenu?: boolean;
  setIsOpenSubMenu?: Dispatch<SetStateAction<boolean>>;
  setSubMenuTitle?: Dispatch<SetStateAction<string>>;
};

const ProfileButton: FC<Props> = (props) => {
  const { data: session } = useSession();
  const router = useRouter();

  const [locale, setLocale] = useState<any>("ru");
  useEffect(() => {
    if (router.query?.lang) {
      setLocale(router.query?.lang);
    } else {
      setLocale("ru");
    }
  }, [router]);

  const handleClick = () => {
    router.push({ pathname: "/profile", query: { lang: locale } });
  };

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      onMouseEnter={() => {
        props.setIsOpenSubMenu?.(true);
        props.setSubMenuTitle?.("profile");
      }}
      // onMouseLeave={() => {
      //   props.setIsOpenSubMenu?.(false);
      // }}
    >
      {session?.user ? <AuthProfile /> : <NotAuthProfile />}
    </div>
  );
};

export default ProfileButton;
