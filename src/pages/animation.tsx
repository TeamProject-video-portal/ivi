import { store } from "@/Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { getMovieWorker } from "@/Redux/movie/workers";
import { getDataHomePageSuccess } from "@/Redux/homePage/actions";
import { useEffect } from "react";
import { selectMovie } from "@/Redux/movie/selectors";
import { getDataMovieSuccess } from "@/Redux/movie/actions";

export const Cartoons = ({ res }: any) => {
  // const { data: session, status } = useSession();
  // console.log(session);
  // const router = useRouter();
  const movie = useSelector(selectMovie);
  const put = useDispatch();
  const handleClick = async () => {
    // const res = await getMovieWorker(435, "ru");
    // console.log(res);
    // put(getDataMovieSuccess(res));
    // console.log(store.getState());
  };
  useEffect(() => {
    console.log(movie);
  }, [movie]);
  return (
    <div>
      <button onClick={handleClick}>123</button>
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
