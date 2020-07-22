import React from "react";
import CheckBoxOutlineBlankOutlinedIcon from "@material-ui/icons/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import PinDrop from "@material-ui/icons/PinDrop";
import PinDropOutlined from "@material-ui/icons/PinDropOutlined";
import RadioButtonUncheckedOutlinedIcon from "@material-ui/icons/RadioButtonUncheckedOutlined";
import RadioButtonCheckedOutlinedIcon from "@material-ui/icons/RadioButtonCheckedOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export const defaultCheckbox = rowData =>
  rowData.selected ? (
    <CheckBoxOutlinedIcon />
  ) : (
    <CheckBoxOutlineBlankOutlinedIcon />
  );
export const defaultPinIcon = rowData =>
  rowData.pinned ? <PinDrop /> : <PinDropOutlined />;

export const defaultRadioButton = rowData =>
  rowData.activated ? (
    <RadioButtonCheckedOutlinedIcon />
  ) : (
    <RadioButtonUncheckedOutlinedIcon />
  );

export const defaultColorIcon = rowData => (
  <FiberManualRecordIcon style={{ color: rowData.color }} />
);

export const defaultSelect = (rowData, state) => {
  let newData = [...state.data];
  newData[rowData.tableData.id] = {
    ...rowData,
    selected: !rowData.selected
  };
  return {
    ...state,
    data: newData
  };
};

export const defaultPin = (rowData, state) => {
  console.log("state", state);
  console.log("rowData", rowData)
  let newData = [...state.data];

  newData[rowData.tableData.id] = {
    ...rowData,
    pinned: !rowData.pinned
  };
  return {
    ...state,
    data: newData
  };
};

export const defaultActivate = (rowData, state) => {
  let newData = [...state.data];
  let newActivatedRowId;
  if (state.activatedRowId !== -1) {
    newData[state.activatedRowId] = {
      ...newData[state.activatedRowId],
      activated:
        state.activatedRowId === rowData.tableData.id
          ? !rowData.activated
          : false
    };
    newData[rowData.tableData.id] = {
      ...newData[rowData.tableData.id],
      activated: !(state.activatedRowId === rowData.tableData.id)
    };
    newActivatedRowId =
      state.activatedRowId === rowData.tableData.id ? -1 : rowData.tableData.id;
  } else {
    newData[rowData.tableData.id] = {
      ...rowData,
      activated: true
    };
    newActivatedRowId = rowData.tableData.id;
  }
  return {
    ...state,
    data: newData,
    activatedRowId: newActivatedRowId
  };
};

export const defaultColorPick = (rowData, state) => {
  return {
    ...state,
    modalVisible: true,
    modalColor: rowData.color,
    colorRowId: rowData.tableData.id
  };
};

export const applyColor = state => {
  let newData = [...state.data];
  newData[state.colorRowId] = {
    ...newData[state.colorRowId],
    color: state.modalColor
  };
  return {
    ...state,
    data: newData,
    modalVisible: false
  };
};

export const alphaNumericValidator = e => {
  if (!e.target.value.match(/^[0-9a-zA-Z]+$/)) {
    console.log("invalid");
  }
  return e.target.value;
};

export const selectAllAction = (rowData, state) => {
  let prevData = [...state.data];
  let newData = Object.keys(prevData).reduce((accum, rowData) => {
    accum[rowData] = { ...rowData, pinned: true }
    return accum
  }, [])
  console.log("selectAll action state", newData)
  return {
    ...state,
    data: newData
  };
}

export const pinAllAction = (state) => {
  let prevData = [...state.data];
  let newData = Object.keys(prevData).reduce((accum, rowData) => {
    accum[rowData] = { ...rowData, pinned: true }
    return accum
  }, [])
  console.log("pinAll action state", newData)
  return {
    ...state,
    data: newData
  };
}