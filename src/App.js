import axios from "axios";
import { useState } from "react";
import { NavItem } from "react-bootstrap";

export default function App() {
  return (
    <div>
      <h1>Name: 120_Yogesh Makhare_JH</h1>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [eid, seteid] = useState("");
  const [ename, setname] = useState("");
  const [salary, setsalary] = useState("");
  const [emobno, setmobno] = useState("");
  const [list, setlist] = useState([]);

  const eidhandler = (e) => seteid(e.target.value);
  const enamedhandler = (e) => setname(e.target.value);
  const salarydhandler = (e) => setsalary(e.target.value);
  const mobnodhandler = (e) => setmobno(e.target.value);

  const adduser = async () => {
    // alert(`${eid} ${ename} ${salary} ${emobno}`);
    if (eid === "" || ename === "" || salary === "" || emobno === "") {
      alert(`Fields are empty`);
    }

    const user = {
      eid: eid,
      ename: ename,
      salary: salary,
      emobno: emobno,
    };
    const url = `http://localhost:5000/adduser`;
    await axios.post(url, user);

    const newlist = [user, ...list];
    setlist(newlist);

    seteid("");
    setname("");
    setsalary("");
    setmobno("");
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <div>
        <input
          type="text"
          value={eid}
          placeholder="Enter Emp ID"
          onChange={eidhandler}
        />
      </div>
      <div>
        <input
          type="text"
          value={ename}
          placeholder="Enter your name"
          onChange={enamedhandler}
        />
      </div>
      <div>
        <input
          type="text"
          value={salary}
          placeholder="Enter salary"
          onChange={salarydhandler}
        />
      </div>
      <div>
        <input
          type="text"
          value={emobno}
          placeholder="Enter Mob No."
          onChange={mobnodhandler}
        />
      </div>
      <div>
        <input type="button" value="Sign Up" onClick={adduser} />
      </div>

      {list.map((item, index) => (
        <div key={index}>
          {item.eid} ,{item.ename} ,{item.salary} ,{item.emobno}
        </div>
      ))}
    </div>
  );
}
