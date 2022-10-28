import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import NavBar from "../../layout/navbar";
import Page from "../../layout/page";

const events = [
  {
    date: "JUN 17, 2022",
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/IOE22-Bevy-Thumbnail-1080x1080-Default%20%281%29_eTPTR3c.png",
    event: "IO Extended Calabar 2022",
  },
  {
    date: "APR 29, 2022",
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/wtm-iwd22-bevy-icon%402x_9fUO12C.png",
    event: "IWD Calabar 2022",
  },
  {
    date: "MAR 18, 2022",
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/event_banners/Copy%20of%20DevFest2021-EventThumbnail_oxOuRYe.png",
    event: "Flutter Festival Calabar",
  },
  {
    date: "JUN 25, 2021",
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/event_banners/GoogleIO_Extended_Bevy_EventThumb.png",
    event: "IO Extended Calabar 2021",
  },
  {
    date: "MAR 27, 2021",
    img: "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-goog/events/birds_XMIwN9r.png",
    event: "Flutter Engage Extended Calabar 2021",
  },
];

export default function Speaker() {
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
            Events
          </Typography>
        </Container>
      </Page>

      <Container maxWidth="md" sx={{ my: 10 }}>
        <Typography variant="h3">Upcoming Events</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            mt: 5,
          }}
        >
          <Box
            sx={{
              borderRadius: "100%",
              maxWidth: 100,
              maxHeight: 100,
              overflow: "hidden",
              mr: 5,
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Avatar
              src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_150,q_auto:good,w_150/v1/gcs/platform-data-goog/events/DF22-Bevy-EventThumb_85PqHK7.png"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></Avatar>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
              OCT 29, 2022
            </Typography>
            <Typography sx={{ mt: 2 }}>
              DevFest is an annual decentralized tech conference hosted by
              Google Developer Groups across the globe. This year, DevFest is an
              opportunity to explore how Google’s suite of developer tools can
              expand the impact of local tech professionals and developers,
              rebuild our local community and reconnect with friends.
            </Typography>
            <Button size="large" variant="contained" sx={{ mt: 3 }}>
              RSVP
            </Button>
          </Box>
        </Box>

        <Typography variant="h3" sx={{ mt: 20, mb: 10 }}>
          Previous Events
        </Typography>

        <Grid2 container spacing={8}>
          {events.map((event) => (
            <Event key={event.name} {...event} />
          ))}
        </Grid2>
      </Container>
    </Box>
  );
}

function Event({ date, img, event }) {
  return (
    <Grid2 xs={12} sm={3}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          src={img}
          sx={{ width: 100, height: 100, objectFit: "cover", mb: 2 }}
        ></Avatar>
        <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
          {date}
        </Typography>
        <Typography sx={{ mt: 1, textAlign: "center  " }}>{event}</Typography>
      </Box>
    </Grid2>
  );
}
