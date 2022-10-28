import { Box } from "@mui/material";

export default function Page({ children }) {
  return (
    <Box
      sx={{
        paddingTop: "70px",
        backgroundImage:
          "linear-gradient(rgba(0, 0,0,0.8), rgba(0, 0,0,0.6)), url('https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_xy_center,h_650,q_auto:good,w_1440,x_w_mul_0.5,y_h_mul_0.0/v1/gcs/platform-data-goog/event_banners/Copy%20of%20Google%20Sites%20Banner_MgARgPn.jpg?md')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </Box>
  );
}
