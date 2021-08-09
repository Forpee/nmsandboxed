
export default function Slogan() {

  return (
    <div className="">
      <div className="flex">
        <div className="p-16 border-gray-400 flex  border border-t-0 border-b-0 w-1/4">
          <h1 className=" transform rotate-90 mx-auto my-auto">Art Studio</h1>
        </div>
        <div className=" w-full bg-gray-50">
          <img src="/walkman.png" alt="walking man"></img>
        </div>
      </div>
      <div className="border-gray-400 flex  h-96 border border-r-0">
        <div className="bg-blue-50 flex">
          <h1 className="my-auto px-4 font-medium mx-auto text-3xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </h1>
        </div>

        <div className="w-1/4 border  flex border-gray-400 border-t-0 border-r-0 border-b-0 ">
          <h1 className="transform -rotate-90 my-auto mx-auto">Design</h1>
        </div>
      </div>

      <div>
        <div className="flex ">
          <div className="w-3/4 border bg-gray-50 border-gray-400 border-t-0 "></div>
          <div className="flex h-32 w-1/4 border border-t-0 border-r-0 border-l-0 border-gray-400">
            <img src="/arrow.svg" alt="arrow"></img>
            <h1 className="my-auto text-xl">Scroll to read more</h1>
          </div>
        </div>
      </div>
      <div className="h-32 flex bg-blue-50 ">
        <div className="bg-white w-3/5 border border-gray-400 border-l-0 border-b-0 border-t-0"></div>
        <div className="w-2/5 border border-gray-400  border-t-0 border-l-0 border-r-0"></div>
      </div>
    </div>
  );
}
