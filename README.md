import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { viratPNG } from '../assets';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[800] }} aria-label="recipe">
            RCB
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="NEVER GIVE UP "
        subheader="april 28/2022"
      />
      <CardMedia
        component="img"
        height="194"
        img src={viratPNG}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          RCB(*Royal Challengers Bangalore*) are a franchise cricket team based in Bangalore, Karnataka, 
          that plays in the Indian Premier Leagu. This is the only team who has lots of fan base @IPL ,
          and The king kohli is the only man who stayed @RCB till the current play of IPL. 
           From starting of IPL,RCB din't won a Trophy but Fan's are always with RCB forever,
           @2021 there was an 'Heart break News for RCB Fans' King kohli steps down from RCB captaincy
           as the most successful skipper in the longest format of the game for RCB and fourth overall..
           along with this sad news there was another Heart break for RCB fan where AB de Villiers(mr 360)
          announced his retirement on 19 November 2021 From Indian Premier League ( after14th edition of Indian Premier League)
           <div>
            "IF your an RCB Fan"
            </div>
            <div>

            'Like,share';
            
            </div>
          
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>**RECORDS OF TEAM RCB**</Typography>
          <Typography paragraph>
            *RCB has created and smashed many record where the lowest score in IPL is scored by RCB,
            Highest score was scored by RCB,Highest partnership was among RCB.
            &Highest individual scorer,orange cap was holded by RCB player;
          </Typography>
          <Typography paragraph>
              *Highest Score list of Team RCB*
              <div>
              <div>
              :ON 23 April 2013 @M. Chinnaswamy Stadium, Bangalore, India RCB scored 263/5 against pwi.
              </div>
              <div>
              :ON 14 May   2016 @M. Chinnaswamy Stadium, Bangalore, India RCB scored 248/3 against GL.
              </div>	
              <div>
              :ON 10 May   2015 @Wankhede Stadium, Mumbai, India, India RCB scored 235/1 against MI.
              </div>
              <div>
              :ON 12 April 2016 @M. Chinnaswamy Stadium, Bangalore, India RCB scored 227/4 against SRH.
              </div>
              <div>
              :ON 6 May 2015 @M. Chinnaswamy Stadium, Bangalore, India RCB scored 226/3 against PBKS.
              </div>    
              </div>                                                             
          </Typography>
          <Typography paragraph>
            *Lowest Score list of Team RCB*
            
            <div>
            <div>
            :ON 23 April 2017 @Eden Gardens, Kolkata, India	team RCB was knocked for 49 against KKR.
            </div>
            <div>
            :ON 23 April 2022 @Brabourne Stadium, Mumbai, India	team RCB was knocked for 68 against SRH.
            </div>
            <div>
            :ON 26 April 2014 @Sheikh Zayed Stadium, Abu Dhabi, UAE	team RCB was knocked for 70 against RR.
            </div>
            <div>
            :ON 23 March 2019 @M. A. Chidambaram Stadium, Chennai, India	team RCB was knocked for 70 against CSK.
            </div>
            <div>
            :ON 18 April 2008 @M. Chinnaswamy Stadium, Bangalore, India	team RCB was knocked for 82 against KKR.
            </div>
            </div>
          </Typography>
          <Typography>
           WE don't knew wheather RCB is gonna lift a Trophy but this team is always special among other Team's 
           Fans NEVER give up hope on RCB winning a Trophy  every year fan encourage team with energy and say....
          .....(WIN OR LOSE RCB FOREVR)         **'Esala cup Namde'**
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
