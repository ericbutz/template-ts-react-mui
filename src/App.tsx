import React from 'react';
import {
  Box,
  CssBaseline,
  ThemeProvider
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  // define theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });

  /**
   * React Router is a standard library for routing in React. It enables the navigation among views of various 
   * components in a React Application.
   *    BrowserRouter: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) 
   *       to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
   *    Route: Route is the conditionally shown component that renders some UI when its path matches the current URL.
   *  
   * appRoutes is the array defined in routes.ts
   * The Array.prototype.map() method creates a new array populated with the results of calling a provided function 
   * on every element in the calling array. So in this case it returns several Route items that look like:
        <Route
          key='about-route'
          path='/about'
          element={< About />}
        /> 
   */

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
