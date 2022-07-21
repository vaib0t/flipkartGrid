/* Library import */
import {useState,useEffect} from 'react';
import * as React from 'react';
/* Dependency import */
import './css/AddingProduct.css';

/* Component import */

/* Asset imports */
import { FormControl, Input, InputLabel, FormLabel, FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AddingProduct(){
    const [name, setName] = useState("");
    const [value, setValue] = useState(null);
    const [validityFrom, setvalidityFrom] = useState(null);
    const handleSubmit = (event) =>{
        event.preventDefault();
        alert('hello' + {name});
        console.log(event.target.name.value);
    }
    return(
        <div className='AddingProduct'>
        <h1>Add Product</h1>
        <Box
            className='Box'
            component = "form"
            sx={{
                '& .MuiTextField-root': { m: 1 },
            }}
            onSubmit = {handleSubmit}
            noValidate
            autoComplete="off"
        >
        <div>
            <TextField
                required
                fullWidth
                id = "name"
                value = {name}
                label="Product Name"
                defaultValue="Product Name"
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                id = "description"
                label = "Description of Product"
                multiline
                fullWidth
                rows={6}
            />
            <TextField
                id = "Amount"
                fullWidth
                label="Amount"
                InputProps={
                    {
                        startAdornment:(
                            <InputAdornment position="start">
                                <CurrencyBitcoinIcon/>
                            </InputAdornment>
                        )
                    }
                }
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Validity From"
                value={value}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Validity to"
                value={validityFrom}
                onChange={(newValue) => {
                setvalidityFrom(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
            </LocalizationProvider>
            <br></br>
            <Button className="addButton" variant="contained" startIcon={<AddIcon/>}>
                Add Product
            </Button>
        </div>

        </Box>
        {/* <form onSubmit={handleSubmit}>
            <label> Enter your name:
                <input
                    type = "text"
                    id="name1"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    id='name2'
                />
            </label>
            <button type='submit'>submit</button>
        </form> */}
        </div>
    );
}

export default AddingProduct;