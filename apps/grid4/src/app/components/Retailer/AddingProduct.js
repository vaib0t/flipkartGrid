/* Library import */
import {useState,useEffect} from 'react';

/* Dependency import */
import './css/AddingProduct.css';

/* Component import */

/* Asset imports */
import { FormControl, Input, InputLabel, FormLabel, FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AddingProduct(){

    return(
        <div className='AddingProduct'>
        <h1>Add Product</h1>
        <Box
            component = "form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
        <div>
            <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Product Name"
            />

        </div>

        </Box>
        </div>
    );
}

export default AddingProduct;