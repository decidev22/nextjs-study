import { useRouter } from "next/router";

const ClientProjects = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    //load data...

    // navigate away
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "andy", clientProjectId: "projecta" },
    });
  };

  return (
    <div>
      <h1>Project of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjects;
