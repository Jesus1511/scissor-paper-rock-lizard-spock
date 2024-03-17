import { useContext, useState, useEffect } from "react"
import { generalData } from "./App"
import paperButton from "./images/paperButton.png"
import scissorsButton from "./images/scissorsButton.png"
import rockButton from "./images/rocksButton.png"
import lizardButton from "./images/lizardButton.png"
import spockButton from "./images/spockButton.png"


export const PlayingPlus = () => {

    const prslsIcon = [ scissorsButton, paperButton, rockButton, lizardButton, spockButton]

    const {setPlaying ,scorePlus, setScorePlus, prs} = useContext(generalData)

    const [played, setPlayed] =  useState(false)
    const [winnerText, setWinnerText] = useState("")
    const [iaPick, setIaPick] = useState(-1)
    const [winner, setWinner] = useState(0)

    function play (house){
        if(prs == house){
            setWinnerText("YOU TIE")
            setWinner(0)
        }
        else if(
            (prs == 0 && (house == 1 || house == 3))||
            (prs == 1 && (house == 2 || house == 4))||
            (prs == 2 && (house == 3 || house == 0))||
            (prs == 3 && (house == 4 || house == 1))||
            (prs == 4 && (house == 0 || house == 2))
        ){
            setWinner(1)
            setWinnerText("YOU WIN")
            setScorePlus(scorePlus+1)
        }
        else{
            setWinner(2)
            setWinnerText("YOU LOSE")
            setScorePlus(scorePlus-1)
        }
    setPlayed(true)
    }


    useEffect(()=>{
        setTimeout(() => {
          const ia = Math.floor(Math.random() * 5)
          setIaPick(ia)
          play(ia); // Descongela el componente después de 2 segundos
        }, 1000);
      },[])

  return (
    <>
    <div className="flex justify-between relative w-[375px] left-[50%] translate-x-[-50%] px-[35px]">
        <div>
            <div className="h-[110px] mb-[20px] bg-blue-950 rounded-[50%]">
                {prslsIcon.map((icon, index)=>(
                    index == prs && <img className={`w-[110px] maxw ${winner == 1 && "sombraWinner"}`} src={icon} id={index} alt="" />
                ))}
            </div>
            <p className="text-center w-[110px]">YOU PICKED</p>
        </div>

        <div className={`${!played && "mb-[156px]"}`}>
            <div className="h-[110px] mb-[20px] bg-blue-950 rounded-[50%]">
                {prslsIcon.map((Icon, index)=>(
                    index === iaPick && <img className={`w-[110px] maxw ${winner == 2 && "sombraWinner"}`} src={Icon} id={index} />
                ))}
            </div>
            <p className="text-center w-[110px]">THE HOUSE PICKED</p>
        </div>
    </div>

    {played?
        (<div className="mt-[50px]">
          <h2 className={`text-center text-[35px] font-bold`}>{winnerText}</h2>
          <button className="text-black m-auto mt-[10px] radius bg-white px-[40px] py-[10px] block" onClick={()=>{setPlaying(false)}}>PLAY AGAIN</button>
        </div>):
        ("")}
    </>
  )
}
