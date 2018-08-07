const express = require( 'express' )
const stripe = require( 'stripe' )( 'sk_test_TwTTlid3GeOG6YPydOjARw4I' )

const app = express()
app.use( express.static( 'public' ) )
app.use( require( 'body-parser' ).text() )

app.post( '/charge', async ( req, res ) => {
    try {
        const { status } = await stripe.charges.create( {
            amount: 2000,
            currency: 'usd',
            description: 'An example charge',
            source: req.body
        } )

        res.json( { status } )
    } catch ( err ) {
        console.log( err )
        res.status( 500 ).end()
    }
} )

app.post( '/chargeAndSubscribe', async ( req, res ) => {
    try {
        const customer = await stripe.customers.create( {
            source: req.body,
            email: 'juan.perez@ejemplo.com'
        } )

        const { status } = await stripe.charges.create( {
            amount: 2000,
            currency: 'usd',
            description: 'An example charge',
            customer: customer.id
        } )

        res.json( { status } )
    } catch ( err ) {
        console.log( err )
        res.status( 500 ).end()
    }
} )


const port = 8000
app.listen( port, () => {
    console.log( `running at localhost: ${port}` )
} )
