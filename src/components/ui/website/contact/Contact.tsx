import { Mail, MapPin, Phone } from "lucide-react";
import FAQ from "../home/FAQ";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin fill="#829f01" size={40} color="#fff" />,
      title: "Location",
      value: "Al. Brucknera Aleksandra 63, Wrocław 51-410",
    },
    {
      icon: <Mail fill="#829f01" size={40} color="#fff" />,
      title: "Email",
      value: "abc@gmail.com",
    },
    {
      icon: <Phone fill="#829f01" size={40} color="#fff" />,
      title: "Get in Touch",
      value: "+999999991",
    },
  ];
  return (
    <div className="relative">
      <div className="grid grid-cols-3 gap-20 pt-16">
        {contactInfo.map((item, index) => (
          <div key={index} className="border p-5 rounded relative">
            <div className="absolute -left-10 bg-white shadow w-16 h-16 flex justify-center items-center rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              {item.icon}
            </div>
            <div className="ml-10">
              <h2 className="text-2xl mb-4">{item.title}</h2>
              <p>{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <FAQ />
    </div>
  );
};

export default Contact;