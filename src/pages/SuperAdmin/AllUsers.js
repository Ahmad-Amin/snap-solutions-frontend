import React, { useContext, useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import UserRecord from "../../components/SuperAdmin/UserRecord";
import AddNewUser from "../../components/SuperAdmin/AddNewUser";
import Modal from "../../UI/Modal";
import axios from "axios";
import Spinner from "../../UI/Spinner";
import UserContext from "../../store/user-context";

const AllUsers = () => {
  const [modalShow, setModalShow] = useState(false);
  const [spinnerShow, setSpinnerShow] = useState(false);
  const userCtx = useContext(UserContext)

  const handleNewUser = () => {
    setModalShow(true);
  };

  const handleDeleteUser = (userId) => {
    console.log(userId)
  }

  useEffect(() => {
    if (userCtx.allUsers.length !== 0) return;
    const getAllUsers = async () => {
      try {
        setSpinnerShow(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/get-all-users`
        );
        if (response.status === 200 && response.data !== null) {
          setSpinnerShow(false);
          userCtx.saveToGlobalStore(response.data)
        }
      } catch (error) {
        console.log(error);
        setSpinnerShow(false);
      }
    };

    getAllUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-between cursor-pointer">
        <h1 className="font-bold text-3xl leading-5 mb-4">All Users</h1>
        <div className=" text-sm leading-5 font-normal text-white bg-custom-blue rounded-lg px-4 py-3 ">
          <div
            className="flex flex-row gap-2 items-center "
            onClick={handleNewUser}
          >
            <CiCirclePlus className="text-xl" />
            <p>New Users</p>
          </div>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-4">
        {spinnerShow ? (
          <Spinner />
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-neutral-500">
            <thead className="text-xs text-gray-700 font-medium">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-medium text-xs"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-medium text-xs"
                >
                  UserID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-medium text-xs"
                >
                  Investment Type
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-medium text-xs"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-medium text-xs"
                >
                  Amount Distributed
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-center font-medium text-xs"
                ></th>
              </tr>
            </thead>
            <tbody>
              {userCtx.allUsers.map((rec) => (
                <UserRecord
                  key={rec.id || rec._id}
                  name={rec?.name}
                  email={rec.email}
                  id={rec.id || rec._id}
                  investType={rec.investType}
                  status={rec.status}
                  amount={rec.amount}
                  displayImage={rec.displayImage}
                  onDelete={handleDeleteUser}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {modalShow && (
        <Modal onhideDetails={() => setModalShow(false)}>
          <AddNewUser />
        </Modal>
      )}
    </div>
  );
};

export default AllUsers;
