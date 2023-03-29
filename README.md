# Trash or Treasure

## Information

Trash or Treasure is an online item catalog created to help users give away their unwanted belongings to someone who may make better use of them. 

The project was created with **[Next.js](https://nextjs.org/)** using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Additionally, **[Cloudinary](https://cloudinary.com)** is used for image asset management and **[Auth0](https://auth0.com/)** is used for user authentication. 

 The project is hosted via **[Vercel](https://vercel.com/)** and can be found at **[https://trash-or-treasure.vercel.app/](https://trash-or-treasure.vercel.app/)**. 

## Developer's comments

+ While the website is meant to function as an online item catalog, an item **database** has not yet been implemented. Instead, a database has been simulated using React's **Context API** and **Local storage**. Therefore, any added items will not be visible outside of the user's browser. 
+ For testing purposes, feel free to use a fake e-mail and password for user authentication if you are not comfortable sharing your real information, as e-mail verification is not necessary. 
+ The location of the item is intentionally left unvalidated allowing users to decide the level of specificity of the location such that their privacy may be protected. Users may then provide a more specific location to interested parties through direct contact.
+ As there is no payment involved, it is expected that once a user desires an item, further proceedings will be conducted between the two parties involved through the means of contact provided by the item-holder. Trash or Treasure will not be held liable for any false or misleading information provided by the item-holder.  

## Footnotes

This project was not created for commercial purposes, only for me to develop my React and CSS skills. This was my first attempt at using Next.js and I thoroughly enjoyed the developer experience coupled with the smooth CI/CD of hosting via Vercel!

For any further information, contact me at <prnkdslv@gmail.com>. Thanks for reading!
