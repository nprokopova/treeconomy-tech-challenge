import React from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { useState } from 'react';

const StyledMuiCard = styled(MuiCard)
({
    width: 280, 
    margin: '0 20px',
    outline: 'none',
    boxShadow: 'none',
    height: '225px'
});

const StyledButton = styled(Button)
({
    borderRadius: '30px',
    height: '23px',
    width: '92px',
    fontSize: '0.8rem',
    textTransform: 'none',
    boxShadow: 'none',
    fontWeight: 600,
    color: 'white'
});

const StyledCardContent = styled(CardContent)
({
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    padding: '5px 0px'
});

const StyledContainer = styled(Container)
({
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignItems: 'flex-end', 
    height: '45px', 
    paddingTop: '7px'
});

const Card = (props) => {
    const [purchased, setPurchased] = useState(false);

    const formatDate = (timestamp) => {
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
        const date = new Date(timestamp);
        return `${date.getDate()}th ${months[date.getMonth()]} ${date.getFullYear()}`
    }
    const capitaliseWords = (string) => {
        return string.split(" ").map((word) => { 
            return word[0].toUpperCase() + word.substring(1); 
        }).join(" ");
    }

    return (
    <StyledMuiCard >
        <CardMedia
          component="img"
          height="150"
          src={props.image}
          sx={{borderRadius: '10px'}}
        />

        <StyledCardContent>
            
            <Container >
                <Typography gutterBottom variant="p" component="div" sx={{marginBottom: 0, fontFamily: 'Exo 2', fontSize: '20px'}}>
                   {capitaliseWords(props.name)}
                </Typography>
                <StyledButton color={purchased ? 'secondary' : 'primary'} variant='contained' onClick={()=>setPurchased(!purchased)}>
                    {purchased ? 'Purchased' : 'Purchase'}
                </StyledButton>
            </Container>

            <StyledContainer>
                <Typography variant="body2" sx={{fontWeight: 600}}>
                    {props.credits} credits
                </Typography>
                <Typography variant="body2">
                    {formatDate(props.date)}
                </Typography>
          </StyledContainer>

        </StyledCardContent>
    </StyledMuiCard>
    )
}

export default Card;