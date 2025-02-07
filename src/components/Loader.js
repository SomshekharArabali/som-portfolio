import { React, useState, useEffect } from "react";
import { useTheme, styled } from "@mui/material";
import { motion } from "framer-motion";
import "animate.css";

//Component styles
const StyledLoaderContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
  position: "fixed",
  backgroundColor: theme.palette.background.main,
}));

//End Component styles

const pathVariants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeIn",
    },
  },
};

const Loader = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 5000);
  }, []);

  return (
    <StyledLoaderContainer>
      <div className={hasLoaded ? "animate__animated animate__fadeOut" : ""}>
      <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 64 64"
      initial={{ y: 0 }}
      animate={{
        y: [-10, 0, -10], // Moves up and down like a jump
      }}
      transition={{
        repeat: Infinity,
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <linearGradient id="gradient1" x1="32" x2="32" y1="57.5" y2="6.5" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#e6abff"></stop>
        <stop offset="1" stopColor="#6dc7ff"></stop>
      </linearGradient>
      <path
        fill="url(#gradient1)"
        d="M32,57.5C17.939,57.5,6.5,46.061,6.5,32S17.939,6.5,32,6.5S57.5,17.939,57.5,32 S46.061,57.5,32,57.5z M32,11.5c-11.304,0-20.5,9.196-20.5,20.5S20.696,52.5,32,52.5S52.5,43.304,52.5,32S43.304,11.5,32,11.5z"
      ></path>

      <linearGradient id="gradient2" x1="32" x2="32" y1="264" y2="212" gradientTransform="matrix(1 0 0 -1 0 270)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1a6dff"></stop>
        <stop offset="1" stopColor="#c822ff"></stop>
      </linearGradient>
      <path
        fill="url(#gradient2)"
        d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
      ></path>
    </motion.svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 64 64">
<linearGradient id="tKocMSGMDo5ZfHCQ3L2VLa_xJ6QQLUCD7lt_gr1" x1="32" x2="32" y1="57.5" y2="6.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6abff"></stop><stop offset="1" stop-color="#6dc7ff"></stop></linearGradient><path fill="url(#tKocMSGMDo5ZfHCQ3L2VLa_xJ6QQLUCD7lt_gr1)" d="M32,57.5C17.939,57.5,6.5,46.061,6.5,32S17.939,6.5,32,6.5S57.5,17.939,57.5,32 S46.061,57.5,32,57.5z M32,11.5c-11.304,0-20.5,9.196-20.5,20.5S20.696,52.5,32,52.5S52.5,43.304,52.5,32S43.304,11.5,32,11.5z"></path><linearGradient id="tKocMSGMDo5ZfHCQ3L2VLb_xJ6QQLUCD7lt_gr2" x1="32" x2="32" y1="264" y2="212" gradientTransform="matrix(1 0 0 -1 0 270)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#tKocMSGMDo5ZfHCQ3L2VLb_xJ6QQLUCD7lt_gr2)" d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"></path><linearGradient id="tKocMSGMDo5ZfHCQ3L2VLc_xJ6QQLUCD7lt_gr3" x1="32" x2="32" y1="260" y2="216" gradientTransform="matrix(1 0 0 -1 0 270)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1a6dff"></stop><stop offset="1" stop-color="#c822ff"></stop></linearGradient><path fill="url(#tKocMSGMDo5ZfHCQ3L2VLc_xJ6QQLUCD7lt_gr3)" d="M32,54c-12.131,0-22-9.869-22-22s9.869-22,22-22s22,9.869,22,22S44.131,54,32,54z M32,12 c-11.028,0-20,8.972-20,20s8.972,20,20,20s20-8.972,20-20S43.028,12,32,12z"></path><linearGradient id="tKocMSGMDo5ZfHCQ3L2VLd_xJ6QQLUCD7lt_gr4" x1="32" x2="32" y1="45.628" y2="18.372" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6abff"></stop><stop offset="1" stop-color="#6dc7ff"></stop></linearGradient><path fill="url(#tKocMSGMDo5ZfHCQ3L2VLd_xJ6QQLUCD7lt_gr4)" d="M42.592,26.843l-4.476,0.594c0,0,0.677-5.704-6.775-5.704c-3.791,0-5.23,2.281-5.23,4.003 c0,2.103,1.939,3.096,7.995,4.399c6.055,1.304,9.004,3.564,9.004,7.556s-2.92,7.936-10.792,7.936c-7.109,0-10.27-3.12-11.428-8.974 c2.475-0.346,4.66-0.665,4.66-0.665s-0.786,6.45,6.74,6.45c3.423,0,6.504-0.995,6.504-4.241c0-3.246-3.134-3.885-6.978-4.577 s-9.873-2.049-9.873-7.823c0-5.199,5.581-7.424,9.346-7.424C40,18.372,42.592,22.947,42.592,26.843z"></path>
</svg>

<motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 64 64"
      initial={{ y: 0 }}
      animate={{
        y: [-10, 0, -10], // Moves up and down like a jump
      }}
      transition={{
        repeat: Infinity,
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <linearGradient id="gradient1" x1="32" x2="32" y1="57.5" y2="6.5" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#e6abff"></stop>
        <stop offset="1" stopColor="#6dc7ff"></stop>
      </linearGradient>
      <path
        fill="url(#gradient1)"
        d="M32,57.5C17.939,57.5,6.5,46.061,6.5,32S17.939,6.5,32,6.5S57.5,17.939,57.5,32 S46.061,57.5,32,57.5z M32,11.5c-11.304,0-20.5,9.196-20.5,20.5S20.696,52.5,32,52.5S52.5,43.304,52.5,32S43.304,11.5,32,11.5z"
      ></path>

      <linearGradient id="gradient2" x1="32" x2="32" y1="264" y2="212" gradientTransform="matrix(1 0 0 -1 0 270)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#1a6dff"></stop>
        <stop offset="1" stopColor="#c822ff"></stop>
      </linearGradient>
      <path
        fill="url(#gradient2)"
        d="M32,58C17.663,58,6,46.336,6,32S17.663,6,32,6s26,11.664,26,26S46.337,58,32,58z M32,8 C18.767,8,8,18.767,8,32s10.767,24,24,24s24-10.767,24-24S45.233,8,32,8z"
      ></path>
    </motion.svg>
      </div>
    </StyledLoaderContainer>
  );
};

export default Loader;
