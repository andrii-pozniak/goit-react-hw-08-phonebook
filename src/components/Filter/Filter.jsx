import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFilter } from "Redux/contacts/filterSlice";
import { Text, Input, Stack, Box, Container } from '@chakra-ui/react';


// import { StyleLabel, StyleInput} from "./Filter.Style"


export const Filter = ({value}) => {
  const dispatch = useDispatch();
  
  const changeFilter = evt => {
    const filters = evt.currentTarget.value
    
    console.log(filters)
  dispatch(setFilter(filters))
  };
  
  return    <>
  <Box w={'90%'} py='3'>
    <Container>
    <Stack spacing={2}>
    <Text>Find contact by name</Text>
    <Input w={'50%'} type='text' value={value} onChange={changeFilter}/>
    </Stack>
    </Container>
   
  </Box>
     
    </>
  
};

Filter.prototypes = {
  value: PropTypes.string.isRequired, 
  onChange: PropTypes.node.isRequired,
}
    
   
