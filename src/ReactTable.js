import React, { Component } from 'react';

var ReactTable = React.createClass({
  getInitialState: function() {
     return {currentData: this.props.data};
  },
  render: function() {
    var key = Date.now();
    var tableHeader = Object.keys(this.state.currentData[0]).map(function(columnName){
        key = key+1;
        return (
            <th key={key} data-field={columnName}>{columnName}</th>
        );
    });
    var tableRow = this.state.currentData.map(function(rowObject){
        var i;
        var returnValue = [];
        for (i in rowObject){
            key = key+1;
            returnValue.push(
                <td key={key}>
                    {rowObject[i]}
                </td>
            )
        };
        key = key+1;
        return (<tr key={key}>
            {returnValue}
            </tr>
        );
    });

    return (
        <table>
            <thead>
                  <tr>
                      {tableHeader}
                  </tr>
                </thead>

                <tbody>
                      {tableRow}
                </tbody>
        </table>
    );
  }
});
window.__ReactTable__ = ReactTable