import React from 'react';
import Issue from './Issue';

function Issues() {
    const items = [ { "issue": "Unauthorized change in subscription plan", "importance": 3, "remedy": "Refund the extra charges paid for Gold Subscription and revert the account to Pro Plus 1 year account as per customer's wish." }, { "issue": "Uninformed change in terms and conditions", "importance": 2, "remedy": "Ensure that customers are informed of any changes in terms and conditions before implementation, and provide a clear process for customers to opt-out of any changes they do not agree with." }, { "issue": "Late delivery and change in delivery guarantee", "importance": 1, "remedy": "Ensure on-time delivery as per guarantee given and provide a compensation of the entire amount charged under the delivery guarantee if the delivery is made late." } ]

    return (
        <div>
            {items.map(item => {
                return <Issue info={item}/>
            })}
        </div>
    )
}

export default Issues
