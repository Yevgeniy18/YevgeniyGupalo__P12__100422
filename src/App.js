import { RoutesData } from './routes/routesData';
import Header from './components/Header';
import SideBar from './components/SideBar';
import "./App.css"

function App() {
	// IMPORTING COMPONENT WITH CONDITONAL ROUTING
	return (
		<div className="App">
			<Header />
			<SideBar/>

			<main>
				<RoutesData />;
			</main>
		</div>
	);
}

export default App;
