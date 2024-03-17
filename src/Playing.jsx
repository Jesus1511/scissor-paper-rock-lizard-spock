import { useContext, useState, useEffect } from "react"
import { generalData } from "./App"
import rockButton from "./images/rocksButton.png"
import paperButton from "./images/paperButton.png"
import scissorButton from "./images/scissorsButton.png"

export const Playing = () => {

    const prsIcon = [paperButton, scissorButton, rockButton]

    const {setPlaying ,score, setScore, prs} = useContext(generalData)

    const [played, setPlayed] =  useState(false)
    const [winnerText, setWinnerText] = useState("")
    const [iaPick, setIaPick] = useState(Number)
    const [winner, setWinner] = useState(0)

    function play (iaPick){
      if ((prs == 1 && iaPick == 0)||(prs == 2 && iaPick == 1)||(prs == 0 && iaPick == 2)){
        setScore(score + 1)
        setWinnerText("YOU WIN")
        setWinner(1)
      }
      else if(prs == iaPick){
        setWinnerText("YOU TIE")
        setWinner(0)
      }
      else {
        setWinnerText("YOU LOSE")
        setWinner(2)
        setScore(score - 1) 
      }
      setPlayed(true)
    }

    useEffect(()=>{
      setTimeout(() => {
        const ia = Math.floor(Math.random() * 3)
        setIaPick(ia)
        play(ia); // Descongela el componente después de 2 segundos
      }, 1000);
    },[])

  return (
    <>
    <div className="flex justify-between relative w-[375px] left-[50%] translate-x-[-50%] px-[35px] ">
        <div >
            <div id="1" className="h-[110px] mb-[20px] bg-blue-950 rounded-[50%]">
              {prsIcon.map((Icon, index) => (
                index === prs && <img className={`w-[110px] maxw ${winner == 1 && "sombraWinner"}`} src={Icon} id={index} />
                 ))}
            </div>
            <p className="text-center w-[110px]">YOU PICKED</p>
        </div>

        <div id="2" className={`${!played && "mb-[156px]"}`}>
          <div className="h-[110px] mb-[20px] bg-blue-950 rounded-[50%]">
            {played &&
              prsIcon.map((Icon, index) =>(
                index === iaPick && <img className={`w-[110px] maxw ${winner == 2 && "sombraWinner"}`} src={Icon} id={index} />)
              )}
            <h2></h2>
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
