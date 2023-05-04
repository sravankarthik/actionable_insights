
import './App.css';
import Entity from './components/Entity';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_bar from './components/Nav-bar';
import Search from './components/Search';
import Issue from './components/Issue';

function App() {
  return (
    <div>
      <Nav_bar />
      <Search />
      <Entity details={{
        "app": 0.3,
        "coupon": 0.2,
        "cuisine": 0.3,
        "customer support": -0.5,
        "delivery": 0.6,
        "live tracking": -0.5,
        "location": -0.3,
        "ordering": 0.4,
        "promo code": 0.4,
        "refund": -0.3,
        "restaurant": -0.1,
        "user interface": 0.4,
        "zomato": 0.1,
        "zomato gold": -0.3
      }} />
      {/* <Issue /> */}
    </div>
  );
}

export default App;
