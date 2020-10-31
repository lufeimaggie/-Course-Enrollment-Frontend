// Function based component
// Use React hook to use state

import React, { useEffect, useState } from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../services/CourseService';
import * as cookie from "react-cookies";
import {TOKEN_COOKIE_NAME} from "../constant";

// Funtion based component(Previous stateless component)
// Use React hook(16.8.0) to use state
export default function AllCourses(props) {
    // useState resturns [stateVariable, function - setState]
    const [courses, setCourses] = useState([]);
    const token = cookie.load(TOKEN_COOKIE_NAME);
    //default equals to componentDidMount + componentDidUpdate
    //when dependency list = [], we don't care about state change so we don't care about componentDidUpdate
    // then useeffect(callback, []) = componentDidMount
    useEffect(() => {
        CourseService.getAllCourses(token)
        .then(response => {
            setCourses(response.data)
        })
        .catch(error => {
            console.error(error);
        })
    }, []);
    return (
        <div>
            <CourseTable courses={courses} />
        </div>

    )      
}