import { RecentActorsTwoTone } from "@material-ui/icons";

import React from 'react';
import CourseTable from "../components/CourseTable";
import { CourseService } from "../services/CourseService";

// Class based component
export default class EnrolledCourses extends React.Component {
    state = {
        courses:[]
    }
    componentDidMount() {
        //Promise
        //tell you result
        CourseService.getEnrolledCourses()
            .then(response => { //brought back
                // put it to the fridge
                this.setState({
                    courses: response.data
                });
            })
            .catch(error => { //didn't bring back
                // error message
                console.error(error);
            });
    }
   render() {
       return (
           <div>
               <CourseTable courses = {this.state.courses}/>
           </div>
       );
   } 
}