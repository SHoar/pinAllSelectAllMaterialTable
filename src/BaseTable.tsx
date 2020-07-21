import React, { useRef } from "react";
import MaterialTable from "material-table";
import { selectAllAction, pinAllAction } from "./tableActionsUtil"
import CheckBoxSelectAllToggle from "./CheckBoxSelectAllToggle";
import PinAllSelectToggle from "./PinAllSelectToggle";

interface Action {
  (rowData: any): any;
}

interface BaseTableParams {
  title: string;
  columns: Array<object>;
  data: Array<object>;
  actions: Array<Action>;
  editable: any;
  options: any;
  children: any;
}

const BaseTable = (
  {
    title,
    columns,
    data,
    actions,
    editable,
    options,
    children
  }: BaseTableParams,
  props: any
) => {
  let toggleAllSelectsRef = useRef<HTMLButtonElement>(null);
  let toggleAllPinsRef = useRef<HTMLButtonElement>(null);

  const selectAllToggle = (e: React.MouseEvent) => toggleAllSelectsRef.current.click = () => selectAllAction
  const pinAllToggle = (e: React.MouseEvent) => toggleAllPinsRef.current.click = () => pinAllAction
  return (
    <div>
      {children}
      <MaterialTable
        title={title}
        columns={columns}
        data={data}
        actions={actions}
        editable={editable}
        options={{
          ...options,
          paging: false,
          maxBodyHeight: "300px"
        }}
        localization={{
          header: {
            actions: (
              <React.Fragment>
                <CheckBoxSelectAllToggle
                  ref={toggleAllSelectsRef}
                  onClickHandler={selectAllToggle}
                  data={data}
                />
                <PinAllSelectToggle
                  ref={toggleAllPinsRef}
                  onClickHandler={pinAllToggle}
                  data={data}
                />
              </React.Fragment>
            )
          }
        }}
      />
    </div>
  );
};

export default BaseTable;
