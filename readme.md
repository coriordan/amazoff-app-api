## Routing.
. . . . List each route supported and state the associated view . . . . .

+ /api/products - displays all products (GET)
+ /api/products/:id - displays a product (:id)
+ /api/products - create a new product (POST)
+ /api/cart/:id - return a cart (GET)
+ /api/cart - create a new cart (POST)
+ /api/cart/:id - add an item to a cart (PUT) 
+ /api/cart/:id?action=updateQuantity - update quantity of item in cart (PUT)
+ /api/cart/:id - delete an item from cart (DELETE)
+ /api/cart:id?action=all - delete all items from cart (DELETE)
+ /api/order - return all orders (GET)
+ /api/order/:id - return an order (GET)
+ /api/order - create an order from existing cart (POST)
+ /api/auth - create login token for user (POST)
+ /api/auth - delete login token for user (DELETE)
+ /api/users/:id - return a user (GET)
+ /api/users - register a new user (POST)

# Web API Endpoint Reference
The web api for Amazoff provides the functionality necessary to manage a users shopping cart - populating it with products (books), 
and creating an order based on the contents of the cart. It also includes functionality for managing products, registering users, 
authenticating users and managing orders. 

## Web API Install and Operation
To start the app, run: npm start

To install the app, run: npm install

## API Design
see Routing section above

## API Configuration
Describe the configuration approach for your endpoint. For example, contents of config file and where it should be located:
NODE_ENV=development
PORT=4000
HOST=localhost
mongoDB=mongodb://localhost:27017/amazoff_db
seedDb=true
secret=81BDqwX3H*bFOcNV#Z^RoMAgIbJH%$vs0wh8plPgIyUGSVzswvy$LD7j2wsqlWe%

## Security and Authentication
The Amazoff api uses the JSON Web Token (JWT) method for representing an authenticated api call. I've also used Passport
to manage the authentication strategies used by the api (local strategy for basic authentication and JWT strategy for 
api authentication).

API calls that require authentication
+ /api/users/:id - return a user/get user profile (GET) 

## Testing
I employed a Behaviour Driven Development approach when unit testing the api end points for the Amazoff API. I used Mocha as the 
unit testing framework along with 'should' for describing the behaviour of the api within the tests.

![][image4]

## Extra features

. . . . . Briefly explain any non-standard features, functional or non-functional (e.g. user registration, authentication) developed for the app . . . . . .  

## Independent learning.

. . . . . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . . . . .  

[image4]: ./testing.png
