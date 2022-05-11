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
import {RCBJPG} from '../assets';
import { viratPNG } from '../assets';
import {chrishgayleJPG} from '../assets';
import { ABDEJPG } from '../assets';

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
    <div><ul> <li>  <Card sx={{ maxWidth: 345 }}>
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
        img src={RCBJPG}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          RCB(*Royal Challengers Bangalore*) are a franchise cricket team based in Bangalore, Karnataka, 
          that plays in the Indian Premier Leagu. This is the only team who has lots of fan base @IPL ,
          and RCB din't won a Trophy but Fan's are always with RCB forever,
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
    </li>
    <li>  <Card sx={{ maxWidth: 345 }}>
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
        title="THE UNIVERSE BOSS"
        subheader="may 06/2022"
      />
      <CardMedia
        component="img"
        height="194"
        img src={chrishgayleJPG}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Chris Gayle holds the record for the highest individual score in an Indian Premier League innings. 
        Donning the Royal Challengers Bangalore jersey in a match against Pune Warriors during IPL 2013, 
        Gayle played an incredible knock of 175 runs.         
          <div>
            "IF your Universe Boss Fan"
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
          <Typography paragraph>**RECORDS OF Universe Boss @ RCB**</Typography>
          <Typography paragraph>
          The left-handed batsman hit 13 fours and 17 maximums in his entertaining innings that lasted 66 balls. 
          Gayle's 175 runs helped RCB finish with 263/5 in 20 overs — the highest team total in IPL history.   
           </Typography>
          <Typography paragraph>
          😱 175 runs
          💥 17 sixes
          💯 in 30 balls

#In 2013 for @RCBTweets, Chris Gayle smashed the fastest-ever T20 hundred, the highest score in T20 history, 
and broke the record for most sixes in a T20 innings.

          </Typography>
          <Typography>
         
     That's why they call him the Universe Boss!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </li>
    <li>
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
        title="END OF ERA mr 360"
        subheader="may 06/2022"
      />
      <CardMedia
        component="img"
        height="194"
        img src={ABDEJPG}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        AB De Villiers marks the end of an Era after announcing his retirement from all forms of cricket. 
        The South African legend took social media to announce his retirement on Friday. 
        De Villiers retired from the international forms of cricket back in 2018.
         This time he chose to retire from all the forms of cricket.
          The 37-year-old cricketer was playing for Royal Challengers Bangalore franchise in IPL.
           Started playing in 2011, he was clearly one of the strongest backbones of the team.
            He supported and contributed for the team to reach 5 playoffs.       
          <div>
            "IF Fan of mr 360"
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
          <Typography paragraph>**RECORDS OF MR 360 @ RCB**</Typography>
          <Typography paragraph>
          AB De Villiers has scored 4491 runs for RCB in a total of 156 matches including 11 seasons( since 2011). 
          However, the 37-year old has also smashed 37 half-centuries and 2 centuries for RCB in the league.
           His average was near about 40 in the league with a whopping strike rate of 151.68.
            AB De Villiers’s highest score is 133* and that came against Mumbai Indians in the 2015 edition for RCB.  
           </Typography>
          <Typography paragraph>
          Matches Played: 156
          Runs Scored: 4491 runs
          Average: 39.70
          Strike Rate: 151.68
          50’s: 37
          100’s: 2
          Catches: 96
          Also, he is the second-highest run-scorer behind his RCB teammate, Virat Kohli. 
          He is the record holder for the second and the third-highest individual run total in the history of RCB as well.


          </Typography>
          <Typography>
         
     His shots were massive 360 degree and people's Namde him MR.360 !
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </li>
    <li>
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
        title="THE KING KOHLI "
        subheader="may 06/2022"
      />
      <CardMedia
        component="img"
        height="194"
        img src={viratPNG}
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Kohli has been a standout performer in the IPL, amassing the most runs in the tournament
        Is there a link between Virat Kohli and fantastic statistics? Probably not, because when his bat talks, 
        every other thing becomes insignificant. With his hunger for runs, Kohli, one of the most successful batters of the modern era, 
        has taken cricket to new heights.
           <div>
            "IF your Fan of king kohili"
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
          <Typography paragraph>**RECORDS KING kohili**</Typography>
          <Typography paragraph>
          Overall, Kohli has been a standout performer in the IPL, amassing the most runs in the tournament. He has 6,283 runs at an average of 37.39 in 207 IPL matches. 
          Kohli has scored 42 fifties and has the second-most hundreds (5). There are 546 fours and 210 sixes in total to his name. In 2016,
           he set a new record for the most runs in a single edition (973)
          </Typography>
          <Typography paragraph>
          The king kohli is the only man who stayed @RCB till the current play of IPL. 
           From starting of IPL,  Kohli wowed everyone with his leadership abilities. However, he was unable to complete the ultimate task of leading RCB to the title. 
          In total, he guided RCB in 140 games, winning 66 of them. RCB lost 70 games during this captaincy span, with four matches being rained out.                                                          
          </Typography>
                kohili is a kind and always a massive entertaining person so peoples call him as
                "THE KING VIRAT kohili" nick as"chikku"        
          <Typography>
         
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    </li>
     </ul></div>
     

  );
}
