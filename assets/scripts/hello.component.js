const { useEffect, useState } = React;

const Card = () => {
  const [todos, setTodos] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    try {
      getTodo();
    } catch (error) {
      setTodos(null);
    }
  }, []);

  const getTodo = async () => {
    if (id) {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );

      setTodos(response.data);
    }
  };

  return (
    <React.Fragment>
      <div className="p-6 flex flex-col gap-6">
        <div className="flex gap-2 bg-white w-full md:w-1/2 p-2 rounded-lg justify-between m-auto">
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border boder-gray-100 p-3 w-full rounded focus:ring-0"
          />
          <button
            onClick={(e) => {
              e.preventDefault();

              getTodo();
            }}
            className="bg-gray-800 px-5 py-3 text-white rounded hover:bg-gray-700 transition duration-300 ease-in-out"
          >
            Fetch
          </button>
        </div>

        <div className="bg-white w-full md:w-1/2 m-auto text-black rounded-lg p-4">
          {todos ? (
            <div className="text-black flex flex-col gap-4">
              <div>
                <p className="text-sm text-gray-600">User Id</p>
                <h1 className="text-lg text-gray-800">{todos.userId}</h1>
              </div>
              <div>
                <p className="text-sm text-gray-600">Record Id</p>
                <h1 className="text-lg text-gray-800">{todos.id}</h1>
              </div>
              <div>
                <p className="text-sm text-gray-600">Title</p>
                <h1 className="text-lg text-gray-800">{todos.title}</h1>
              </div>
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <h1 className="text-lg text-gray-800">
                  {todos.completed ? "Yes" : "No"}
                </h1>
              </div>
            </div>
          ) : (
            <div>
              <p>No Record</p>
            </div>
          )}
        </div>
      </div>

      <div
        className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6
      "
      >
        {[0, 0, 0].map((i, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden">
            <div className="w-full">
              <img
                className="w-full"
                src="https://images.unsplash.com/photo-1521139869420-edaae1bc7b9a?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              />
            </div>
            <div className="p-6">
              <h1 className="text-2xl font-semibold">Robin Hood's Bay</h1>
              <h2 className="text-lg font-medium mb-6">27 October, Noon.</h2>
              <p className="text-sm font-light">
                --Most strasnge; no news yet of the ship we wait for. Mrs.
                Harker reported last night and this morning as usual: "lapping
                waves and rushing water," though she added that "the waves were
                very faint." The telegrams from London have been the same: "no
              </p>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

ReactDOM.render(<Card />, document.getElementById("hello-component"));
