const StyleReset = ({ children }) => {
    return (
      <div
        style={{
          fontFamily: "sans-serif", // Default system font
          fontWeight: "normal",
          fontSize: "medium",
          lineHeight: "normal",
          color: "black",
          backgroundColor: "transparent",
          margin: "0",
          padding: "0",
          textAlign: "left",
          textDecoration: "none",
        }}
      >
        <style>
          {`
            html, body, #root {
              margin: 0;
              padding: 0;
              width: auto;
              height: auto;
              overflow: visible;
              font-family: sans-serif;
              background: transparent;
              color: black;
            }
  
            a {
              color: -webkit-link;
              cursor: pointer;
              text-decoration: underline;
            }
  
            button {
              font: inherit;
              border: 1px solid #ccc;
              background-color: #f8f8f8;
              padding: 5px 10px;
              cursor: pointer;
            }
  
            h1, h2, h3, h4, h5, h6 {
              font-weight: bold;
              margin: 0;
              padding: 0;
            }
  
            p {
              margin: 1em 0;
            }
          `}
        </style>
        {children}
      </div>
    );
  };
  
  export default StyleReset;
  