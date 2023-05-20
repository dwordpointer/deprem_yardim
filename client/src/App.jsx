import { Routes,Route } from "react-router-dom"
import Lists from "./pages/Lists"
import Home from "./pages/Home"

export default function App() {
  return (
    <div className="h-full bg-[#ffffff] text-[#111]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/758634cabdc68f2050ce11900f51e379" element={<Lists />} />
      </Routes>
    </div>
  )
}
