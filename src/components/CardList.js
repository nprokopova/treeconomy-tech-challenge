import Grid from '@mui/material/Grid';
import Card from './Card';
import { useApiFetch } from '../util/util';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system'; 

const StyledGrid = styled(Grid)
({
    width: 'fit-content',
    margin: '20px',
});

const CardList = (props) => {
    const { data, isLoading, error } = useApiFetch(props.url);

    if (isLoading) {
        return <Typography variant='p' sx={{marginLeft: '40px'}}>Loading...</Typography>;
    }

    if (error) {
        return <Typography variant='p' sx={{marginLeft: '40px'}}>Error: {error.message}</Typography>;
    }
    
    const sortData = (data) => {
        return data.sort((a, b) => a.start_date - b.start_date)
    }

    return (
        <StyledGrid container={true} gap={5}>
            {data 
            ? sortData(data).map(project => <Card key={project.id} name={project.name} image={project.image} credits={project.available_credits} date={project.start_date} />) 
            : <Typography variant='p'>No data available</Typography>
            }
        </StyledGrid>
    )
}

export default CardList;