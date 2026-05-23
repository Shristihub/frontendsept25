import React from "react";

export const Courses = ({ ctype }) => {
  const backendCourses = ["Node.js", "Express.js", "MongoDB"];
  const frontendCourses = ["React", "Angular", "Vue.js"];
  return (
    <div>
      <h1>Courses</h1>
      <p>Welcome to the Courses page!</p>
   <ul>
      {ctype === 'backend' ? 
        backendCourses.map((course, index)=><li key={index}>{course}</li>):
       frontendCourses.map((course, index)=><li key={index}>{course}</li>)
      }
      </ul>
      
    </div>
  )
};
