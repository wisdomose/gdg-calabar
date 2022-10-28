import { FacebookSharp } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import NavBar from "../../layout/navbar";
import Page from "../../layout/page";

export default function Contact() {
  return (
    <Box>
      <Page>
        <NavBar />
        {/* events banner */}
        <Container
          sx={{
            minHeight: "300px",
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
            Contact Us
          </Typography>
        </Container>
      </Page>

      <Container maxWidth="md" sx={{ my: 10 }}>
        <Typography variant="h5">Follow us on Social media</Typography>

        <IconButton
          href="https://web.facebook.com/gdgcalabar"
          size="large"
          target="_blank"
        >
          <FacebookSharp color="primary" fontSize="large" />
        </IconButton>
      </Container>
    </Box>
  );
}
