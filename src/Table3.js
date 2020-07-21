import * as React from "react";
import BaseTable from "./BaseTable";
import {
  defaultActivate,
  defaultSelect,
  alphaNumericValidator
} from "./tableActionsUtil";
import {
  colorColumn,
  textColumn,
  numberColumn,
  optionColumn
} from "./columnBuilders";
import { selectionAction, activationAction } from "./actionBuilders";
import { countryData } from "./countryData";
import ReactCountryFlag from "react-country-flag";
export default class Table3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: countryData.map(datum => {
        return {
          ...datum,
          selected: false,
          activated: false,
          color: ((Math.random() * 0xffffff) << 0).toString(16)
        };
      })
    };

    this.countryColumn = textColumn({
      title: "Country",
      field: "country",
      customValidation: alphaNumericValidator
    });
    this.capitalColumn = textColumn({
      title: "Capital",
      field: "capital"
    });
    this.flagColumn = optionColumn({
      title: "Flag",
      field: "flag",
      lookup: {
        US: "US",
        MX: "MEXICO",
        CA: "CANADA"
      },
      render: rowData => <ReactCountryFlag countryCode={rowData.flag} svg />
    });
    this.populationColumn = numberColumn({
      title: "Population",
      field: "population",
      type: "numeric"
    });
    this.languageColumn = optionColumn({
      title: "Language",
      field: "language",
      lookup: { ENGLISH: "English", SPANISH: "Spanish" }
    });
    this.favoriteColorColumn = colorColumn({
      title: "Favorite Color",
      field: "color"
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
  activation = rowData =>
    activationAction(rowData, {
      onClick: () => this.setState(defaultActivate(rowData, this.state))
    });
  render() {
    return (
      <div>
        <BaseTable
          title="Table 3"
          columns={[
            this.countryColumn,
            this.capitalColumn,
            this.populationColumn,
            this.languageColumn,
            this.flagColumn,
            this.favoriteColorColumn
          ]}
          data={this.state.data}
          actions={[this.selection, this.activation]}
          editable={this.editable}
          options={{ grouping: true }}
        />
      </div>
    );
  }
}
