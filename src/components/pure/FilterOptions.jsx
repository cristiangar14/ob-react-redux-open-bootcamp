import React from "react";
import FilterContainer from "../containers/FilterContainer";

const FilterOptions = () => {
  
  return (
    <div className="filters">
        {/* Filter Container */}
        <FilterContainer filter='SHOW_ALL'>
            All
        </FilterContainer>
        <FilterContainer filter='SHOW_ACTIVE'>
            ACTIVE
        </FilterContainer>
        <FilterContainer filter='SHOW_COMPLETED'>
            COMPLETED
        </FilterContainer>
    </div>
  );
};


export default FilterOptions;
