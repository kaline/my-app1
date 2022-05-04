
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Home.css"

export default props => {
    return (
      <div style={{ display: "flex", flexWrap: "wrap",  justifyContent: 'space-between' }}>

<Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="140"
        image="https://www.westconcomstor.com/content/dam/wcgcom/Global/Cloud/Vendors/Microsoft/Azure/Azure%20cloud.png"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cloud
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Microsoft Three Clouds - Azure, Dynamics 365, Microsoft 365 | Cambay.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="140"
        image="https://softeng.blob.core.windows.net/softengpublish/invar/085585c3-f776-471f-b546-3e488be5316b"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Machine Learning
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Azure Machine Learning is a cloud service for accelerating and managing the machine learning project lifecycle.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        component="img"
        height="140"
        image="https://i1.wp.com/smarttechguys.com/wp-content/uploads/2020/05/microsoft-ai.jpg?fit=1366%2C768&ssl=1"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          AI
        </Typography>
        <Typography variant="body2" color="text.secondary">
         JARVIS (Joint AI Research for Video Instances and Streams) is 
          an AI-powered video analytics tool aimed towards enhancing security, 
          safety & compliance. By default, Jarvis works with Azure AD.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

      </div>
     
    );
  };