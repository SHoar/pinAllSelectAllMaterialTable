import React from "react";
import Table1 from "./Table1";
import Table2 from "./Table2";
import Table3 from "./Table3";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    />
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setActiveTab(newValue);
  };

  return (
    <div>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Table 1" {...a11yProps(0)} />
            <Tab label="Table 2" {...a11yProps(1)} />
            <Tab label="Table 3" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          Table 1
        </TabPanel>
        <TabPanel value={value} index={1}>
          Table 2
        </TabPanel>
        <TabPanel value={value} index={2}>
          Table 3
        </TabPanel>
      </div>
      {activeTab === 0 && <Table1 />}
      {activeTab === 1 && <Table2 />}
      {activeTab === 2 && <Table3 />}
    </div>
  );
}
