import { Box, Button, Typography } from "@mui/material";
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
          variant="h4"
          sx={{
            color: "#ffffff",
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          Calabar. December 09, 2022 Join the commuity, learn new things!
        </Typography>

        {/* </Box> */}
        <Button variant="contained" size="large" sx={{ marginTop: "16px" }}>
          RSVP today
        </Button>
      </Box>
    </>
  );
}
