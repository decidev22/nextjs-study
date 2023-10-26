import Link from "next/link";

const ClientPage = () => {
  // data for clients would normally come from DB
  const clients = [
    { id: "andy", name: "Andy" },
    { id: "wakgood", name: "Wakgood" },
  ];

  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
