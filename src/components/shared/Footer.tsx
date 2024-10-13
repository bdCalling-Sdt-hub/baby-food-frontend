import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      path: "www.google.com",
      icon: <Facebook />,
    },
    {
      path: "www.google.com",
      icon: <Instagram />,
    },
    {
      path: "www.google.com",
      icon: <Youtube />,
    },
  ];
  return (
    <>
      <div className="-mb-[100px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#6c8738"
            fillOpacity="1"
            d="M0,128L120,144C240,160,480,192,720,192C960,192,1200,160,1320,144L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-footer">
        <div className="grid grid-cols-3 items-center container gap-14 py-20">
          <div>
            <img
              className="w-[50%] brightness-0 invert"
              src="/logo.png"
              alt=""
            />

            <p className="text-white mt-5">
              *Receive fresh tips and exclusive promotions. No spam – we
              promise.
            </p>

            <div className="flex items-center gap-2 mt-5">
              {socialLinks.map((item, index) => (
                <div key={index} className="bg-secondary p-2 rounded-xl">
                  <a href="http://" className="text-white">
                    {item.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="text-white mx-auto">
            <h2 className="uppercase">Quick Links</h2>
            <div className="flex flex-col mt-8 gap-4">
              <Link href="/about-us">About us</Link>
              <Link href="/faq">FAQ</Link>
              <Link href="/blogs">Blogs</Link>
            </div>
          </div>
          <div className="text-white mx-auto">
            <h2 className="uppercase">CONTACT DETAILS</h2>
            <div className="flex flex-col mt-8 gap-4">
              <p className="flex items-center gap-2">
                <MapPin color="#F37D2B" />
                7110 3rd Ave, Brooklyn, New York
              </p>
              <p className="flex items-center gap-2">
                <Phone color="#F37D2B" />
                +2342 5446 67
              </p>
              <p className="flex items-center gap-2">
                <Mail color="#F37D2B" />
                abcd@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
