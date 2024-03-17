import { useContext } from "react";
import { generalData } from "./App";
import paperButton from "./images/paperButton.png"
import scissorsButton from "./images/scissorsButton.png"
import rockButton from "./images/rocksButton.png"
import triangle from "./images/bg-triangle.svg"

export const Choosing = () => {
  const { setPrs, setPlaying} = useContext(generalData);

  function handleClick(id) {
    setPrs(parseInt(id))
    setPlaying(true);
  }

  return (
    <div >
      <div className=" flex px-[45px] justify-between w-[380px] m-auto mb-[300px]">
        <div className="flex justify-center items-center inlineBlock w-[100px] cursor-pointer h-[100px]" id="1" onClick={(e)=>{handleClick(e.target.id)}}>
          <img id="0" className=" active hoverBlue hover:transition transition rounded-[50%] w-[110px] maxw " src={paperButton} alt="" />
        </div>
        <div className="flex justify-center items-center  inlineBlock w-[100px] cursor-pointer h-[100px]" id="2" onClick={(e)=>{handleClick(e.target.id)}}>
          <img id="1" className=" active hoverYellow hover:transition transition rounded-[50%] w-[110px] maxw " src={scissorsButton} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center  absolute left-[50%] top-[380px] translate-x-[-50%] transition rounded-[50%] cursor-pointer " id="3" onClick={(e)=>{handleClick(e.target.id)}}>
        <img id="2" className=" active hover:transition transition rounded-[50%] hoverRed w-[110px] maxw " src={rockButton} alt="" />
      </div>

      <img className="absolute left-[50%] z-[-1] translate-x-[-50%] w-[280px] top-[246px]" src={triangle} alt="" />
    </div>
  );
};
