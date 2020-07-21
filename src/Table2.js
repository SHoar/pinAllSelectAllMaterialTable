import * as React from "react";
import BaseTable from "./BaseTable";
import { defaultSelect } from "./tableActionsUtil";
import { animalData } from "./animalData";
import { textColumn, optionColumn } from "./columnBuilders";
import { selectionAction } from "./actionBuilders";

export default class Table2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: animalData.map(datum => {
        return {
          ...datum,
          selected: false
        };
      })
    };

    this.animalColumn = textColumn({
      title: "Animal",
      field: "animal",
      editable: false
    });
    this.familyColumn = optionColumn({
      title: "Family",
      field: "family",
      lookup: { MAMMAL: "Mammal", REPTILE: "Reptile", AMPHIBEAN: "Amphibean" }
    });
  }
  selection = rowData =>
    selectionAction(rowData, {
      onClick: () => this.setState(defaultSelect(rowData, this.state))
    });
  render() {
    /* COLUMNS */

    return (
      <div>
        <BaseTable
          title="Table 2"
          columns={[this.animalColumn, this.familyColumn]}
          data={this.state.data}
          actions={[this.selection]}
          editable={null}
        />
      </div>
    );
  }
}
