import WelcomeMessage from './components/WelcomeMessage';
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';




function App() {
 return(
  <>
  <WelcomeMessage />
  <Header />
  <MainContent />
  <Footer />
  <UserProfile name = "Alice" age = {25} bio = "Loves hiking and photography"/>
  <UserProfile name = "Femi" age = {20} bio = "Loves playing football"/>
  <Counter />
  </>
 );
}

export default App
