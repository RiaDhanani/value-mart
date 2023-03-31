# ValueMart

## Information

Value Mart is an online item inventory designed to assist users in selling their unwanted possessions to someone who might use them more effectively. 

The project was created with **[Next.js](https://nextjs.org/)** using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Additionally, **[Cloudinary](https://cloudinary.com)** is used for image asset management and **[Auth0](https://auth0.com/)** is used for user authentication. 

The project is hosted via **[Vercel](https://vercel.com/home)** and can be found at https://valuemart.vercel.app/.

## Developer's comments

+ The website is intended to serve as an online catalog of items, but it does not yet have an item **database**. Instead, the **Context API** and React's **Local storage** have been used to mimic a database. Thus, any added item persists only till the browser is open.
+ If you'd rather not share your actual information during testing, feel free to use a fake e-mail and password for user authentication. Email verification is not required. 
+ In order to safeguard users' privacy, the location of the item is left unvalidated. Users can choose how specific a location should be. Users can then get in touch with interested parties and give them a more precise address.
+ Since there is no money exchanged, the price ofan item is not mentioned and it is anticipated that once a user expresses interest in an item, further negotiations will take place between the two parties via the means of communication provided by the seller.
