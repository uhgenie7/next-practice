import Link from "next/link";

const App = () => {
  return (
    <div>
      <h2>Link to 'tomato' Page</h2>
      <Link href="/vegetable/tomato">
        <a>Move to '/vegetable/tomato'</a>
      </Link>
    </div>
  );
};

export default App;
