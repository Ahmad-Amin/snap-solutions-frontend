import React, { useState } from "react";
import ICloud from "../assets/icloud-1.svg";
import GoogleDrive from "../assets/google-drive-1.svg";
import Mega from "../assets/mega-1.svg";
import MediaFire from "../assets/media-fire 1.svg";
import RecentFile from "../components/RecentFile";
import RecentFilesFolder from "../components/RecentFilesFolder";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../store/user-context";

const recentFilesData = [
  {
    imageName: "image230127.jpeg",
    accessibleTo: "Only you",
    day: "Today",
    folderName: "Folder 01",
    docSize: "6 mb",
  },
  {
    imageName: "apresentation.video",
    accessibleTo: "Only you",
    day: "Today",
    folderName: "Folder 03",
    docSize: "6 mb",
  },
  {
    imageName: "instalation-sistem.exe",
    accessibleTo: "Only you",
    day: "Fri, 27 January 2023",
    folderName: "Folder 01",
    docSize: "6 mb",
  },
  {
    imageName: "design-sistem.pdf",
    accessibleTo: "Only you",
    day: "Fri, 27 January 2023",
    folderName: "Folder 04",
    docSize: "6 mb",
  },
  {
    imageName: "image230127.jpeg",
    accessibleTo: "Only you",
    day: "Fri, 27 January 2023",
    folderName: "Folder 02",
    docSize: "6 mb",
  },
];

const recentFilesFolder = [
  {
    name: "Folder 01",
  },
  {
    name: "Folder 02",
  },
  {
    name: "Folder 03",
  },
  {
    name: "Folder 04",
  },
];

const Storage = () => {
  const [file, setFile] = useState(null);

  const userCtx = useContext(UserContext)
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", userCtx.user.id)
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/upload-file`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        console.log("File uploaded successfully");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h1 className="font-medium text-2xl">My Storage</h1>
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload File</button>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 my-4">
        <div className="py-5 px-4 rounded-2xl hover:shadow-xl transition ease-in-out duration-300 cursor-pointer">
          <div className=" bg-blue-100 bg-opacity-50 inline-block rounded-sm p-2">
            <img src={ICloud} alt="Cloud" />
          </div>
          <p className=" font-semibold text-base text-neutral-700 my-2">
            Icloud
          </p>
          <div>
            <div className=" h-3 w-full bg-neutral-20 rounded-2xl overflow-hidden">
              <div className="h-3 bg-blue-100" style={{ width: "85%" }}></div>
            </div>
            <div className="font-medium text-sm text-neutral-400 flex justify-between mt-2">
              <p>200GB</p>
              <p>174GB</p>
            </div>
          </div>
        </div>
        <div className="py-5 px-4 rounded-2xl hover:shadow-xl transition ease-in-out duration-300 cursor-pointer">
          <div className=" bg-yellow-200 bg-opacity-50 inline-block rounded-sm p-2">
            <img src={GoogleDrive} alt="Google Drive" />
          </div>
          <p className=" font-semibold text-base text-neutral-700 my-2">
            Google Drive
          </p>
          <div>
            <div className=" h-3 w-full bg-neutral-20 rounded-2xl overflow-hidden">
              <div className="h-3 bg-yellow-200" style={{ width: "45%" }}></div>
            </div>
            <div className="font-medium text-sm text-neutral-400 flex justify-between mt-2">
              <p>1TB</p>
              <p>778GB</p>
            </div>
          </div>
        </div>
        <div className="py-5 px-4 rounded-2xl hover:shadow-xl transition ease-in-out duration-300 cursor-pointer">
          <div className=" bg-red-400 bg-opacity-50 inline-block rounded-sm p-2">
            <img src={Mega} alt="Mega" />
          </div>
          <p className=" font-semibold text-base text-neutral-700 my-2">Mega</p>
          <div>
            <div className=" h-3 w-full bg-neutral-20 rounded-2xl overflow-hidden">
              <div className="h-3 bg-red-400" style={{ width: "70%" }}></div>
            </div>
            <div className="font-medium text-sm text-neutral-400 flex justify-between mt-2">
              <p>500GB</p>
              <p>234GB</p>
            </div>
          </div>
        </div>
        <div className="py-5 px-4 rounded-2xl hover:shadow-xl transition ease-in-out duration-300 cursor-pointer">
          <div className=" bg-cyan-400 bg-opacity-50 inline-block rounded-sm p-2">
            <img src={MediaFire} alt="Media Fire" />
          </div>
          <p className=" font-semibold text-base text-neutral-700 my-2">
            MediaFire
          </p>
          <div>
            <div className=" h-3 w-full bg-neutral-20 rounded-2xl overflow-hidden">
              <div className="h-3 bg-cyan-400" style={{ width: "90%" }}></div>
            </div>
            <div className="font-medium text-sm text-neutral-400 flex justify-between mt-2">
              <p>256GB</p>
              <p>81GB</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-medium text-2xl my-9">Recent Files</h1>

        <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-6">
          {recentFilesFolder.map((rec, index) => (
            <RecentFilesFolder key={index} name={rec.name} />
          ))}
        </div>

        <div className="relative overflow-x-auto mt-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <tbody>
              {recentFilesData.map((rec, index) => (
                <RecentFile
                  key={index}
                  imageName={rec.imageName}
                  accessibleTo={rec.accessibleTo}
                  day={rec.day}
                  folderName={rec.folderName}
                  docSize={rec.docSize}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Storage;
