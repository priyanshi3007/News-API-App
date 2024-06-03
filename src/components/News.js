
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, Typography, CardActions, Button, CircularProgress, Fade } from '@mui/material';
import './News.css';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = 'c9a3e7d09df34fb8b8bc4594e6279022'; 

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`);
        setArticles(response.data.articles.slice(0, 5));
        setLoading(false);
      } catch (error) {
        setError('Unable to fetch news at this time. Please try again later.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Latest News Headlines
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <Grid container spacing={4} className="news-container">
          {articles.map((article, index) => (
            <Fade in={true} key={index} timeout={1000 + index * 500}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className="news-card">
                  <CardContent>
                    <Typography variant="h5" component="h2" className="news-title">
                      {article.title}
                    </Typography>
                    <Typography color="textSecondary" className="news-source">
                      Source: {article.source.name}
                    </Typography>
                    <Typography color="textSecondary" className="news-date">
                      Published on: {new Date(article.publishedAt).toLocaleDateString()}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" href={article.url} target="_blank" rel="noopener noreferrer">
                      Read more
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Fade>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default News;
