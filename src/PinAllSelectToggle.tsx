import React, { forwardRef, RefObject } from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import {
  PinDropOutlined as PinAllIcon,
  PinDrop as UnPinAllIcon
} from "@material-ui/icons/";

interface D1 {
  data: object;
  onClickHandler: React.MouseEventHandler;
}
const PinAllSelectToggle = forwardRef(
  ({ data, onClickHandler }: D1, ref: RefObject<HTMLButtonElement>) => {
    console.log(
      "onclick", onClickHandler
    );

    return (
      <div>
        {Object.values(data).filter(item => item.pinned === true).length <=
          Object.keys(data).length ? (
            <React.Fragment>
              <Tooltip placement="top" title="Select All">
                <IconButton
                  ref={ref}
                  onClick={onClickHandler}
                  style={{ transform: "translateX(-50px)" }}
                >
                  <PinAllIcon />
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
                  <UnPinAllIcon />
                </IconButton>
              </Tooltip>
            </React.Fragment>
          )}
      </div>
    );
  }
);

export default PinAllSelectToggle;
