"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext"
import { translations } from "@/app/lib/translations";
import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import AnimationElement from "@/app/ui/AnimationElement";

export default function ContactForm({ className }: { className?: string }) {
  const { language } = useLanguage();
  const { form } = translations[language].contact;

  const formFields = [
    { name: "name", id: "name", type: "text", label: form["name"].label, placeholder: form["name"].placeholder },
    { name: "contactInfo", id: "contact-info", type: "text", label: form["phone"].label, placeholder: form["phone"].placeholder },
    { name: "email", id: "email", type: "text", label: form["email"], placeholder: "name@gmail.com" },
    { name: "subject", id: "subject", type: "text", label: form["subject"].label, placeholder: form["subject"].placeholder },
    { name: "message", id: "message", type: "textarea", label: form["message"].label, placeholder: form["message"].placeholder, rows: className ? 3 : 10 }
  ];
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSend = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formStatus = {
      success: form["success"],
      failure: form["errors"].form
    }
    setLoading(true);
    sendEmail(formRef.current, setLoading, formStatus);
    console.log("pass");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className={className ? "" : "px-4 -mt-16"}>
      <form ref={formRef} onSubmit={handleSend} className={className || "lg:hidden space-y-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 relative z-10"}>
        <div className="flex space-x-4 rtl:space-x-reverse">
          {formFields.slice(0, 2).map(field => (
            <div key={field.id} className="flex-1">
              <label htmlFor={field.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{field.label}</label>
              <input type={field.type} id={field.id} name={field.name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={field.placeholder}  />
            </div>
          ))}
        </div>
        {formFields.slice(2).map(field => (
          <div key={field.id} className={field.id === "message" ? "sm:col-span-2" : "flex-1"}>
            <label htmlFor={field.id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea id={field.id} name={field.name} rows={field.rows} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={field.placeholder}></textarea>
            ) : (
              <input type={field.type} id={field.id} name={field.name} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={field.placeholder} />
            )}
          </div>
        ))}
        <button type="submit" className={`w-[155.91px] h-[74px] flex items-center ${loading ? "justify-between" : "justify-center"} py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
          {loading ? form["loading"] : form["button"]}
          {loading ? <AnimationElement animation="loading" dimensions={{ width: 50, height: 50 }} /> : ""}
        </button>
      </form>
    </div>
  )
}

const sendEmail = (form: HTMLFormElement, setLoading: React.Dispatch<React.SetStateAction<boolean>>, formStatus: { success: string, failure: { message: string, instruction: string } }) => {
  console.log("sendEmail");
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )
    .then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: formStatus["success"],
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: formStatus["failure"].message,
          text: formStatus["failure"].instruction,
          showConfirmButton: true,
        });
        setLoading(false);
      }
    );
};