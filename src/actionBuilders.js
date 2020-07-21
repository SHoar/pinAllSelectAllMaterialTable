import {
  defaultCheckbox,
  defaultPin,
  defaultRadioButton,
  defaultColorIcon
} from "./tableActionsUtil";

export const baseAction = ({
  icon,
  hidden = false,
  onClick,
  tooltip = null,
  disabled = false,
  iconProps = null
}) => {
  return {
    icon,
    hidden,
    onClick,
    tooltip,
    disabled,
    iconProps
  };
};

export const selectionAction = (
  rowData,
  {
    icon = null,
    hidden = false,
    onClick, //action creator I guess?
    tooltip = "Select",
    disabled = false,
    iconProps = null //Can't figure out how to use the stare of each row for this, might need to be an input column
  }
) => {
  if (!icon) {
    icon = () => defaultCheckbox(rowData);
  }
  return baseAction({ icon, hidden, onClick, tooltip, disabled, iconProps });
};

export const pinningAction = (
  rowData,
  {
    icon = null,
    hidden = false,
    onClick, //action creator I guess?
    tooltip = "Pin",
    disabled = false,
    iconProps = null //Can't figure out how to use the stare of each row for this, might need to be an input column
  }
) => {
  if (!icon) {
    icon = () => defaultPin(rowData);
  }
  return baseAction({ icon, hidden, onClick, tooltip, disabled, iconProps });
};

export const activationAction = (
  rowData,
  {
    icon = null,
    hidden = false,
    onClick, //action creator I guess?
    tooltip = "Activate",
    disabled = false,
    iconProps = null //Can't figure out how to use the stare of each row for this, might need to be an input column
  }
) => {
  if (!icon) {
    icon = () => defaultRadioButton(rowData);
  }
  return baseAction({ icon, hidden, onClick, tooltip, disabled, iconProps });
};

export const colorPickerAction = (
  rowData,
  {
    icon = null,
    hidden = false,
    onClick, //action creator I guess?
    tooltip = "Change Color",
    disabled = false,
    iconProps = null
    //Can't figure out how to use the stare of each row for this, might need to be an input column
  }
) => {
  if (!icon) {
    icon = () => defaultColorIcon(rowData);
  }
  return baseAction({ icon, hidden, onClick, tooltip, disabled, iconProps });
};
