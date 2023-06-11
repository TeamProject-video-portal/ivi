import { useSession } from "next-auth/react";

const SeriesPage = () => {
  const { data: session } = useSession();
  return <h1>Series</h1>;
};

export default SeriesPage;
