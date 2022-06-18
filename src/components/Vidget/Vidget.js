import { Component } from "react";
import { Button, Title, VidgetSection, Text } from './VidgetStyles'

class Vidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    
    handleIncrement = (event) => {
        this.setState(prevState => ({ [event.target.name]: prevState[event.target.name] + 1, }))
    };

    render() {
        return <VidgetSection>
            <Title>Please leave feedback</Title>
            <Button name='good' onClick={(event) => this.handleIncrement(event)}>Good</Button>
            <Button name='neutral' onClick={(event) => this.handleIncrement(event)}>Neutral</Button>
            <Button name='bad' onClick={(event) => this.handleIncrement(event)}>Bad</Button>
            <Title>Statistics</Title>
            <Text>good:{this.state.good}</Text>
            <Text>neutral:{this.state.neutral}</Text>
            <Text>bad:{this.state.bad}</Text>
        
        </VidgetSection>;
    }
}

export default Vidget;