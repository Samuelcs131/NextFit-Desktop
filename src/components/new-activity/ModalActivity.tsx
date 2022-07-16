import Image from "next/image"
import { useEffect, useState } from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
// STYLES
import { Button } from "@styles/buttons"
import { Container, ImageContainer, CircleTime, GroupButtons } from "@styles/new-activity/modalActivity"
// TYPES
import { iModalActivity, iRenderTime } from "src/@types/components"




const ModalActivity = ({ options: {maxSeries, repetitions, secondsInterval, setActiveModal, chosenExercise}}: iModalActivity): JSX.Element => {
    const [isPlayingInterval, setIsPlayingInterval] = useState<boolean>(false)
    const [seriesDone, setSeries] = useState<number>(0)

    // BUTTON START INTERVAL
    const [activeButtonStartInterval, setActiveButtonStartInterval] = useState<boolean>(false)

    // CIRCLE TIMER INTERVAL
    function renderTime ({ remainingTime }: iRenderTime) {
        const minutes = Math.floor((remainingTime % 3600) / 60)
        const seconds = remainingTime % 60

        // FINISH COUNT
        if (remainingTime === 0) {
            return <div>00:00</div>
        }

        return (
            <div>
                <div>{minutes < 10 ? '0' + minutes : minutes}:{seconds < 10 ? '0' + seconds : seconds}</div>
            </div>
        )
    }

    // PLAYING
    function playing(){
        if(activeButtonStartInterval){
            setIsPlayingInterval(true)
        } 
    }

    useEffect(()=>{
        const inputs = [maxSeries, repetitions, secondsInterval]
        if(!inputs.includes(0)){
            setActiveButtonStartInterval(true)
        }
    },[maxSeries, repetitions, secondsInterval])
    
    return(<>
    <Container>
        <div>
            {/* IMAGE ACTIVITY */}
            <ImageContainer>
                <Image src={`/img/activities/${chosenExercise}.gif`}  width={235} height={235} alt={'Exercicio'} />
            </ImageContainer>

            {/* INFO */}
            <span>
                <div> {/* REPETITIONS */}
                    <CircleTime color={'quaternary'} size={'65px'}>
                        <svg width="65" height="65">
                            <path d="m 32.5,2 a 30.5,30.5 0 1,0 0,61 a 30.5,30.5 0 1,0 0,-61" fill="none" strokeWidth="4"/>
                            <path d="m 32.5,2 a 30.5,30.5 0 1,0 0,61 a 30.5,30.5 0 1,0 0,-61" fill="none" strokeLinecap="round" strokeWidth="4"/>
                        </svg>
                        <p>{repetitions}</p>
                    </CircleTime>
                    <p>Repetições</p>
                </div>
                <div> {/* INTERVAL */}
                    <CircleTime color={'tertiary'} size={'80px'}>
                        <CountdownCircleTimer 
                            isPlaying={isPlayingInterval}
                            duration={secondsInterval} 
                            colors={'#009FFF'} 
                            size={80} 
                            strokeWidth={4}
                            onComplete={() => ({ shouldRepeat: true, delay: 0 })}
                            onUpdate={(time: number)=>{
                                time == secondsInterval && (setIsPlayingInterval(false))
                                if(activeButtonStartInterval){
                                    time == 0 && (setSeries(seriesDone + 1))
                                }
                            }}> 
                            {renderTime}
                        </CountdownCircleTimer>
                    </CircleTime>
                    <p>Intervalo</p>
                </div>
                <div> {/* SERIES */}
                    <CircleTime color={'secondary'} size={'65px'}>
                        <svg width="65" height="65" >
                            <path d="m 32.5,2 a 30.5,30.5 0 1,0 0,61 a 30.5,30.5 0 1,0 0,-61" fill="none" strokeWidth="4"/>
                            <path d="m 32.5,2 a 30.5,30.5 0 1,0 0,61 a 30.5,30.5 0 1,0 0,-61" fill="none" strokeLinecap="round" strokeWidth="4" strokeDasharray="191.6" 
                            strokeDashoffset={seriesDone === 0 ? 191.6 : (seriesDone >= maxSeries ? 0 : 191.6*(1-(seriesDone/maxSeries)) )}/>
                        </svg>
                    <p>{seriesDone}/{maxSeries}</p>
                    </CircleTime>
                    <p>Séries</p>
                </div>
            </span>

            {/* GROUP BUTTONS */}
            <GroupButtons>
                <Button variant="contained" color="tertiary" onClick={()=>playing()} disabled={!activeButtonStartInterval}>Iniciar intervalo</Button>
                <Button onClick={()=>setActiveModal(false)} variant="contained" color="secondary">Finalizar</Button>
            </GroupButtons>
        </div>
    </Container>
    </>)
}

export default ModalActivity