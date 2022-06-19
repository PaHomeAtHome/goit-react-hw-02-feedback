import { Component } from "react";
import Container from './Container/Container';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from "./Section/Section";

export class App extends Component {
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

    return <Container>
      <Section>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.handleIncrement}></FeedbackOptions>
        <Statistics state={this.state} total={this.countTotalFeedback} percentage={this.countPositiveFeedbackPercentage}>
        </Statistics>
      </Section>
    </Container>
  } 
      
};