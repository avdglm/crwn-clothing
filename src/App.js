const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "jackets",
    },
    {
      id: 3,
      title: "sneackers",
    },
    {
      id: 4,
      title: "womens",
    },
    {
      id: 5,
      title: "mens",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <div classname ="background-image" />
          <div className="category-body-builder">
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
