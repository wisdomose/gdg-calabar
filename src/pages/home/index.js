import { Box, Button, Container, Typography } from "@mui/material";
import NavBar from "../../layout/navbar";

export default function Home() {
  return (
    <>
      <NavBar isHome={true} />
      <Box
        sx={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0, 0,0,0.1), rgba(0, 0,0,0.5)), url('https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_xy_center,h_650,q_auto:good,w_1440,x_w_mul_0.5,y_h_mul_0.0/v1/gcs/platform-data-goog/event_banners/Copy%20of%20Google%20Sites%20Banner_MgARgPn.jpg?md')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px",
        }}
      >
        {/* <Box component="section"> */}
        <Typography
          component="h1"
          variant="h3"
          sx={{
            color: "#ffffff",
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          Calabar. December 09, 2022 Join the commuity, learn new things!
        </Typography>

        {/* </Box> */}
        <Button
          variant="contained"
          size="large"
          href="https://gdg.community.dev/events/details/google-gdg-calabar-presents-devfest-calabar-2022/"
          target="_blank"
          sx={{ marginTop: "16px" }}
        >
          RSVP today
        </Button>
      </Box>

      <Container>
        <Box
          as="section"
          sx={{
            my: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* heading */}
          <Typography variant="h3">Sponsors</Typography>

          {/* description */}
          <Typography
            component="p"
            maxWidth="md"
            sx={{
              mt: 2,
              textAlign: "center",
              color: "#000000",
            }}
          >
            The mission is to provide a learning professional with ways to share
            kinowledge and expertise. To accomplish this mission we serve as a
            catalyst for discussion, learning and motivation. We need your
            collaboration to make this event the best it can be
          </Typography>

          {/* be a sponsor button */}
          <Button
            variant="contained"
            target="_blank"
            href="https://gdg.community.dev/events/details/google-gdg-calabar-presents-devfest-calabar-2022/"
            size="large"
            sx={{ marginTop: "16px" }}
          >
            Be a sponsor
          </Button>
        </Box>
      </Container>
    </>
  );
}
