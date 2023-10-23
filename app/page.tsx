import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("./MyComponent"), { ssr: false });

const Home = () => {
  return (
    <>
      <DynamicComponent />
    </>
  );
};

export default Home;