import { Box, Button, Container, Stack, Typography } from "@mui/material";
import classes from "./HeroSection.module.css";
import HeroImage from "@src/assets/homeBackground.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ImageCarousel from "@components/shared/ImageCarousel";
import glasses from "@src/assets/about3.png";
import watches from "@src/assets/about2.png";
import useCarouselSlides from "@src/screens/hooks/useCarouselSlides";

export default function HeroSection() {
  const { carousalData } = useCarouselSlides();
  const data = carousalData?.carouselSlides;

  return (
    <Container>
      <ImageCarousel>
        <Box
          className={classes.heroSection}
          sx={{
            height: {
              xs: "200px",
              sm: "250px",
              md: "400px",
            },
          }}
        >
          <img src={HeroImage} alt="Hero" />
          <Stack
            direction="column"
            className={classes.heroText}
            justifyContent="space-between"
            sx={{
              padding: {
                xs: "8px 20px 12px",
                sm: "8px 30px 12px",
                md: "20px 40px 12px",
                lg: "24px 48px 16px",
              },
              height: {
                xs: "120px",
                sm: "150px",
                md: "250px",
                lg: "300px",
              },
              width: {
                xs: "65% ",
                sm: "55%",
              },
            }}
          >
            <Stack spacing={2} alignItems="start">
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "30px",
                    md: "50px",
                    lg: "60px",
                  },
                  fontWeight: "bold",
                  color: "var(--primary)",
                }}
              >
                Carry your Funk
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "16px",
                    md: "24px",
                    lg: "28px",
                  },
                  fontWeight: "500",
                  color: "var(--primary)",
                  textAlign:"left"
                }}
              >
                Trendy handbags collection for your party animal
              </Typography>
            </Stack>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={
                <ArrowForwardIcon
                  sx={{
                    width: {
                      xs: "12px",
                      sm: "16px",
                    },
                  }}
                />
              }
              sx={{
                width: "fit-content",
                padding: {
                  xs: "2px 8px",
                  sm: "8px 24px",
                  md: "8px 32px",
                  lg: "8px 38px",
                },
                fontSize: {
                  xs: "8px",
                  md: "14px",
                  lg: "16px",
                },
              }}
            >
              See More
            </Button>
          </Stack>
        </Box>
        <Box
          className={classes.heroSection}
          sx={{
            height: {
              xs: "200px",
              sm: "250px",
              md: "400px",
            },
          }}
        >
          <img src={glasses} alt="Glasses" />
          <Stack
            direction="column"
            className={classes.heroText}
            justifyContent="space-between"
            sx={{
              padding: {
                xs: "8px 20px 12px",
                sm: "8px 30px 12px",
                md: "20px 40px 12px",
                lg: "24px 48px 16px",
              },
              height: {
                xs: "120px",
                sm: "150px",
                md: "250px",
                lg: "300px",
              },
              width: {
                xs: "65% ",
                sm: "55%",
              },
            }}
          >
            <Stack spacing={2} alignItems="start">
            <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "30px",
                    md: "50px",
                    lg: "60px",
                  },
                  fontWeight: "bold",
                  color: "var(--primary)",
                }}
              >
                Carry your Funk
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "16px",
                    md: "24px",
                    lg: "28px",
                  },
                  fontWeight: "500",
                  color: "var(--primary)",
                  textAlign:"left"
                }}
              >
                Trendy handbags collection for your party animal
              </Typography>
            </Stack>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={
                <ArrowForwardIcon
                  sx={{
                    width: {
                      xs: "12px",
                      sm: "16px",
                    },
                  }}
                />
              }
              sx={{
                width: "fit-content",
                padding: {
                  xs: "2px 8px",
                  sm: "8px 24px",
                  md: "8px 32px",
                  lg: "8px 38px",
                },
                fontSize: {
                  xs: "8px",
                  md: "14px",
                  lg: "16px",
                },
              }}
            >
              See More
            </Button>
          </Stack>
        </Box>
        <Box
          className={classes.heroSection}
          sx={{
            height: {
              xs: "200px",
              sm: "250px",
              md: "400px",
            },
          }}
        >
          <img src={watches} alt="Glasses" />
          <Stack
            direction="column"
            className={classes.heroText}
            justifyContent="space-between"
            sx={{
              padding: {
                xs: "8px 20px 12px",
                sm: "8px 30px 12px",
                md: "20px 40px 12px",
                lg: "24px 48px 16px",
              },
              height: {
                xs: "120px",
                sm: "150px",
                md: "250px",
                lg: "300px",
              },
              width: {
                xs: "65% ",
                sm: "55%",
              },
            }}
          >
            <Stack spacing={2} alignItems="start">
            <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "30px",
                    md: "50px",
                    lg: "60px",
                  },
                  fontWeight: "bold",
                  color: "var(--primary)",
                }}
              >
                Carry your Funk
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: {
                    xs: "10px",
                    sm: "16px",
                    md: "24px",
                    lg: "28px",
                  },
                  fontWeight: "500",
                  color: "var(--primary)",
                  textAlign:"left"
                }}
              >
                Trendy handbags collection for your party animal
              </Typography>
            </Stack>
            <Button
              variant="contained"
              className={classes.button}
              startIcon={
                <ArrowForwardIcon
                  sx={{
                    width: {
                      xs: "12px",
                      sm: "16px",
                    },
                  }}
                />
              }
              sx={{
                width: "fit-content",
                padding: {
                  xs: "2px 8px",
                  sm: "8px 24px",
                  md: "8px 32px",
                  lg: "8px 38px",
                },
                fontSize: {
                  xs: "8px",
                  md: "14px",
                  lg: "16px",
                },
              }}
            >
              See More
            </Button>
          </Stack>
        </Box>
      </ImageCarousel>
    </Container>
  );
}
