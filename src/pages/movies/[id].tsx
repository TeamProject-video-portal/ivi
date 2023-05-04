import { FC } from 'react';
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";

type FiltersResultProps = {
  props: any;
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { id } = context.params;
//   console.log('id ', id);
// const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
// const data = await response.json();

// if (!data) {
//   return {
//     notFound: true,
//   }
// }

// return {
//   props: { data },
// }
// };

const FiltersResult: FC<FiltersResultProps> = (props) => {
  const router = useRouter();
  console.log('router', router);

  return (
    <div>
    </div>
  );
};

export default FiltersResult;
