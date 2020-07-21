import * as React from "react";
import BaseTable from "./BaseTable";
import { defaultActivate, defaultSelect, defaultPin, alphaNumericValidator } from "./tableActionsUtil";
import { textColumn,  } from "./columnBuilders";
import {
  selectionAction,
  activationAction,
  pinningAction
} from "./actionBuilders";
import { teamNameData } from "./teamNames";

export default class Table1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: teamNameData.map(datum => {
        return {
          ...datum,
          selected: false,
          activated: false,
          pinned: false
        };
      })
    };
    /* COLUMNS */
    this.firstNameColumn = textColumn({
      title: "First Name",
      field: "first",
      customValidation: alphaNumericValidator
    });
    this.lastNameColumn = textColumn({
      title: "Last Name",
      field: "last"
    });

    /* ACTIONS */
    this.editable = {
      isEditable: rowData => {
        if (rowData.activated === null) return false;
        else return rowData.activated;
      },
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve, reject) => {
          const dataUpdate = [...this.state.data];
          dataUpdate[oldData.tableData.id] = newData;
          /* dispatch redux action to update the data of the parent table */
          this.setState({ data: dataUpdate });
          resolve();
        })
    };
  }
  selection = rowData =>
    selectionAction(rowData, {
      onClick: () => this.setState(defaultSelect(rowData, this.state))
    });
  pinning = rowData =>
    pinningAction(rowData, {
      onClick: () => this.setState(defaultPin(rowData, this.state))
    });
  activation = rowData =>
    activationAction(rowData, {
      onClick: () => this.setState(defaultActivate(rowData, this.state))
    });
  render() {
    return (
      <div>
        <BaseTable
          title="Table 1"
          columns={[this.firstNameColumn, this.lastNameColumn]}
          data={this.state.data}
          actions={[this.selection, this.pinning, this.activation]}
          editable={this.editable}
        />
      </div>
    );
  }
}
