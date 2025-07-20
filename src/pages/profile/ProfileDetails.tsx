import { users, type UsersType } from "../../data/users";
import { useState } from "react";
import { ImageLoadSpinner } from "../../components/ImageLoadSpinner";
import { LuImagePlus } from "react-icons/lu";
import { BiMapPin, BiPhone, BiUser } from "react-icons/bi";
import { BsMailbox } from "react-icons/bs";

type FormDataType = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

export const ProfileDetails = () => {
  const tempUserId = "37065281rbiyjmfa";

  const foundUser = users.find((user) => user.id === tempUserId);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [formUser] = useState<UsersType | undefined>(foundUser);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    formUser?.image
  );

  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  if (!formUser) return <div>User not found.</div>;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleToggleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isEditable) {
      // On starting edit — initialize formData from formUser
      setFormData({
        firstName: formUser.firstName || "",
        lastName: formUser.lastName || "",
        email: formUser.email || "",
        phone: formUser.phone || "",
        address: formUser.address || "",
      });
    }
    setIsEditable(!isEditable);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setSelectedImage(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // console.log("formData", formData);

  return (
    <div className="relative flex w-full">
      <div className="relative flex w-full">
        <form className="relative flex w-full mt-10">
          <div className="relative flex flex-col w-full">
            <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
            {/* Image upload */}
            <div className="flex flex-col items-start mb-6">
              <label
                className={`block text-sm font-medium ${
                  isEditable ? "text-gray-700" : "text-gray-700/70"
                } mb-2`}
              >
                Profile Picture
              </label>
              <div className="relative flex gap-4 w-full">
                <ImageLoadSpinner
                  src={selectedImage || formUser.image}
                  alt="Profile Preview"
                  classNames={`w-20 h-20 rounded-full object-cover border border-gray-300 ${
                    isEditable ? "opacity-100" : "opacity-80"
                  }`}
                />
                {/* <img
                    src={selectedImage || formUser.image}
                    alt="Profile Preview"
                    className={`w-20 h-20 rounded-full object-cover border border-gray-300 ${
                      isEditable ? "opacity-100" : "opacity-80"
                    }`}
                  /> */}

                {isEditable && (
                  <label className="flex items-center cursor-pointer text-blue-600 gap-2">
                    <LuImagePlus className="w-5 h-5" />
                    <span>Change</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            </div>
            {/* Image upload ends */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="relative flex-col">
                <label
                  className={`block text-sm font-medium ${
                    isEditable ? "text-gray-700" : "text-gray-700/70"
                  } mb-2`}
                >
                  First Name
                </label>
                <div className="flex items-center bg-gray-50 rounded-lg">
                  <div className="absolute top-[2.8rem] left-4 flex items-center pointer-events-none">
                    <BiUser
                      className={`${
                        isEditable ? "text-gray-500" : "text-gray-500/30"
                      } w-4 h-4`}
                    />
                  </div>
                  <input
                    type="text"
                    name="firstName"
                    value={isEditable ? formData.firstName : formUser.firstName}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                    className={`w-full appearance-none ${
                      isEditable
                        ? "bg-white text-gray-700"
                        : "bg-white/30 text-gray-700/70"
                    } border border-gray-200  px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>

              {/* Last Name */}
              <div className="relative flex-col">
                <label
                  className={`block text-sm font-medium ${
                    isEditable ? "text-gray-700" : "text-gray-700/70"
                  } mb-2`}
                >
                  Last Name
                </label>
                <div className="flex items-center bg-gray-50 rounded-lg">
                  <div className="absolute top-[2.8rem] left-4 flex items-center pointer-events-none">
                    <BiUser
                      className={`${
                        isEditable ? "text-gray-500" : "text-gray-500/30"
                      } w-4 h-4`}
                    />
                  </div>
                  <input
                    type="text"
                    name="lastName"
                    value={isEditable ? formData.lastName : formUser.lastName}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                    className={`w-full appearance-none ${
                      isEditable
                        ? "bg-white text-gray-700"
                        : "bg-white/30 text-gray-700/70"
                    } border border-gray-200  px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative flex-col">
                <label
                  className={`block text-sm font-medium ${
                    isEditable ? "text-gray-700" : "text-gray-700/70"
                  } mb-2`}
                >
                  Email Address
                </label>
                <div className="flex items-center bg-gray-50 rounded-lg">
                  <div className="absolute top-[2.8rem] left-4 flex items-center pointer-events-none">
                    <BsMailbox
                      className={`${
                        isEditable ? "text-gray-500" : "text-gray-500/30"
                      } w-4 h-4`}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={isEditable ? formData.email : formUser.email}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                    className={`w-full appearance-none ${
                      isEditable
                        ? "bg-white text-gray-700"
                        : "bg-white/30 text-gray-700/70"
                    } border border-gray-200  px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="relative flex-col">
                <label
                  className={`block text-sm font-medium ${
                    isEditable ? "text-gray-700" : "text-gray-700/70"
                  } mb-2`}
                >
                  Phone Number
                </label>
                <div className="flex items-center bg-gray-50 rounded-lg">
                  <div className="absolute top-[2.8rem] left-4 flex items-center pointer-events-none">
                    <BiPhone
                      className={`${
                        isEditable ? "text-gray-500" : "text-gray-500/30"
                      } w-4 h-4`}
                    />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]*"
                    value={isEditable ? formData.phone : formUser.phone || ""}
                    onChange={handleInputChange}
                    disabled={!isEditable}
                    required
                    className={`w-full appearance-none ${
                      isEditable
                        ? "bg-white text-gray-700"
                        : "bg-white/30 text-gray-700/70"
                    } border border-gray-200  px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="relative flex-col mt-6">
              <label
                className={`block text-sm font-medium ${
                  isEditable ? "text-gray-700" : "text-gray-700/70"
                } mb-2`}
              >
                Message
              </label>
              <div className="flex items-center bg-gray-50 rounded-lg">
                <div className="absolute top-[2.8rem] left-4 flex items-center pointer-events-none">
                  <BiMapPin
                    className={`${
                      isEditable ? "text-gray-500" : "text-gray-500/30"
                    } w-4 h-4`}
                  />
                </div>
                <textarea
                  name="address"
                  value={isEditable ? formData.address : formUser.address || ""}
                  onChange={handleInputChange}
                  disabled={!isEditable}
                  rows={2}
                  required
                  className={`w-full appearance-none ${
                    isEditable
                      ? "bg-white text-gray-700"
                      : "bg-white/30 text-gray-700/70"
                  } border border-gray-200  px-10 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                />
              </div>
            </div>

            <div className="absolute top-0 right-0 flex gap-3 mt-2">
              <button
                onClick={handleToggleEdit}
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                {isEditable ? "Cancel" : "Edit Profile"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
