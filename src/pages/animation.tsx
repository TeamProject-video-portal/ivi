import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Comments } from "@/components/Comments";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { getToken } from "next-auth/jwt";
import { Login, Registration } from "@/profileRequests/AuthService";
import { getDataUser, getDataUserSuccess } from "@/Redux/auth/actions";
import { store } from "@/Redux/store";
import { selectAuthUser } from "@/Redux/auth/selectors";
import { getDataUserRegistrationSuccess } from "@/Redux/registration/actions";

export const Cartoons = ({ res }: any) => {
  const session = useSession();
  const put = useDispatch();
  const handleClick = async () => {
    const payload = {
      email: "exaple@gmail.com",
      password: "123",
    };
    const res = await signIn("credentials", {
      ...payload,
      redirect: false,
    });
    console.log(res);
    console.log(session);
    // try {
    //   console.log("try");
    //   const res = await Registration("Maggie", "example@gmail.com", "123");
    //   localStorage.setItem("token", res.data.tokens.accessToken);
    //   put(getDataUserRegistrationSuccess(res.data));
    // } catch (e) {
    //   console.log(e);
    // }
    // console.log(session);
    // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    // put(getDataUserSuccess({ email: "exaple@gmail.com", password: "123" }));
  };
  const dataUser = useSelector(selectAuthUser);
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      {/* <button onClick={() => console.log(store.getState())}>state</button> */}
      {/* <Comments />{" "} */}
    </div>
  );
};

export default Cartoons;
