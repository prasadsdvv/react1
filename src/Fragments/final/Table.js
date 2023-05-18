import React from "react";
import Columns from "./Fragments/final/columns";

function Table() {
  return (
    <div>
      <h1>table</h1>
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;