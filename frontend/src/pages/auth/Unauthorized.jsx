import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <section>
      <div class="flex h-screen ">
        <div class="m-auto">
          <h3 className="m-3 text-center font-bold text-8xl">403</h3>
          <h3 className="text-8xl text-red-500	font-bold">Access Forbidden</h3>
          <div className="flex flex-col items-center">
            <button onClick={goBack} class="m-2 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             Back to previous page
            </button>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default Unauthorized;
