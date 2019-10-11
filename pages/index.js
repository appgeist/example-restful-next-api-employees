const HomePage = () => (
  <div className="main">
    <img className="next-logo" src={`/${process.env.ASSETS_PREFIX}/logo.svg`} alt="Next.js" />
    <hr className="hr" />
    <pre>process.env.ASSETS_PREFIX: {process.env.ASSETS_PREFIX}</pre>
    <pre>APIs available at /api.</pre>
    <style jsx>{`
      .main {
        text-align: center;
      }

      .next-logo {
        width: 200px;
        margin: 20px;
      }

      .hr {
        margin: 10px auto;
        max-width: 500px;
        border: 0;
        height: 1px;
        background: #aaa;
      }
    `}</style>
  </div>
);

export default HomePage;
