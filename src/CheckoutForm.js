import React, { Component } from 'react'
import { CardElement, injectStripe, Elements } from 'react-stripe-elements'

class CheckoutForm extends Component {
    constructor( props ) {
        super( props )
        this.state = { complete: false }
        this.submit = this.submit.bind( this )
    }

    async submit( ev ) {
        const { token } = await this.props.stripe.createToken( { name: 'Name' } )
        const response = await fetch( '/charge', {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: token.id
        } )

        if ( response.ok ) console.log( 'Purchase Complete!' )
    }

    render() {
        if ( this.state.complete ) return <h1>Purchase Complete</h1>

        return (
            <div className="checkout">
                <input name="name" type="text" placeholder="Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <CardElement />
                <div id="billed">
                  <h4>Total billed:</h4>
                  <h4 id="quantity">20€</h4>
                </div>
                <button onClick={this.submit}>Send</button>
            </div>
        )
    }
}

export default injectStripe( CheckoutForm )
