import { useState } from "react";
import { useRouter } from "next/router";

const App = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          router.push("/tomato");
        }}
      >
        Link to 'tomato' Page
      </button>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          router.push(`/vegetable/${name}`);
        }}
      >
        {name}으로 가기
      </button>
    </div>
  );
};

export default App;
