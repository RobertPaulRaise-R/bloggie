import { Link } from "react-router-dom";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useState } from "react";
import UserModal from "./UserModal";

export default function Navbar() {
  const [notification, setNotification] = useState(1);
  const [showUserModal, setShowUserModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleUserModal() {
    setShowUserModal((isOpen) => !isOpen);
  }

  return (
    <div>
      <header className="text-[#333] flex items-center justify-between h-14 px-6">
        <div className="flex items-center gap-5">
          <Link to="/" className="text-xl font-bold hover:text-black">
            Bloggie
          </Link>
          {isLoggedIn && (
            <div className="bg-st h-10 flex items-center gap-3 px-3 rounded-full">
              <IoSearchOutline size={20} color="#888" />
              <input
                type="search"
                className="outline-none"
                placeholder="search.."
              />
            </div>
          )}
        </div>

        <nav>
          <ul className="flex items-center gap-5 ">
            {isLoggedIn && (
              <>
                <li>
                  <Link to="/write" className="font-medium hover:text-black">
                    Write
                  </Link>
                </li>
                <li>
                  <button>
                    <div className="relative">
                      <IoNotificationsOutline size={28} color="#333" />
                      {notification > 0 && (
                        <div className="absolute -top-2.5 -right-0.5 bg-gray-300 size-4 flex items-center justify-center rounded-full">
                          <p className="text-[10px] font-bold">
                            {notification}
                          </p>
                        </div>
                      )}
                    </div>
                  </button>
                </li>
              </>
            )}
            <li>
              {isLoggedIn ? (
                <>
                  <button className="relative" onClick={handleUserModal}>
                    <IoPersonCircleOutline size={36} color="#333" />
                  </button>
                  {showUserModal && <UserModal />}
                </>
              ) : (
                <Link
                  to="login"
                  className="bg-stone-800 text-stone-50 px-4 py-2"
                >
                  Get Started
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <div className="w-100 h-[1px] bg-[#ccc]"></div>
    </div>
  );
}
