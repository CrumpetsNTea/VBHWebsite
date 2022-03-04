import "./Projects.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { CardActions, Button, CardActionArea } from "@mui/material";
import SLS from "../../images/SLS.png";

const Projects = () => {
  // array of project objects - so when we want to add a project to the projects page just add it to the array with the information
  const projects = [
    {
      name: "Secret Lurry Society",
      image: SLS,
      description:
        "An NFT collection and DApp built on the Ethereum Blockchain. Connect with a MetaMask wallet that is connected to the Rinkeby Testnet and mint a lurry!",
      github: "https://github.com/CrumpetsNTea/Lurry-Contract-Website",
      website: "https://secretlurrysociety.eth.link/",
    },
  ];

  return (
    <div>
      <h1 className="title">Our Projects</h1>
      <div className="projects">
        <Container sx={{ py: 8, ml: 2 }} maxWidth="md">
          <Grid
            container
            spacing={{ xs: 10, sm: 9, md: 8 }}
            columns={{ xs: 10, sm: 9, md: 8 }}>
            <Grid item xs={6} sm={5} md={4}>
              {projects.map((project) => {
                return (
                  <Card sx={{ maxWidth: 345 }}>
                    <a href={project.website} id="postlink">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          height="170"
                          image={project.image}
                          alt={project.name}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography gutterBottom variant="h5" component="div">
                            {project.name}
                          </Typography>
                          <Typography color="text.secondary">
                            {project.description}
                          </Typography>
                        </CardContent>
                        <CardActions>
                          {project.website ? (
                            <Button
                              size="small"
                              variant="contained"
                              href={project.website}>
                              Website
                            </Button>
                          ) : null}

                          <Button
                            size="small"
                            variant="contained"
                            href={project.github}>
                            Github
                          </Button>
                        </CardActions>
                      </CardActionArea>
                    </a>
                  </Card>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Projects;
