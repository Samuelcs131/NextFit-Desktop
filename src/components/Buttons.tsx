import { Container, Button } from "../styles/buttons";

const Buttons = (): JSX.Element => {
    return(<>
    <Container>
        <h6>BUTTONS</h6> 
        <div>
            <Button size="small">Primary</Button>
            <Button color="secondary" size="medium">Secondary</Button>
            <Button color="success" >Success</Button>
            <Button color="info" size="medium">Info</Button>
            <Button color="error" size="small">Error</Button>
        </div>
 
        <div>
            <Button variant="outlined" size="small" >Outlined</Button>
            <Button variant="outlined" size="medium" color="secondary">Outlined</Button>
            <Button variant="outlined" color="success">Outlined</Button>
            <Button variant="outlined" size="medium" color="info">Outlined</Button>
            <Button variant="outlined" size="small" color="error">Outlined</Button>
        </div>
        
        <div>
            <Button variant="contained" size="small" >Contained</Button>
            <Button variant="contained" size="medium" color="secondary">Contained</Button>
            <Button variant="contained" color="success">Contained</Button>
            <Button variant="contained" size="medium" color="info">Contained</Button>
            <Button variant="contained" size="small" color="error">Contained</Button>
        </div>
        
        <div>
            <Button size="small" disabled>Disabled</Button>
            <Button variant="outlined" size="medium" color="secondary" disabled>Disabled</Button>
            <Button color="success" variant="contained" disabled>Disabled</Button>
            <Button variant="outlined" size="medium" color="info" disabled>Disabled</Button>
            <Button size="small" color="error" disabled>Disabled</Button>
        </div>
        
    </Container>
    </>)
}

export default Buttons;