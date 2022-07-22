import { useState } from "react";
import JSONDATA from "./MOCK_DATA";
import "./styles.css";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        placeholder="Search.."
      />
      {JSONDATA.filter((user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase())
      ).map((searchedUser) => {
        return (
          <tr key={searchedUser.id}>
            <td>{searchedUser.first_name}</td>
          </tr>
        );
      })}
    </div>
  );
}
