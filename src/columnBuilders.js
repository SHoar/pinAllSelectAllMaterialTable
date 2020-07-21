import React from "react";
import { defaultColorIcon } from "./tableActionsUtil";

/*
  Render changes how the cell is rendered
  Edit Component allows for custom styling of the cell's edit mode
  customValidator allows for using the default editor, but with a custom function to check 
  the input's validation. Probably pass an error flag that the component should listen to
*/

export const baseColumn = ({
  title,
  field,
  type,
  editable = true,
  searchable = false,
  render = null,
  editComponent = null,
  customSort = null,
  cellStyle = null,
  grouping = true,
  sorting = true,
  lookup = null
}) => {
  return {
    title,
    field,
    type,
    editable: editable ? "onUpdate" : "never",
    searchable,
    render,
    editComponent,
    customSort,
    cellStyle,
    grouping,
    sorting,
    lookup
  };
};

export const textColumn = ({
  title,
  field,
  editable = true,
  searchable = true,
  render = null,
  editComponent = null,
  customSort = null,
  cellStyle = null,
  grouping = true,
  sorting = true,
  customValidation = null
}) => {
  if (!editComponent) {
    //If no customComponent is passed in, use the default
    if (!customValidation) {
      //If no customValidation is passed in, assume no validation
      editComponent = props => (
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        /> //Open to better styling
      );
    } else {
      editComponent = props => (
        <input
          type="text"
          value={props.value}
          onChange={e => props.onChange(customValidation(e))}
        /> //Open to better styling
      );
    }
  }
  return baseColumn({
    title,
    field,
    type: "string",
    editable,
    searchable,
    render,
    editComponent,
    customSort,
    cellStyle,
    grouping,
    sorting
  });
};

export const optionColumn = ({
  title,
  field,
  lookup, //change to more understandable name,
  editable = true,
  searchable = true,
  render = null,
  editComponent = null,
  customSort = null,
  cellStyle = null,
  grouping = true,
  sorting = true
}) => {
  return baseColumn({
    title,
    field,
    type: "string",
    editable,
    searchable,
    render,
    editComponent,
    customSort,
    cellStyle,
    grouping,
    sorting,
    lookup
  });
};

export const numberColumn = ({
  title,
  field,
  type,
  editable = true,
  searchable = false,
  render = null,
  editComponent = null,
  customSort = null,
  cellStyle = null,
  grouping = true,
  sorting = true,
  customValidation = null
}) => {
  if (!editComponent) {
    //If no customComponent is passed in, use the default
    if (!customValidation) {
      //If no customValidation is passed in, assume no validation
      editComponent = props => (
        <input
          type="number"
          value={props.value}
          onChange={e => props.onChange(e.target.value)}
        />
      );
    } else {
      editComponent = props => (
        <input
          type="number"
          value={props.value}
          onChange={e => props.onChange(customValidation(e))}
        /> //Open to better styling
      );
    }
  }
  return baseColumn({
    title,
    field,
    type,
    editable,
    searchable,
    render,
    editComponent,
    customSort,
    cellStyle,
    grouping,
    sorting
  });
};
export const colorColumn = ({
  title,
  field,
  editable = true,
  searchable = false,
  render = null,
  editComponent = null,
  customSort = null,
  cellStyle = null,
  grouping = true,
  sorting = false,
  customValidation = null
}) => {
  if (!editComponent) {
    //If no customComponent is passed in, use the default
    if (!customValidation) {
      //If no customValidation is passed in, assume no validation
      editComponent = props => (
        <input
          type="color"
          value={"#" + props.value}
          onChange={e => {
            let newColor = e.target.value;
            props.onChange(newColor.slice(1));
          }}
        />
      );
    } else {
      editComponent = props => (
        <input
          type="color"
          value={props.value}
          onChange={e => props.onChange(customValidation(e))}
        /> //Open to better styling
      );
    }
  }
  if (!render) {
    render = rowData => defaultColorIcon({ color: rowData.color });
  }
  return baseColumn({
    title,
    field,
    type: "string",
    editable,
    searchable,
    render,
    editComponent,
    customSort,
    cellStyle,
    grouping,
    sorting
  });
};
