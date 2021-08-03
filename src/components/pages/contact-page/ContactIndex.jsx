import React from "react";
import SubPageHeader from "../../Layouts/SubPageHeader";
import ContactAbout from "./ContactAbout";
import ContactForm from "./ContactForm";
import ContactLocation from "./ContactLocation";

export default function ContactIndex() {
  // useEffect(() => {
  //   fetch("https://localhost:")
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // })
  return (
    <div>
      <SubPageHeader
        title="Contact Us"
        subtitle="We are here to help you to solve your issues"
      />
      <ContactAbout />
      <ContactForm />
      <ContactLocation />
    </div>
  );
}
