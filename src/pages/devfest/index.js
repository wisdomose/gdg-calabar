import { Button, Typography, Container, Box } from "@mui/material";
import {} from "@mui/system";
import NavBar from "../../layout/navbar";
import Page from "../../layout/page";

export default function Devfest() {
  return (
    <Page>
      <NavBar />

      <Container
        maxWidth="lg"
        sx={{
          minHeight: "calc(100vh - 70px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h3" sx={{ color: "#ffffff" }}>
          Be a part of Devfest 2022
        </Typography>

        <Typography sx={{ maxWidth: "700px", color: "#ffffff" }}>
          DevFest is an annual decentralized tech conference hosted by Google
          Developer Groups across the globe. This year, DevFest is an
          opportunity to explore how Google’s suite of developer tools can
          expand the impact of local tech professionals and developers, rebuild
          our local community and reconnect with friends.
        </Typography>

        <Box>
          <Button
            variant="contained"
            size="large"
            target="_blank"
            href="https://gdg.community.dev/events/details/google-gdg-calabar-presents-devfest-calabar-2022/"
            sx={{ marginTop: "24px" }}
          >
            RSVP today
          </Button>
        </Box>
      </Container>
    </Page>
  );
}
