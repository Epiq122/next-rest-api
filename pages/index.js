export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-center font-bold mt-20">Trips API</h1>
      <h2 className="text-2xl text-center mt-10">The documentation</h2>

      <div className="grid grid-cols-2 max-w-2xl gap-4 mt-10 mx-auto">
        <div className="border border-gray-500 p-4">
          <h2>
            <code>GET /trips</code>
          </h2>
          <p>List all the trips</p>
          <p>...</p>
        </div>
        <div className="border border-gray-500 p-4">
          <h2>
            <code>GET /trips/:id</code>
          </h2>
          <p>Get the details of a trip</p>
          <p>...</p>
        </div>
        <div className="border border-gray-500 p-4">
          <h2>
            <code>POST /trip</code>
          </h2>
          <p>Create a new trip</p>
          <p>...</p>
        </div>
        <div className="border border-gray-500 p-4">
          <h2>
            <code>PUT /trip</code>
          </h2>
          <p>Edit a trip</p>
          <p>...</p>
        </div>
      </div>
    </div>
  );
}
