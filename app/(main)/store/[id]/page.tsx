export default async function SingleStorePage({ params }) {
  const { id } = await params;
  return (
    <>
      <div>
        <h2>Store {id}</h2>
      </div>
    </>
  );
}
