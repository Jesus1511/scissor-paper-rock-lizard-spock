import { useContext } from "react";
import { generalData } from "./App";
import paperButton from "./images/paperButton.png"
import scissorsButton from "./images/scissorsButton.png"
import rockButton from "./images/rocksButton.png"
import lizardButton from "./images/lizardButton.png"
import spockButton from "./images/spockButton.png"
import pentagon from "./images/bg-pentagon.svg"


export const ChoosingPlus = () => {

    const {setPrs, setPlaying} = useContext(generalData);

    function handleClick (id){
        setPrs(parseInt(id))
        setPlaying(true)
    }

  return (
    <>
        <div>
            <img className="h-auto cursor-pointer activePlus relative left-[50%] translate-x-[-50%] w-[90px] rounded-[50%] hoverYellow" src={scissorsButton} onClick={(e)=>{handleClick(e.target.id)}} id="0" alt="" />
        </div>
        <div className="flex justify-between w-[320px] relative left-[50%] translate-x-[-50%]">
            <img className="h-auto cursor-pointer activePlus w-[90px] rounded-[50%] hoverBlue" src={paperButton} onClick={(e)=>{handleClick(e.target.id)}} id="1" alt="" />
            <img className="h-auto cursor-pointer activePlus w-[90px] rounded-[50%] hoverRed" src={rockButton} onClick={(e)=>{handleClick(e.target.id)}} id="2" alt="" />
        </div>
        <div className="flex justify-between w-[250px] mt-[40px] relative left-[50%] translate-x-[-50%]">
            <img className="h-auto cursor-pointer activePlus w-[90px] rounded-[50%] hoverPurple" src={lizardButton} onClick={(e)=>{handleClick(e.target.id)}} id="3" alt="" />
            <img className="h-auto cursor-pointer activePlus w-[90px] rounded-[50%] hoverGreen" src={spockButton} onClick={(e)=>{handleClick(e.target.id)}} id="4" alt="" />
        </div>

        <img className="absolute left-[50%] z-[-1] translate-x-[-50%] w-[280px] top-[246px]" src={pentagon} alt="" />
    </>
  )
}
