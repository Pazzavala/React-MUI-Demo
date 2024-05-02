import { Button, IconButton, Stack } from '@mui/material';
// import { DeleteIcon, SendIcon } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export const MuiButton = () => {
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button variant='text' href='https://google.com'>
                    Text
                </Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outline</Button>
            </Stack>
            <Stack spacing={2} direction='row'>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => alert('clicked')}
                    disableElevation
                >
                    primary
                </Button>
                <Button variant='contained' color='secondary'>
                    secondary
                </Button>
                <Button variant='contained' color='error'>
                    Error
                </Button>
                <Button variant='contained' color='warning'>
                    warning
                </Button>
                <Button variant='contained' color='info'>
                    info
                </Button>
                <Button variant='contained' color='success'>
                    success
                </Button>
            </Stack>
            <Stack display={'block'} spacing={2} direction={'row'}>
                <Button variant='contained' size='small'>
                    small
                </Button>
                <Button variant='contained' size='medium'>
                    medium
                </Button>
                <Button variant='contained' size='large'>
                    large
                </Button>
            </Stack>
            <Stack direction='row' spacing={2}>
                <Button variant='outlined' startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant='contained' endIcon={<SendIcon />}>
                    Send
                </Button>
                <IconButton aria-label='send'>
                    <SendIcon></SendIcon>
                </IconButton>
                <IconButton>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
            </Stack>
        </Stack>
    );
};
