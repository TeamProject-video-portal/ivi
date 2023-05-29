import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { AuthProfile } from "./AuthProfile";
import { NotAuthProfile } from "./NotAuthProfile";
import Link from "next/link";

const ProfileButton: FC = () => {
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

  return (
    <Link href={`/profile?lang=${locale}`}>
      {session ? <AuthProfile /> : <NotAuthProfile />}
    </Link>
  );
};

export default ProfileButton;
