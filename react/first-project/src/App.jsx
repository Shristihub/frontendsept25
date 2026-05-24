import { useState } from "react";
import { Courses } from "./Courses";
import Greeter from "./Greeter";
import { Header } from "./Header";
// root component
function App() {
  const [course, setCourse] = useState("Cloud");
  return (
    <>
      <Header cname="Shristi Tech Academy"></Header>
      <Greeter uname="Sripriya"></Greeter>
      <select name="search" onChange={(e) => setCourse(e.target.value)}>
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
      </select>
      <h2>The selected course is {course}</h2>
      <Courses ctype={course}></Courses>
    </>
  );
}
export default App;
