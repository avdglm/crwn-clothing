const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <img src="" />
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
