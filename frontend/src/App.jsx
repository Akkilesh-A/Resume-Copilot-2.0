import { BrowserRouter,Routes,Route } from "react-router-dom"
import { HomePage } from "./components"
import {GitHubScore,GitHubStatsForm,Simple,ResumeScanner,ResumeScore} from "./jobSeekerComponents"
import MenuPage from "./pages/MenuPage"

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/githubstatsform" element={<GitHubStatsForm />} />
          <Route path="/githubstats/:gitHubDetails" element={<GitHubScore />} />
          <Route path="/menupage" element={<MenuPage />} />
          <Route path="/resumescore" element={<ResumeScanner />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
