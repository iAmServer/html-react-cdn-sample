class Card extends React.Component {
  render() {
    return (
      <div
        className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6
      "
      >
        {[0, 0, 0].map(() => (
          <div className="bg-white rounded-lg overflow-hidden">
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
    );
  }
}

ReactDOM.render(<Card />, document.getElementById("root"));
