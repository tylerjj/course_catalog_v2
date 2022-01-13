import React, { Component } from 'react'
import RecommendedCourse from './RecommendedCourse';

class RecommendedCourseArea extends Component {

    constructor(props) {
        super(props);
    }

    // Create empty array of recommended courses
    // Iterate through allCourses
    //  let myCourse =
    // if course is not completed
    //      

    getRecommendedCourses() {
        let allCourses = this.props.allCourses;
        let completedCourses = this.props.completedCourses;

        let recommendedCourses = [];
        for (let i = 0; i < allCourses.length; i++) {
            let course = allCourses[i];
            let recommendedCourse = {
                name: course.name,
                number: course.number,
                description: course.description,
                credits: course.credits,
                keywords: course.keywords,
                requisites: course.requisites,
                sections: course.sections,
                recommenders: [],
            }


            for (let completedCourse of completedCourses) {
                if (course.number == completedCourse.number) {
                    break;
                }
                else if (completedCourse.rating >= 3) {
                    let recommender = {
                        course: completedCourse,
                        keywords: [],
                    }
                    for (let keyword of completedCourse.keywords) {
                        if (course.keywords.includes(keyword)) {
                            recommender.keywords.push(keyword);
                        }
                    }
                    if (recommender.keywords.length > 0) {
                        recommendedCourse.recommenders.push(recommender);
                    }
                }
            }
            if (recommendedCourse.recommenders.length > 0) {
                recommendedCourses.push(recommendedCourse);
            }
        }
        return recommendedCourses;
    }


    getRecommendations() {
        let recommendedCourses = this.getRecommendedCourses();
        if (!recommendedCourses) {
            return null;
        }

        let recommendations = [];
        for (let recommendedCourse of recommendedCourses) {
            let recommendation = <RecommendedCourse course={recommendedCourse} />
            recommendations.push(recommendation);
        }

        return recommendations;
    }

    render() {
        return (
            <div className="RecommendedCourseArea">
                {this.getRecommendations()}
            </div>
        )
    }
}

export default RecommendedCourseArea;