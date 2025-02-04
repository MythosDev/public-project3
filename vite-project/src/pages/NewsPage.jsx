import React from "react";
import TopBar from "../components/TopBar";
import NewsRow from "../components/NewsRow";

const NewsPage = () => {
  return (
    <div>
      <TopBar />

        <div style={{marginTop: '0px'}}>
            <h1>Revolutions in Georgia</h1>
            <div className="row info">
            <p>19, May, 2024</p>
            <p>Montana, USA</p>
            <p>(Getty Images)</p>
            </div>

            <NewsRow />
        </div>


      {/* Placeholder for additional content */}
      {/* <div className="content">
        {Array(14).fill(<p>long</p>)}
      </div> */}

      {/* CSS Styling */}
      <style jsx>{`
        body {
          background-color: rgb(53, 53, 53);
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .topbar {
          background-color: rgb(187, 187, 187);
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }

        .logo {
          width: 150px;
        }

        .account {
          width: 100px;
        }

        .searchbar {
          border-radius: 50px;
          background-color: rgb(241, 241, 241);
          border: none;
          width: 400px;
          height: 35px;
          padding: 0 20px;
          outline: none;
        }

        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }

        .info {
          display: flex;
          gap: 15px;
        }


        .column {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 10px;
          width: 62.5%;
        }

        h1 {
          margin: 10px;
          font-size: 2rem;
          color: rgb(206, 206, 206);
        }

        p {
          margin: 5px;
          font-size: 1rem;
          color: rgb(179, 179, 179);
        }

        .center {
          width: 100%;
          aspect-ratio: 16 / 9;
          height: auto;
          padding: 10px;
        }
      `}</style>
    </div>
  );
};

export default NewsPage;