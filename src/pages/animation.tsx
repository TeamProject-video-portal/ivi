import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Comments } from "@/components/Comments";
import { signIn } from "next-auth/react";
import axios from "axios";

export const Cartoons = ({ res }: any) => {
  const handleClick = async () => {
    // const payload = {
    //   username: "Анатолий Пушкин",
    //   password: "123",
    // };
    // const res = await signIn("credentials", {
    //   ...payload,
    //   redirect: false,
    // });
    const res = await axios
      .post("http://84.201.131.92:5000/api/profile-service/docs/users/login", {
        login: "Анатолий Пушкин",
        password: "123",
      })
      .then((response) => console.log(response));
    console.log("res", res);
  };
  return (
    <div>
      <button onClick={handleClick}>click me</button>
      {/* <Comments />{" "} */}
    </div>
  );
};

// export const getStaticProps = async () => {
//   const res = await axios({
//     method: "get",
//     url: "https://jsonplaceholder.org/posts/",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Frame-Options": "SAMEORIGIN",
//     },
//   }).then((r) => r.data);
//   return {
//     props: {
//       res,
//     },
//   };
// };

export default Cartoons;
