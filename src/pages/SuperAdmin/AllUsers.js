import React, { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import UserRecord from "../../components/SuperAdmin/UserRecord";
import AddNewUser from "../../components/SuperAdmin/AddNewUser";
import Modal from "../../UI/Modal";
import axios from "axios";
import Spinner from "../../UI/Spinner";

const AllUsers = () => {
  const UsersData = [
    {
      name: "Tanner Finsha",
      email: "Tannerfisher@gmail.com",
      id: "#23454GH6J7YT6",
      investType: {
        name: "Information Tech",
        role: "Full time",
      },
      status: "Active",
      amount: "$3,023",
    },
    {
      name: "Emeto Winner",
      email: "Emetowinner@gmail.com",
      id: "#23454GH6J7YT6",
      investType: {
        name: "Car Business",
        role: "Contract",
      },
      status: "Active",
      amount: "$3,023",
    },
    {
      name: "Tassy Omah",
      email: "Tassyomah@gmail.com",
      id: "#23454GH6J7YT6",
      investType: {
        name: "Medical Business",
        role: "Associate",
      },
      status: "Active",
      amount: "$76,523",
    },
  ];

  const [modalShow, setModalShow] = useState(false);
  const [userList, setuserList] = useState([]);
  const [spinnerShow, setSpinnerShow] = useState(false);

  const handleNewUser = () => {
    setModalShow(true);
  };

  const handleDeleteUser = (userId) => {
    console.log(userId)
  }

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        setSpinnerShow(true);
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/get-all-users`
        );
        if (response.status === 200 && response.data !== null) {
          setuserList(response.data);
          setSpinnerShow(false);
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
              {userList.map((rec) => (
                <UserRecord
                  key={rec.id}
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
