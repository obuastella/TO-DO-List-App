import { useState } from "react";
import axios from "axios";
//  To pass the data to the server
function Create() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  };
  return (
    <div className="create_form">
      <input
        type="text"
        name=""
        id=""
        placeholder
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={handleAdd}>
        Add
      </button>
      {/* When they click the button it should be added to the server side */}
    </div>
  );
}

export default Create;
