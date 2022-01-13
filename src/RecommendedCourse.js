import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
class RecommendedCourse extends Component {

    getRecommenderDisplay(recommenders) {
        if (!recommenders) {
            return null;
        }

        let recommenderDisplay = [];
        for (let i = 0; i < recommenders.length; i++) {
            let keywordDisplay = [];
            for (let keyword of recommenders[i].keywords) {
                keywordDisplay.push(
                    <li>{keyword}</li>
                );
            }
            recommenderDisplay.push(
                <div>
                    {recommenders[i].course.number} | Matching Interests:
                    <ul>
                        {keywordDisplay}
                    </ul>
                </div>
            );
        }
        return recommenderDisplay;
    }

    render() {

        let course = this.props.course;
        let recommenders = course.recommenders;
        let name = course.name;
        let number = course.number;
        let credits = course.credits;
        let description = course.description;

        return (
            <div className="RecommendedCourse">
                <Card style={{ width: "66%", marginTop: "5px", marginBottom: "5px" }}>
                    <Card.Body>
                        <Card.Title>
                            <div style={{ maxWidth: 250 }}>{name}</div>

                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {number} - {credits} Cr.
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-4">
                            {description}
                        </Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">
                            <p>Because you liked:</p>
                            {this.getRecommenderDisplay(recommenders)}
                        </Card.Subtitle>
                    </Card.Body>
                </Card>

            </div>
        )
    }
}

export default RecommendedCourse;