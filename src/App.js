import { RoutesData } from './_routes/routesData';
import Header from './_components/header/index';
import SideBar from './_components/side-bar/index';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<SideBar />
		
				<RoutesData />;
			
		</div>
	);
}

export default App;
