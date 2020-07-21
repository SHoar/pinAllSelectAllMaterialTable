import React, { forwardRef, RefObject } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import {
  CheckBox as SelectedIcon,
  CheckBoxOutlineBlank as UnSelectedIcon
} from "@material-ui/icons";

interface D1 {
  data: object;
  onClickHandler: React.MouseEventHandler;
}
export const CheckBoxSelectAllToggle = forwardRef(
  ({ data, onClickHandler }: D1, ref: RefObject<HTMLButtonElement>) => {
    console.log(
      Object.values(data).filter(item => item.selected === true).length
    );

    console.log("onclick,", onClickHandler)
    return (
      <div>
        {Object.values(data).filter(item => item.selected === true).length <
          Object.keys(data).length ? (
            <React.Fragment>
              <Tooltip placement="top" title="Select All">
                <IconButton
                  ref={ref}
                  onClick={onClickHandler}
                  style={{ transform: "translateX(-50px)" }}
                >
                  <UnSelectedIcon />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Tooltip placement="top" title="Deselect All">
                <IconButton
                  ref={ref}
                  onClick={onClickHandler}
                  style={{ transform: "translateX(-115px)" }}
                >
                  <SelectedIcon />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          )}
      </div>
    );
  }
);

export default CheckBoxSelectAllToggle;
