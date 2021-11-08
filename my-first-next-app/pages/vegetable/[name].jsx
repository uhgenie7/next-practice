import Link from "next/link";
import { useRouter } from "next/router";

const name = () => {
  const route = useRouter();
  console.log(route);
  return (
    <div>
      <h2>Hello!</h2>
      <Link href="/">move to '/'</Link>
    </div>
  );
};

export default name;
