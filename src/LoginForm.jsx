import React from 'react';

// todo JUST MAKE SURE WE'RE IMPORTING ... from '@mui/material'

import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button
} from '@mui/material';

const styles = {
    paper: {
        width: "15rem", 
        padding: "10rem",
        marginLeft: "auto",
        marginRight: "auto"
    },
    input: {
        marginBottom: "1rem"
    },
    button: {
        width: "100%"
    }
}
export default function LoginForm() {
    return (
        <Paper elevation={20} style={styles.paper}>
            <h2>Login Form</h2>
            <form>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Username</InputLabel>
                    <OutlinedInput type="text"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>E-mail</InputLabel>
                    <OutlinedInput type="email"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <FormControl variant="outlined" style={styles.input}>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput type="password"/>
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                    Register
                </Button>
            </form>
        </Paper>
    )
}

