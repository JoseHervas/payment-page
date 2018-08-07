import React, { Component } from 'react'
import { CardElement, injectStripe, Elements } from 'react-stripe-elements'
import { Checkbox } from 'antd'

class CheckoutForm extends Component {
    constructor( props ) {
        super( props )
        this.state = { complete: false }
        this.submit = this.submit.bind( this )
    }

    async submit( ev ) {
        const { token } = await this.props.stripe.createToken( { name: 'Name' } )

        let response = null

        if ( document.querySelector( '.remember input' ).checked ) {
            response = await fetch( '/chargeAndSubscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: token.id
            } )
        } else {
            response = await fetch( '/charge', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: token.id
            } )
        }

        if ( response.ok ) this.setState( { complete: true } )
    }

    render() {
        if ( this.state.complete ) return <h1>Purchase Completed!</h1>

        return (
            <div className="checkout">
                <h1>Confirm Payment</h1>
                <input name="name" type="text" placeholder="Name" required />
                <input name="email" type="email" placeholder="Email" required />
                <CardElement />
                <div id="billed">
                    <h4>Total billed:</h4>
                    <h4 id="quantity">20€</h4>
                </div>
                <div id="extra-actions">
                    <Checkbox key="remember" className="remember">Remember me</Checkbox>
                    <Checkbox key="subscribe" className="subscribe">Subscribe MONTHLY</Checkbox>
                </div>
                <button onClick={this.submit}>Send</button>
            </div>
        )
    }
}

export default injectStripe( CheckoutForm )
