import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonAvatar,
  IonIcon,
  IonInput
} from "@ionic/react";
import { searchOutline, chevronDownOutline } from "ionicons/icons";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <IonHeader className="shadow-sm ion-display-flex bg-white border-b border-neutral-100 dark:bg-neutral-900 dark:border-neutral-800">
      <IonToolbar className="ion-display-flex justify-between items-center px-6 py-2">
        {/* LEFT SECTION: App Name */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-neutral-800 dark:text-neutral-100 tracking-tight">
            HotelStay Dashboard
          </h1>
        </div>

        {/* CENTER SECTION: Search Bar */}
        <div className="ion-display-flex items-center w-[380px] bg-neutral-100 dark:bg-neutral-800 rounded-full px-3 py-1.5 transition-all focus-within:ring-2 focus-within:ring-primary">
          <IonIcon icon={searchOutline} className="text-neutral-500 text-lg" />
          <IonInput
            placeholder="Search hotels, bookings..."
            className="ml-2 text-sm placeholder:text-neutral-500"
            clearInput
          />
        </div>

        {/* RIGHT SECTION: Profile */}
        <IonButtons>
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <IonButton fill="clear" className="flex items-center gap-2">
              <IonAvatar className="w-9 h-9 border border-neutral-200 dark:border-neutral-700">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                  alt="Profile"
                />
              </IonAvatar>
              <IonIcon
                icon={chevronDownOutline}
                className="text-gray-500 text-base"
              />
            </IonButton>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute right-0 top-12 bg-white dark:bg-neutral-800 border dark:border-neutral-700 rounded-xl shadow-xl w-48 py-2 animate-fade-in">
                <button className="block w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition">
                  My Profile
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition">
                  Settings
                </button>
                <button className="block w-full text-left px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition text-red-600">
                  Logout
                </button>
              </div>
            )}
          </div>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
