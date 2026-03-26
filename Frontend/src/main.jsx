import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,} from "react-router-dom"
// The "Showstopper" for Hero Headlines
import "@fontsource/syne"
import "@fontsource/syne/800.css"; 

// Futuristic Subheaders
import "@fontsource/space-grotesk"
import "@fontsource/space-grotesk/700.css";

// The "Workhorse" for clean body text
import "@fontsource/inter"
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";

// Technical data (Tracklists, BPM, Dates)
import "@fontsource/roboto-mono"
import "@fontsource/roboto"
import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto/600.css";
import "@fontsource/roboto/700.css";

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </StrictMode>,
)


/* Main Page Titles */
// h1 {
//   font-family: "Syne", sans-serif;
//   text-transform: uppercase; /* Looks great for labels */
// }

/* Artist Names / Section Headers */
// h2, h3 {
//   font-family: "Space Grotesk", sans-serif;
// }

/* General Reading Text */
// p, li {
//   font-family: "Inter", sans-serif;
// }

/* Tracklists, Tour Dates, and Metadata */
// .track-info, .date {
//   font-family: "Roboto Mono", monospace;
//   letter-spacing: -0.5px;
// }
