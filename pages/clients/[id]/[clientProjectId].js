import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Specific Selected Client Project Page</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
