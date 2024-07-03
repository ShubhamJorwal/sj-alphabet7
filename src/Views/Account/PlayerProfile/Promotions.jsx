import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../Components/Navbar/Navbar';
import AccountNavtop from '../../../Components/AccountNavtop/AccountNavtop';
import Footer from '../../../Components/Footer/Footer';
import { CiBank } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { TfiAngleRight } from 'react-icons/tfi';
import Loader01 from '../../../Components/Loaders/Loader01';
import ReactPaginate from 'react-paginate';
import Addsection01 from '../../../Components/Addsecrights/Addsection01';

const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;

const Promotions = () => {
  const [bonusHistory, setBonusHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 10;
  const pagesVisited = pageNumber * usersPerPage;
  const storedUserDataxse = localStorage.getItem('user');
  const userDataxzsdf = JSON.parse(storedUserDataxse);
  

  useEffect(() => {
    const fetchBonusHistory = async () => {
      try {
        const storedUserData = localStorage.getItem('user');
        const userData = JSON.parse(storedUserData);
        if (!userData) {
          console.error('User ID not found in localStorage.');
          setLoading(false);
          return;
        }

        const requestBody = {
          user_id: userData.user_id
        };

        const response = await axios.post(`${apiUrl}/get_bonus_history`, requestBody);
        console.log('Bonus history response:', response.data);
        setBonusHistory(response.data.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bonus history:', error);
        setLoading(false);
      }
    };

    fetchBonusHistory();
  }, []);

  const displayUsers = bonusHistory
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((bonus, index) => (
      <tr key={bonus.id}>
        <td>{index + 1 + pagesVisited}</td>
        <td>{userDataxzsdf.first_name} {userDataxzsdf.last_name}</td>
        <td>{bonus.bonus_type}</td>
        <td className={bonus.status === 'Confirmed' ? 'received' : 'processing'}>{bonus.bonus_amount}</td>
        <td className={bonus.status === 'Confirmed' ? 'received' : 'processing'}>
          {bonus.status === 'Confirmed' ? 'Received' : 'Processing'}
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
            <AccountNavtop activeLink="Bonus"/>
        <div id="pfcplx1">
          <div id="locapthnavtolf">
            <div id="lfo1">
              <CiBank />
              Promotions
            </div>
            <div id="lfo2">
              <Link to={'/'}>Home</Link> <TfiAngleRight />
              <span id="lf03">Bonus</span>
            </div>
          </div>

          <div id="bonusxks1f03" className="bonus-history-container">
            <h2>Bonus History</h2>
            {loading ? (
              <Loader01 />
            ) : bonusHistory.length > 0 ? (
              <>
                <table className="bonus-history-table">
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>User</th>
                      <th>Bonus Type</th>
                      <th>Bonus Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{displayUsers}</tbody>
                </table>

                <div id="reactpaginationskk">

             
                {bonusHistory.length > usersPerPage && (
                  <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    pageCount={Math.ceil(bonusHistory.length / usersPerPage)}
                    onPageChange={changePage}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                  />
                  )}
                  </div>
              </>
            ) : (
              <div id="nobonusetcsjkd">
                <img src="/Logos/revenuelogowo.png" alt="" />
                <p>No promotions data found. Please make a deposit to get your first bonus.</p>
              </div>
            )}
          </div>
        </div>
        <div id="pfcplx2">
          <Addsection01/>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Promotions;
