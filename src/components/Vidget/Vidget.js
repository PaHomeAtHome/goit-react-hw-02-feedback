import { Component } from "react";
import { Button, Title, VidgetSection, Text, GreenButton, RedButton, GreenText, RedText } from './VidgetStyles'

class Vidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleIncrement = (e) => {
        this.setState(prevState => ({ [e.target.name]: prevState[e.target.name] + 1, }))
    };

    countTotalFeedback = () => Object.values(this.state).reduce((prev, element) => prev + element, 0)
    
    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (total) {  
            return Math.round(this.state.good / total * 100) + `%`;
        }
        return;
    };
    
    render() {
        const { good, neutral, bad } = this.state;
    
        return <VidgetSection>

            <Title>Please leave feedback</Title>
            <GreenButton name='good' onClick={(e) => this.handleIncrement(e)}>Good</GreenButton>
            <Button name='neutral' onClick={(e) => this.handleIncrement(e)}>Neutral</Button>
            <RedButton name='bad' onClick={(e) => this.handleIncrement(e)}>Bad</RedButton>
            <Title>Statistics</Title>
            <GreenText>good: {good}</GreenText>
            <Text>neutral: {neutral}</Text>
            <RedText>bad: {bad}</RedText>
            <Text>Total: {this.countTotalFeedback()}</Text>
            <Text>Positive feedback: {this.countPositiveFeedbackPercentage()}</Text>
        
        </VidgetSection>;
    }
}

export default Vidget;