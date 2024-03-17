import { Choosing } from "./Choosing.jsx";
import {ChoosingPlus} from "./ChoosingPlus.jsx"
import { Playing } from "./Playing.jsx";
import { PlayingPlus } from "./PlayingPlus.jsx";
import { useState, createContext } from "react";
import logo from "./images/logo.png"
import logoPlus from "./images/logo-bonus.svg"
import rulesImg from "./images/image-rules.svg"
import rulesImgPlus from "./images/image-rules-bonus.svg"
import x from "./images/icon-close.svg"

export const generalData = createContext();

export const App = () => {
  const [score, setScore] = useState(0);
  const [scorePlus, setScorePlus] = useState(0);
  const [rules, setRules] = useState(false);
  const [prs, setPrs] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [plus, setPlus] = useState(false)

  return (
    <generalData.Provider value={{ prs,setScorePlus, scorePlus, setPrs, score, setScore, setPlaying, rules}}>
      
      {rules?(
        <div className="z-[5] absolute top-0 bg-white w-[450px] h-[600px] left-[50%] translate-x-[-50%]">
          <h2 className="my-[60px] font-bold text-center text-gray-400">RULES</h2>
          <img className="block m-auto " src={plus?rulesImgPlus:rulesImg} alt="" />
          <button className="my-[50px] block m-auto" onClick={()=>{setRules(false)}}>
            <img src={x} alt="" />
          </button>
        </div>
      ):("")}

      <div className="mb-[80px] flex items-center px-[20px] py-[12px] border-solid border-[2px] radius w-[340px] justify-between m-auto mt-[30px]">
        <div className="w-[90px]">
          <img src={!plus?logo:logoPlus} alt="" />
        </div>

        <div className="bg-white radius w-[75px] h-[75px] p-[6px]">
          <h2 className="text-blue-900 text-center">SCORE</h2>
          <p className="text-black font-bold text-center text-[30px]">{plus?scorePlus:score}</p>
        </div>
      </div>

      {plus? 
        !playing?<ChoosingPlus />:<PlayingPlus />
      : !playing?<Choosing />:<Playing />
    }

      <button className=" hover:bg-white hover:text-blue-950 transition block m-auto mt-[80px] text-white border-white border solid radius px-[25px] py-[5px] border-2px" onClick={()=>{setRules(true)}}>RULES</button>

      {!playing && <button onClick={()=>{setPlus(!plus)}} className="mt-[30px] relative left-[50%] translate-x-[-50%] ">{!plus?"BONUS MODE":"NORMAL MODE"}</button>}
    </generalData.Provider>
  );
};
