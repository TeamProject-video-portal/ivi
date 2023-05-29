import { FC } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { AuthProfile } from "./AuthProfile";
import { NotAuthProfile } from "./NotAuthProfile";

const ProfileButton: FC = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (session) return <AuthProfile />;
  else {
    return <NotAuthProfile />;
  }
};

export default ProfileButton;
