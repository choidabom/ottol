import { useLotto } from "./hook/useLotto";

export default function App() {
  const { getRandomLotto } = useLotto();
  const lotto = getRandomLotto();

  return (
    <>
      <h1 className="text-3xl font-bold underline">로또 어플리케이션</h1>
      <div>{lotto}</div>
    </>
  );
}
