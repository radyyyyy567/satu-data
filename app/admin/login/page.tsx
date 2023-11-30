import LoginComponent from "../components/LoginComponent";

const page = () => {
  return (
    <>
      <section className="h-screen w-full fixed top-0 left-0 flex items-center justify-center bg-red-100">
        <LoginComponent />
      </section>
    </>
  );
};

export default page;
