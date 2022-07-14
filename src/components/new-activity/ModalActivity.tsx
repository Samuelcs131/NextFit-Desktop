import { Container, ImageContainer, CircleTime } from "@styles/new-activity/modalActivity"
import Image from "next/image"

interface iModalActivity {

}

const ModalActivity = (): JSX.Element => {
    return(<>
    <Container>
        <div>
            <ImageContainer>
                <Image src={'/img/activities/agachamento-com-supino.gif'}  width={235} height={235} alt={'Exercicio'} />
            </ImageContainer>
            <span>
                <CircleTime style={{width: '70px', height: '70px'}}>
                    <svg height="70" width="70">
                        <circle cx="35" cy="35" r="32" stroke="black"/>
                        <circle cx="35" cy="35" r="32"/>
                    </svg>
                    <p>10</p>
                </CircleTime>
                <CircleTime style={{width: '80px', height: '80px'}}>
                    <svg height="80" width="80">
                        <circle cx="40" cy="40" r="38" stroke="black"/>
                        <circle cx="40" cy="40" r="38"/>
                    </svg>
                    <p>10</p>
                </CircleTime>
                <CircleTime style={{width: '70px', height: '70px'}}>
                    <svg height="70" width="70">
                        <circle cx="35" cy="35" r="32" stroke="black"/>
                        <circle cx="35" cy="35" r="32"/>
                    </svg>
                    <p>10</p>
                </CircleTime>
            </span>
        </div>
    </Container>
    </>)
}

export default ModalActivity