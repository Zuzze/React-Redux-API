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
          this.tableData= props.tableData;
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
                        this.tableData.map( (obj, index) => {
                        return (
                            <tr key={index}>
                                { Object.values(obj).map( val => {
                                    return <td key={val}>{val}</td>
                                })}
                            </tr>
                        );
                    }) : <tr>No data found</tr> }
                </tbody>
            </Table>
          )
        }
    }