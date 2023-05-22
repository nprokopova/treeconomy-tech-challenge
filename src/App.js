import "./App.css";
import CardList from "./components/CardList";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./util/theme";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <div className="app-header">
        <span className="app-header-title">Treeconomy - Nikol Prokopova</span>
        <span className="app-header-name">Project List</span>
        <CardList url='https://sherwoodprojectdata.blob.core.windows.net/tech-challenge/projects.json'/>
      </div>
    </ThemeProvider>
  </>
);

export default App;
