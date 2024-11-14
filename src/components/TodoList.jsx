import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const TodoList = ({ todoItem }) => {
    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            mt={4} 
        >
            <Paper 
                elevation={3} 
                sx={{
                    width: '900px',
                    padding: '4px',
                    backgroundColor: todoItem.completed ? 'success.light' : 'warning.light',
                    color: todoItem.completed ? 'success.contrastText' : 'warning.contrastText',
                    textAlign: 'left'
                }}
            >
                <Typography variant="h6" gutterBottom>
                    {todoItem.title}
                </Typography>
                <Typography variant="body1">
                    {todoItem.completed ? 'Completed' : 'Not Completed'}
                </Typography>
            </Paper>
        </Box>
    );
};

export default TodoList;
