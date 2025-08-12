import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductCard from "../components/Card";
import menuData from "../data/products";
import "../styles/MenuStyles/MenuSection.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className="menu-tab-panel"
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
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

export default function MenuView() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Memorăm listele de carduri o singură dată folosind useMemo,
  // pentru a evita refacerea lor inutilă la fiecare render.
  // Array-ul gol [] semnifică că datele nu se schimbă, deci memo-ul rămâne valid.
  const coffeeCards = React.useMemo(() =>
    menuData.coffeeDrinks.map((product, index) => (
      <ProductCard key={index} product={product} />
    )), []
  );

  const teaCards = React.useMemo(() =>
    menuData.teaInfusions.map((product, index) => (
      <ProductCard key={index} product={product} />
    )), []
  );

  const coldDrinksCards = React.useMemo(() =>
    menuData.coldDrinks.map((product, index) => (
      <ProductCard key={index} product={product} />
    )), []
  );

  const cakesCards = React.useMemo(() =>
    menuData.cakesPastries.map((product, index) => (
      <ProductCard key={index} product={product} />
    )), []
  );

  const snacksCards = React.useMemo(() =>
    menuData.lightSnacks.map((product, index) => (
      <ProductCard key={index} product={product} />
    )), []
  );

  return (
    <Box className="menu-container">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Menu categories"
        className="menu-tabs"
      >
        <Tab label="Coffee Drinks" {...a11yProps(0)} />
        <Tab label="Tea & Infusions" {...a11yProps(1)} />
        <Tab label="Cold Drinks & Juices" {...a11yProps(2)} />
        <Tab label="Cakes & Pastries" {...a11yProps(3)} />
        <Tab label="Light Snacks & Breakfast" {...a11yProps(4)} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <div className="products-grid">{coffeeCards}</div>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <div className="products-grid">{teaCards}</div>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <div className="products-grid">{coldDrinksCards}</div>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <div className="products-grid">{cakesCards}</div>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <div className="products-grid">{snacksCards}</div>
      </TabPanel>
    </Box>
  );
}
