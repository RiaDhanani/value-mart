import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta name="description" content="Trash or Treasure provides a place for Sri Lankans to give away their unwanted belongings to anyone who could make better use of them. If you are interested in finding interesting trinkets, come browse through our collection."></meta>
          <meta name="author" content="Priyanka de Silva"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument