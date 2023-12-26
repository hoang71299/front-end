import './App.css';
import Form from './components/Form/Form';
import FormContact from './components/FormContact/FormContact';
import Heading from './components/Heading/Heading';
import JobList from './components/JobList/JobList';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Profile from './components/Profile/Profile';



function App() {
  return (
    <div className="container   vh-100">
      {/* <Heading>We are Learning CRA</Heading>
      <Heading>We are Learning Vite</Heading>
      <FormContact />
      <Profile />
      <JobList /> */}
      {/* <Form /> */}
      {/* <Header /> */}
      {/* <JobList /> */}
      {/* <Profile /> */}
      <FormContact></FormContact>
      {/* <Footer></Footer> */}
    </div >
  );
}

export default App;
