import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./components/Search";

function App() {
    return (
        <Router>
            <div className="container mx-auto">
                <Routes>
                    <Route path="/" element={<Search />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
