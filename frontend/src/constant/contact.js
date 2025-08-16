import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export const contactInfo = [
  {
    title: "Call for inquiry",
    value: "+257 388-6895",
    icon: <FaPhoneAlt className="text-[#309689]" size={20} />,
  },
  {
    title: "Send us email",
    value: "kramulous@sbcglobal.net",
    icon: <MdEmail className="text-[#309689]" size={20} />,
  },
  {
    title: "Opening hours",
    value: "Mon - Fri: 10AM - 10PM",
    icon: <MdAccessTime className="text-[#309689]" size={20} />,
  },
  {
    title: "Office",
    value: "19 North Road Piscataway, NY 08854",
    icon: <FaMapMarkerAlt className="text-[#309689]" size={20} />,
  },
];
