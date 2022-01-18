import './App.css';
import CustomerList from './components/CustomerList';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateCustomer from './components/CreateCustomer';
import { Route, Routes } from 'react-router-dom';

function App() {
  const title = "그린고객관리";
  const sampleData = [
    {
      no: 0,
      name: "김그린",
      phone: "010-1234-1111",
      birthday: "1989-12-22",
      gender: "여성",
      addr: "울산시 남구 삼산동 화합로12"
    },
    {
      no: 1,
      name: "강하늘",
      phone: "010-1234-1111",
      birthday: "1989-12-22",
      gender: "남성",
      addr: "울산시 남구 삼산동 화합로12"
    },
    {
      no: 3,
      name: "강수진",
      phone: "010-1234-1111",
      birthday: "1989-12-22",
      gender: "여성",
      addr: "울산시 남구 삼산동 화합로12"
    },
  ]
  return (
    <div className="App">
      <Header title={title} />
      <div className="contents">
        <Routes>
          <Route path="/" element={<CustomerList />}/>
          <Route path="/create" element={<CreateCustomer />}/>
        </Routes>
      </div>
      <Footer title={title}/>
    </div>
  );
}

export default App;
