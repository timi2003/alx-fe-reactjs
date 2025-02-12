import WelcomeMessage from './WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './UserProfile';


function App() {
 return(
  <>
  <WelcomeMessage />
  <Header />
  <MainContent />
  <Footer />
  <UserProfile name = "Alice" age = "25" bio = "Loves hiking and photography"/>
  <UserProfile name = "Femigit remote remove origin" age = "20" bio = "Loves playing football"/>
  </>
 );
}

export default App
