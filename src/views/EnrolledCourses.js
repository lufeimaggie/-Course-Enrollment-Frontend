import { RecentActorsTwoTone } from "@material-ui/icons";

import React from 'react';
import CourseTable from "../components/CourseTable";
import { CourseService } from "../services/CourseService";
import * as cookie from "react-cookies";
import {TOKEN_COOKIE_NAME} from "../constant";

// Class based component
export default class EnrolledCourses extends React.Component {
    state = {
        courses:[]
    }
    token = cookie.load(TOKEN_COOKIE_NAME)
    componentDidMount() {
        //Promise
        //tell you result
        CourseService.getEnrolledCourses(this.token)
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