import React from "react";
import Button from "../buttons";
import { Table as TableBS } from "react-bootstrap";
import "./table.css";

const Table = (props) => {
  return (
    <TableBS striped hover>
      <tbody>
        {props.tableData.map((item) => {
          return (
            <tr>
              <td>{item}</td>
              <td className="d-flex">
                <Button variant="outline-primary" className="" size="sm">
                  Edit
                </Button>
                <Button variant="outline-danger" className="" size="sm">
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableBS>
  );
};

export default Table;
