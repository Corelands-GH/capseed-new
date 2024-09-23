import "./App.css";
// import Footer from './components/common/footer/page';
// import Navbar from './components/common/navbar/page';

import { BrowserRouter } from "react-router-dom";
import Root from "./routes/index";

function App() {
	return (
		<div className="">
			<BrowserRouter>
				{/* <Navbar/> */}
				<Root />
				{/* <Footer/> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
