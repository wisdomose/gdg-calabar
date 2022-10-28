import { Button, Container, Typography } from "@mui/material";
import NavBar from "../../layout/navbar";
import Page from "../../layout/page";

export default function Speaker() {
  return (
    <Page>
      <NavBar />
      <Container
        sx={{
          minHeight: "calc(100vh - 70px)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h3"
          sx={{
            color: "#ffffff",
            maxWidth: "500px",
            textAlign: "center",
          }}
        >
          A call for speakers
        </Typography>
        <Typography
          component="p"
          sx={{
            maxWidth: "700px",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          The mission is to provide a learning professional with ways to share
          kinowledge and expertise. To accomplish this mission we serve as a
          catalyst for discussion, learning and motivation. We need your
          collaboration to make this event the best it can be
        </Typography>

        {/* </Box> */}
        <Button
          variant="contained"
          target="_blank"
          href="https://gdg.community.dev/events/details/google-gdg-calabar-presents-devfest-calabar-2022/"
          size="large"
          sx={{ marginTop: "16px" }}
        >
          Reserve
        </Button>
      </Container>
    </Page>
  );
}
