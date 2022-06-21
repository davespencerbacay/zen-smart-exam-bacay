import React from "react";
import Table from "../library/table";

const TableSection = () => {
  const tableData = [
    "Monday, 07:00 - Monday, 17:00",
    "Tuesday, 07:00 - Monday, 17:00",
    "Wednesday, 07:00 - Monday, 17:00",
    "Thursday, 07:00 - Monday, 17:00",
    "Friday, 07:00 - Monday, 17:00",
  ];
  return (
    <div className="custom-container">
      <h4>Table</h4>
      <Table tableData={tableData} />
    </div>
  );
};

export default TableSection;
