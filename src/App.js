
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
      <Issue info={[{ "issue": "Unauthorized change in subscription plan", "importance": 3, "remedy": "Refund the extra charges paid for Gold Subscription and revert the account to Pro Plus 1 year account as per customer's wish." }, { "issue": "Uninformed change in terms and conditions", "importance": 2, "remedy": "Ensure that customers are informed of any changes in terms and conditions before implementation, and provide a clear process for customers to opt-out of any changes they do not agree with." }, { "issue": "Late delivery and change in delivery guarantee", "importance": 1, "remedy": "Ensure on-time delivery as per guarantee given and provide a compensation of the entire amount charged under the delivery guarantee if the delivery is made late." }]} />
    </div>
  );
}

export default App;
