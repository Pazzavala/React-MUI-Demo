import { Typography } from '@mui/material';

export const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4'>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6' component='h1'>
                h6 Heading
            </Typography>

            {/* h6 elements with digffent font wigtht and font size */}
            <Typography variant='subtitle1'>subtitile1 Heading</Typography>
            <Typography variant='subtitle2'>subtitile2 Heading</Typography>

            {/* Body text for paragraphs body1 is default of variant */}
            <Typography variant='body1' gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                libero, sit aperiam voluptas consectetur cumque illum beatae
                neque dicta excepturi quos? Suscipit ex placeat eum impedit
                facere temporibus. Quos, recusandae.
            </Typography>
            <Typography variant='body2'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus veritatis atque rerum ratione nesciunt, eligendi
                magnam vel quia voluptatum voluptates debitis totam, in nobis
                libero qui. Illo possimus distinctio cupiditate?
            </Typography>
            <Typography variant='button' display='block' gutterBottom>
                button text
            </Typography>
            <Typography variant='caption' display='block' gutterBottom>
                caption text
            </Typography>
            <Typography variant='overline' display='block' gutterBottom>
                overline text
            </Typography>
        </div>
    );
};
