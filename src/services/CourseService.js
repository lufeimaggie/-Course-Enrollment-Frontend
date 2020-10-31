import axios from '../axios';
export const CourseService = {
    getAllCourses: function() {
        return axios.get('/courses');
    },
    // TODO: change to actual APT whne backend is ready
    getEnrolledCourses: function() {
        return axios.get('/courses');
    }
};
