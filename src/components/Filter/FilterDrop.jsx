import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "./filter-drop.scss";
import Arrow from "../../assets/images/filter-arrow.png";

// import { filterBy } from "@progress/kendo-data-query";
const allData = [
  {
    id: 1,
    text: "Newest first",
  },
  {
    id: 2,
    text: "Events",
  },
  {
    id: 3,
    text: "Old news",
  },
  {
    id: 4,
    text: "All",
  },
];
export const FilterDrop = () => {
  const [data, setData] = React.useState(allData.slice());
  const filterData = (filter) => {
    const data = allData.slice();
    // return filterBy(data, filter);
  };
  const filterChange = (event) => {
    setData(filterData(event.filter));
  };
  return (
    <div className="flexy flexyM">
      {/* <p>Filter</p> */}
      <img className="filter-arrow" src={Arrow} alt="Scholar" />{" "}
      <DropDownList
        data={data}
        textField="text"
        filterable={true}
        onFilterChange={filterChange}
      />
    </div>
  );
};
