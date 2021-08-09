import Marquee from "react-fast-marquee";
export default function Marquees() {
  const textArr = [
    "Industrial  ",
    "Sculptor ",
    "Art Studio  ",
    "Art Design  ",
    "Steel ",
    "Bronze  ",
    "Pushing Boundaries  ",
    "Industrial  ",
    "Sculptor ",
    "Art Studio  ",
    "Art Design  ",
    "Steel ",
    "Bronze  ",
    "Pushing Boundaries  ",
  ];
  return (
    <div className="py-6 border-black  border border-r-0 border-l-0">
      <Marquee className="bg-white " gradient={false}>
        {textArr.map((id, index) => {
          return (
            <div key={index} className=" text-black">
              <h1 className="mx-3 text-lg">{id}</h1>
            </div>
          );
        })}
      </Marquee>
      <Marquee direction="right" className="bg-white" gradient={false}>
        {textArr.map((id, index) => {
          return (
            <div key={index} className=" text-black">
              <h1 className="mx-3 text-lg">{id}</h1>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}
