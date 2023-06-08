import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Comments } from "@/components/Comments";
import { signIn } from "next-auth/react";
import axios from "axios";

export const Cartoons = ({ res }: any) => {
  const handleClick = async () => {
    const res = await axios.get(
      "http://84.201.131.92:5002/persons/305?lang=ru"
    );
    console.log(res);

    // const payload = {
    //   username: "Maggie",
    //   password: "123",
    // };
    // const res = await signIn("credentials", {
    //   ...payload,
    //   redirect: false,
    // });
    // console.log(res);

    // const https = require("https");
    // const agent = new https.Agent({
    //   rejectUnauthorized: false,
    // });
    // const res = await axios
    //   .post(
    //     "http://84.201.131.92:5002/persons/${id}?lang=${lang}",
    //     {
    //       email: "Maggie",
    //       password: "123",
    //     },
    //     { httpsAgent: agent }
    //   )
    //   .then((response) => console.log(response));
    // console.log("res", res);
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
