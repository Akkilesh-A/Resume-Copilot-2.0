import { BrowserRouter,Routes,Route } from "react-router-dom"
import { HomePage } from "./fixedComponents"
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
