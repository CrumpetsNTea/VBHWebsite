import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { LinearProgress } from "@mui/material";

import "./Blog.css";

const Blog = () => {
  const tobiasMediumURL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@t.botell";

  const connorMediumURL = "";

  const iouriMediumURL = "";

  const [tobiasBlog, setTobiasBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
  });

  const [connorBlog, setConnorBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
  });

  const [iouriBlog, setIouriBlog] = useState({
    item: [],
    isLoading: true,
    error: null,
  });

  // Get Tobias Articles
  useEffect(() => {
    fetch(tobiasMediumURL)
      .then((res) => res.json())
      .then((info) => {
        const blogs = info.items;

        setTobiasBlog({ item: blogs, isLoading: false });
      })
      .catch((err) => setTobiasBlog({ error: err.message }));
  }, []);

  // Get Connor Articles
  useEffect(() => {
    fetch(connorMediumURL)
      .then((res) => res.json())
      .then((info) => {
        const blogs = info.items;

        setConnorBlog({ item: blogs, isLoading: false });
      })
      .catch((err) => setConnorBlog({ error: err.message }));
  }, []);

  // Get Iouri Articles
  useEffect(() => {
    fetch(iouriMediumURL)
      .then((res) => res.json())
      .then((info) => {
        const blogs = info.items;

        setIouriBlog({ item: blogs, isLoading: false });
      })
      .catch((err) => setIouriBlog({ error: err.message }));
  }, []);

  // Convert article text to text rather than the html that is given by the JSON
  const ToText = (node) => {
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
  };

  return (
    <>
      <h1 className="title">Our Blog Posts</h1>
      <div className="blog-container">
        <div className="blogs">
          <Container sx={{ py: 8, ml: 2 }} maxWidth="md">
            <Grid
              container
              spacing={{ xs: 5, md: 7 }}
              columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={8} sm={8} md={8}>
                {tobiasBlog.isLoading ? (
                  <Box sx={{ width: "100%" }}>
                    <LinearProgress />
                  </Box>
                ) : (
                  tobiasBlog.item.map((post, index) => {
                    return (
                      <Card sx={{ maxWidth: 345 }} key={index}>
                        <a href={post.link} id="postlink">
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="140"
                              image={post.thumbnail}
                              alt="thumbnail"
                            />
                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h5"
                                component="div">
                                {post.title}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary">
                                {ToText(post.description).slice(0, 150) + "..."}
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </a>
                      </Card>
                    );
                  })
                )}
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Blog;
