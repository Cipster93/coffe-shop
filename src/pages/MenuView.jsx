import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../styles/MenuSection.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box className="menu-container">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className="menu-tabs"
        >
          <Tab label="Coffee Drinks" {...a11yProps(0)} />
          <Tab label="Tea & Infusions" {...a11yProps(1)} />
          <Tab label="Cold Drinks & Juices" {...a11yProps(2)} />
          <Tab label="Cakes & Pastries" {...a11yProps(3)} />
          <Tab label="Light Snacks / Breakfast" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Coffee Drinks
        </TabPanel>
        <TabPanel value={value} index={1}>
          Tea & Infusions
        </TabPanel>
        <TabPanel value={value} index={2}>
          Cold Drinks & Juices
        </TabPanel>
        <TabPanel value={value} index={3}>
          Cakes & Pastries
        </TabPanel>
        <TabPanel value={value} index={4}>
          Light Snacks / Breakfast
        </TabPanel>
      </Box>
  );
}
