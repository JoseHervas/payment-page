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

        //The token is the starting point always
        const { token } = await this.props.stripe.createToken( { name: 'Name' } )

        //This is the key variable of the method
        let response = null

        //Did the user check the REMEMBER button?
        if ( document.querySelector( '.remember input' ).checked ) {
            //If so, did the user check also the SUBSCRIBE button?
            if ( document.querySelector( '.subscribe input' ).checked ) {
                response = await fetch( '/subscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: token.id
                } )
            } else {
                //The user wants a ONLY ONCE payment, but he/she wants to be remembered
                response = await fetch( '/chargeAndRemember', {
                    method: 'POST',
                    headers: { 'Content-Type': 'text/plain' },
                    body: token.id
                } )
            }
        } else {
            //The user wants a ONLY ONCE payments and DO NOT WANT to be remembered
            response = await fetch( '/charge', {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain' },
                body: token.id
            } )
        }

        if ( response.ok ) this.setState( { complete: true } )
    }

    onSubscribe() {
        if ( document.querySelector( '.subscribe input' ).checked ) {
            document.querySelector( '.remember input' ).checked = 'checked'
        }
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
                    <Checkbox key="subscribe" className="subscribe" onChange={this.onSubscribe}>Subscribe MONTHLY</Checkbox>
                </div>
                <button onClick={this.submit}>Send</button>
            </div>
        )
    }
}

export default injectStripe( CheckoutForm )
