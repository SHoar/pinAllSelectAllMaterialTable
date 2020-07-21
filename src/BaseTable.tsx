import React, { useRef } from "react";
import MaterialTable from "material-table";
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
  let refA = useRef<HTMLButtonElement>();
  let refB = useRef<HTMLButtonElement>();

  const onClickHandler = (e: React.MouseEvent) => {
    this.refA.current.onClick = alert("hello world!");
  };
  // const node = this.refA.current;
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
                  ref={refA}
                  onClickHandler={onClickHandler}
                  data={data}
                />
                <PinAllSelectToggle
                  ref={refB}
                  onClickHandler={onClickHandler}
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
