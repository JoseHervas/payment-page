import React, { Component } from 'react'
import { Elements, StripeProvider } from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm.js'

class App extends Component {
    render() {
        return (
            <StripeProvider apiKey="pk_test_LwL4RUtinpP3PXzYirX2jNfR">
                <div className="example">
                    <img src="https://www.donempleo.com/img/logos/95514p.png" id="logo" />
                    <Elements>
                        <CheckoutForm />
                    </Elements>
                </div>
            </StripeProvider>
        )
    }
}

export default App
