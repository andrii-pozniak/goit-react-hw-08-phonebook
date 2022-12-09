import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFilter } from "Redux/filterSlice";

import { StyleLabel, StyleInput} from "./Filter.Style"


export const Filter = ({value}) => {
  const dispatch = useDispatch();
  
  const changeFilter = evt => {
    const filters = evt.currentTarget.value
    
    console.log({filters})
  dispatch(setFilter(filters))
  };
  
  return    <>
      <StyleLabel>Find contact by name</StyleLabel>
    <StyleInput type='text' value={value} onChange={changeFilter}></StyleInput>
    
    </>
  
};

Filter.prototypes = {
  value: PropTypes.string.isRequired, 
  onChange: PropTypes.node.isRequired,
}
    
   
