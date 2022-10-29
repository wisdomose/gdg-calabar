import { Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import NavBar from "../../layout/navbar";

export default function Home() {
  return (
    <>
      <NavBar isHome={true} />
      <Box
        sx={{
          height: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0, 0,0,0.1), rgba(0, 0,0,0.1)), url('https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_xy_center,h_650,q_auto:good,w_1440,x_w_mul_0.5,y_h_mul_0.0/v1/gcs/platform-data-goog/event_banners/Copy%20of%20Google%20Sites%20Banner_MgARgPn.jpg?md')",
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
      ></Box>

      <Box
        sx={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 24,
        }}
      >
        {/* <Box component="section"> */}
        <Typography
          component="h1"
          variant="h3"
          sx={{
            color: "#000000",
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          Devfest Calabar.
          <br />
          December 09, 2022 Join the commuity, learn new things!
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

      {/* sponsor */}

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 20,
        }}
      >
        {/* heading */}
        <Typography variant="h3" sx={{ mb: 10 }}>
          Sponsors
        </Typography>

        <Grid2 container spacing={{ xs: 2, sm: 8 }}>
          <Grid2 sm={6}>
            <Box sx={{ position: "relative" }}>
              <img
                src="https://img.freepik.com/free-photo/closeup-diverse-people-joining-their-hands_53876-96081.jpg?w=900&t=st=1667047473~exp=1667048073~hmac=e7902ba8b9b8dc0168120bd07d887c404240c28a0beae211be13906e83bba343"
                // src="https://img.freepik.com/free-vector/business-conference-illustration-with-speaker-stage-audience-cartoon-characters-scientific-presentation-academic-symposium-professional-briefing_575670-644.jpg?w=740&t=st=1666968844~exp=1666969444~hmac=b498dc0ad678b0be113b53a717c4297b7b6ab601e13e077e99a66f51e8a24ce3"
                style={{ width: "100%", height: "100%" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  filter: "blur(10px)",
                  background: "rgba(10,10,10,0.2)",
                  // opacity: 0.1,
                }}
              ></Box>
            </Box>
          </Grid2>
          <Grid2 sm={6} sx={{ padding: 0 }}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              {/* description */}
              <Typography
                component="p"
                maxWidth="md"
                sx={{
                  color: "#000000",
                }}
              >
                The mission is to provide a learning professional with ways to
                share kinowledge and expertise. To accomplish this mission we
                serve as a catalyst for discussion, learning and motivation. We
                need your collaboration to make this event the best it can be
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
          </Grid2>
        </Grid2>
      </Container>

      {/* speaker */}

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 10,
        }}
      >
        {/* heading */}
        <Typography variant="h3" sx={{ mb: 10 }}>
          Speakers
        </Typography>

        <Grid2 container spacing={{ xs: 2, sm: 8 }}>
          <Grid2 sm={6}>
            <Box sx={{ position: "relative" }}>
              <img
                src="https://miro.medium.com/max/720/0*07rSGHV8VeHVngnv"
                style={{ width: "100%", height: "100%" }}
              />

              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  filter: "blur(10px)",
                  background: "rgba(10,10,10,0.2)",
                }}
              ></Box>
            </Box>
          </Grid2>
          <Grid2 sm={6} sx={{ padding: 0 }}>
            <Box
              as="section"
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                justifyContent: "center",
              }}
            >
              {/* description */}
              <Typography
                component="p"
                maxWidth="md"
                sx={{
                  color: "#000000",
                }}
              >
                The mission is to provide a learning professional with ways to
                share kinowledge and expertise. To accomplish this mission we
                serve as a catalyst for discussion, learning and motivation. We
                need your collaboration to make this event the best it can be
              </Typography>

              {/* be a sponsor button */}
              <Button
                variant="contained"
                target="_blank"
                href="https://sessionize.com/devfest-calabar-2022"
                size="large"
                sx={{ marginTop: "16px" }}
              >
                I want to speak
              </Button>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
}
