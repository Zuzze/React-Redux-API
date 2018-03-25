import React from 'react';
import { Table } from 'react-bootstrap';
require('./style.scss');

      /**
       * reusable multipurpose responsive table
       */
      export default class ResponsiveTable extends React.Component {
        constructor(props) {
          super(props);
          this.tableHeaders = props.tableHeaders;
          this.tableData = props.tableData;//[[r1c1, r1c2], [r2c1,r2c2]...]
          console.log(this.tableData);
        }
    
        render() {
          return (
            <Table responsive className="customTable">
                <thead>
                    <tr>
                        {this.tableHeaders.map( (header, index) => {
                            return (
                                <th key={index}>
                                    {header}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {(this.tableData && this.tableData.length > 0) ?
                        this.tableData.map( (rowData, row) => {
                        return (
                            <tr key={`row${row}`}>
                                { rowData.map( (val, col) => {
                                    return <td key={`${row}-${col}`}>{val}</td>
                                })}
                            </tr>
                        );
                    }) : <tr>
                            <td>No data found</td>
                            <td></td>
                        </tr> }
                </tbody>
            </Table>
          )
        }
    }