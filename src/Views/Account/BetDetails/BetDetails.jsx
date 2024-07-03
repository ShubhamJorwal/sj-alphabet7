import React, { useState, useEffect } from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import AccountNavtop from "../../../Components/AccountNavtop/AccountNavtop";
import { TfiAngleRight } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Addsection01 from "../../../Components/Addsecrights/Addsection01";
import Footer from "../../../Components/Footer/Footer";
import { HiOutlineCubeTransparent } from "react-icons/hi2";
import Loader01 from "../../../Components/Loaders/Loader01";
import axios from "axios";
const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
import ReactPaginate from "react-paginate";

const BetDetails = () => {
  const [depositHistory, setDepositHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const storedUserDataxse = localStorage.getItem("user");
  const userDataxzsdf = JSON.parse(storedUserDataxse);

  useEffect(() => {
    const fetchDepositHistory = async () => {
      try {
        const storedUserData = localStorage.getItem("user");
        const userData = JSON.parse(storedUserData);
        if (!userData) {
          console.error("User ID not found in localStorage.");
          setLoading(false);
          return;
        }

        const requestBody = {
          user_id: userData.unique_id,
        };
        console.log(requestBody);

        const response = await axios.post(
          `${apiUrl}/get_user_bet_data`,
          requestBody
        );
        console.log("Bet Details response:", response.data);
        setDepositHistory(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching deposit history:", error);
        setLoading(false);
      }
    };

    fetchDepositHistory();
  }, []);

  const displayUsers = depositHistory
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((deposit, index) => (
      <tr key={deposit.id}>
        <td>{index + 1 + pagesVisited}</td>
        {/* <td>{userDataxzsdf.first_name} {userDataxzsdf.last_name}</td> */}
        <td className={deposit.status === "transaction_bet_payout" && deposit.bet_type === "lost" ? "processing" : "received"}>

          {(deposit.bet_type ==="lost" || deposit.bet_type === "won") ? <> ₹ {deposit.bet_amount / 100}/-</>  :<><span style={{color:"white"}}>₹ {deposit.bet_amount / 100}/-</span></> }
          
        </td>
        {/* <td>{deposit.bet_type}</td> */}
        <td>{deposit.transaction_id}</td>
        <td className={deposit.bet_type === "won" ? "received" : deposit.bet_type === "lost" ? "processing" : ""}>
  {deposit.bet_type ? deposit.bet_type : <span style={{color:"white"}}>Bet Placed</span>}
</td>
      </tr>
    ));

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <Navbar />

      <div id="profilesecmainacpl">
            <AccountNavtop activeLink="Bet Details"/>
        <div id="pfcplx1">
          <div id="locapthnavtolf">
            <div id="lfo1">
              <HiOutlineCubeTransparent />
              Bet Details
            </div>
            <div id="lfo2">
              <Link to={"/"}>Home</Link> <TfiAngleRight />
              <span id="lf03">Bet Details</span>
            </div>
          </div>

          <div id="bonusxks1f03" className="bonus-history-container">
            <h2>Bet History</h2>
            {loading ? (
              <Loader01 />
            ) : depositHistory.length > 0 ? (
              <table className="bonus-history-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    {/* <th>User</th> */}
                    <th>Amount</th>
                    <th>Transaction ID</th>
                    <th>Status</th>
                    {/* <th>Transaction History</th> */}
                  </tr>
                </thead>
                <tbody>{displayUsers}</tbody>
              </table>
            ) : (
              <div id="nobonusetcsjkd">
                <img src="/Logos/revenuelogowo.png" alt="" />
                <p>No Bet data found.</p>
              </div>
            )}
            <div id="reactpaginationskk">
              {depositHistory.length > usersPerPage && (
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={Math.ceil(depositHistory.length / usersPerPage)}
                  onPageChange={changePage}
                  containerClassName={"pagination"}
                  activeClassName={"active"}
                />
              )}
            </div>
          </div>
        </div>

        <div id="pfcplx2">
          <Addsection01 />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BetDetails;
