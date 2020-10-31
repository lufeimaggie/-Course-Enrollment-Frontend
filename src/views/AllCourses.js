// Function based component
// Use React hook to use state

import React, { useEffect, useState } from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../services/CourseService';

// Funtion based component(Previous stateless component)
// Use React hook(16.8.0) to use state
export default function AllCoursese(props) {
    // useState resturns [stateVariable, function - setState]
    const [courses, setCourses] = useState([]);
    //default equals to componentDidMount + componentDidUpdate
    //when dependency list = [], we don't care about state change so we don't care about componentDidUpdate
    // then useeffect(callback, []) = componentDidMount
    useEffect(() => {
        CourseService.getAllCourses()
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