import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    // constructor() {
    //     super();
    //
    //     // bind `this` to the goToStore method
    //     this.goToStore = this.goToStore.bind(this);
    // }

    goToStore(event) {
        event.preventDefault();
        // first grab the text from the box
        console.log('You changed the url');
        console.log(this.storeInput.value);

        // second transition from / to /store/:storeId
        this.context.router.transitionTo(`/store/${this.storeInput.value}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please Enter a Store</h2>
                <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
                <button type="submit">Visit Store →</button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;
