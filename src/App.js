import Loading from "./component/loading";

function App() {
  return (
    <>
      <Loading />
      <div className="p-10">
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#c00000] text-white font-extrabold w-screen text-[7vw] text-center">
            QUIT
          </div>
          <div className="w-screen border-4 border-[#c00000] h-[500px] p-8">
            <form className="w-[60%] mt-3">
              <input
                placeholder="type your comment"
                className="border-2 px-5 h-12 w-[90%]"
              />
              <button className="bg-[#c00000] font-bold text-white h-12 px-5 w-[10%]">
                Commit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
