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
            <Button variant="outlined" size="small" >Primary</Button>
            <Button variant="outlined" size="medium" color="secondary">Secondary</Button>
            <Button variant="outlined" color="success">Success</Button>
            <Button variant="outlined" size="medium" color="info">Info</Button>
            <Button variant="outlined" size="small" color="error">Error</Button>
        </div>
        
        <div>
            <Button variant="contained" size="small" >Primary</Button>
            <Button variant="contained" size="medium" color="secondary">Secondary</Button>
            <Button variant="contained" color="success">Success</Button>
            <Button variant="contained" size="medium" color="info">Info</Button>
            <Button variant="contained" size="small" color="error">Error</Button>
        </div>
        
    </Container>
    </>)
}

export default Buttons;