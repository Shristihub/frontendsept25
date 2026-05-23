import { Courses } from "./Courses";
import { Header } from "./Header";
// root component
function App() {
  return (
    <>
      <Header cname="Shristi Tech Academy"></Header>
      <select name="search">
        <option value="backend">Backend</option>
        <option value="frontend">Frontend</option>
      </select>
      <Courses ctype="backend"></Courses>
    </>
  );
}
export default App;
