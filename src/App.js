import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Box } from "@mui/material";
import { VideoDetail,Feed,Navbar,SearchFeed,ChannelDetail} from "./components";
function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "black" }}>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
