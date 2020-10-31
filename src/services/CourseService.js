import axios from '../axios';
export const CourseService = {
    getAllCourses: function(token) {
        return axios.get('/api/course', {
            headers: {
                Authorization: `Bearer ${token} `
            }
        });
    },
    getEnrolledCourses: function(token) {
        return axios.get('/api/course/enrollment', {
            headers: {
                Authorization: `Bearer ${token} `
            }
        });
    },
};
