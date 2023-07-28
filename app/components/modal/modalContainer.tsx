import { setNewUser } from "@/app/hooks/setNewUser";
import { modalState } from "@/recoil/store";
import type { IUser } from "@/types/type";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { showToast } from "../toast/toast";
import { deleteUser } from "@/app/hooks/deleteUser";

function ShowUserModal() {
  const [modalOpen, isModalOpen] = useRecoilState(modalState);
  function setModalOpen() {
    isModalOpen(false);
  }

  return (
    <>
      <div
        id="authentication-modal"
        className="fixed left-1/3 md:top-1/3 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={setModalOpen}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                유저 추가
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    유저 이름
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="major"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    전공
                  </label>
                </div>
                <div>
                  <label
                    htmlFor="assignment"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    과제 수행 횟수(초깃값 : 0)
                  </label>
                </div>
                <button
                  type="button"
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  데이터베이스에 유저 추가하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AddModal() {
  const [modalOpen, isModalOpen] = useRecoilState(modalState);
  function setModalOpen() {
    isModalOpen(false);
  }
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    major: "",
    assignment: "",
  });

  const { username, password, major, assignment } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  async function createUser({ username, password, major, assignment }: IUser) {
    const data = await setNewUser({
      username,
      password,
      major,
      assignment,
    });
    return data;
  }

  async function submitUser() {
    console.log(`${username} ${password} ${major} ${assignment}`);
    if (
      username === "" ||
      password === "" ||
      major === "" ||
      assignment === ""
    ) {
      showToast({
        message: `유저정보를 모두 입력해주세요.`,
        type: "error",
      });
    } else {
      const res = await createUser({
        username,
        password,
        major,
        assignment,
      });

      showToast({
        message: `유저를 성공적으로 추가했습니다.`,
        type: "success",
      });
      setModalOpen();
    }
  }

  return (
    <>
      <div
        id="authentication-modal"
        className="fixed left-1/3 md:top-1/3 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={setModalOpen}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                유저 추가
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    유저 이름
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="표준성"
                    onChange={onChange}
                    value={username}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    비밀번호
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="9868"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={onChange}
                    value={password}
                    autoComplete="off"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="major"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    전공
                  </label>
                  <input
                    type="text"
                    name="major"
                    id="major"
                    placeholder="정보시스템학과"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={onChange}
                    value={major}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="assignment"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    과제 수행 횟수(초깃값 : 0)
                  </label>
                  <input
                    type="text"
                    name="assignment"
                    id="assignment"
                    placeholder="20"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={onChange}
                    value={assignment}
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={submitUser}
                  className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  데이터베이스에 유저 추가하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function DeleteModal() {
  const [modalOpen, isModalOpen] = useRecoilState(modalState);
  function setModalOpen() {
    isModalOpen(false);
  }
  const [inputs, setInputs] = useState({
    uid: "",
    adminPassword: "",
  });

  const { uid, adminPassword } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  async function submitUser() {
    if (uid === "" || adminPassword === "") {
      showToast({
        message: `UID와 비밀번호를 모두 입력해주세요.`,
        type: "error",
      });
    } else {
      const res = await deleteUser({
        uid,
        adminPassword,
      });
      if (res === "PASSWORD INVALID") {
        showToast({
          message: `어드민 비밀번호가 다릅니다.`,
          type: "error",
        });
      } else {
        showToast({
          message: `유저를 성공적으로 삭제했습니다.`,
          type: "success",
        });
        setModalOpen();
      }
    }
  }

  return (
    <>
      <div
        id="authentication-modal"
        className="fixed left-1/3 md:top-1/3 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={setModalOpen}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                유저 삭제
              </h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="uid"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    UID
                  </label>
                  <input
                    type="text"
                    name="uid"
                    id="uid"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="64c2...."
                    onChange={onChange}
                    value={uid}
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    어드민 비밀번호
                  </label>
                  <input
                    type="password"
                    name="adminPassword"
                    id="adminPassword"
                    placeholder="**********"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    onChange={onChange}
                    value={adminPassword}
                    autoComplete="off"
                    required={true}
                  />
                </div>

                <button
                  type="button"
                  onClick={submitUser}
                  className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  유저 삭제하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ShowUserModal, AddModal, DeleteModal };
