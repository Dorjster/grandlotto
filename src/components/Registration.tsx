import React from "react";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  Name: string;
  Phone: string;
  Mail: string;
  Company: string;
  isChecked: boolean;
  Cost?: string;
}

const Registration = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      Name: "",
      Phone: "",
      Mail: "",
      Company: "",
      isChecked: false,
      Cost: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .min(3, "3 аас их үсэгтэй байх ёстой")
        .required("Нэр хоосон байна"),
      Phone: Yup.string()
        .matches(/^\d{8,}$/, "Хамгийн багадаа 8 оронтой байх ёстой")
        .required("Дугаар хоосон байна"),
      Mail: Yup.string()
        .email("Хаягаа зөв бичнэ үү")
        .required("Майл хоосон байна"),
      Cost: Yup.string()
        .matches(/^\d*$/, "Зөвхөн тоо бичнэ үү")
        .required("Дүн хоосон байна"),
    }),
    onSubmit: async (values) => {
      console.log(formik.errors);
      console.log(values);

      try {
        await emailjs.send(
          "service_tn95blj",
          "template_v73r0px",
          {
            message: [
              `Mail: ${values.Mail} 
             Name: ${values.Name}
             Phone: ${values.Phone}
             Company: ${values.Company}
             Cost: ${values.Cost}`,
            ],
          },
          "ZTCC8crOiemZtW0jY"
        );
        toast.success("Амжилттай илгээгдлээ!");
        console.log("Form submitted successfully!");
        formik.resetForm();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });
  return (
    <>
      <header className="text-[10px] text-center py-[8px]">
        ГРАНД СИСТЕМС ХУВЬЦААНЫ УРЬДЧИЛСАН БҮРТГЭЛ
      </header>
      <form
        id="emailContent"
        onSubmit={(event) => {
          event.preventDefault();
          formik.handleSubmit();
        }}
        className="flex flex-col gap-[45px]"
      >
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="text-[13px]">
            Таны овог/нэр
          </label>
          <input
            id="name"
            name="Name"
            type="text"
            placeholder="Нэр"
            onChange={formik.handleChange}
            value={formik.values.Name}
            className="bg-gray-200 p-2 rounded"
          />
          {formik.touched.Name && formik.errors.Name ? (
            <div className="text-red-500 mt-14 absolute text-[13px]">
              {formik.errors.Name}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="mail" className="text-[13px]">
            Таны цахим шуудан/майл хаяг
          </label>
          <input
            id="mail"
            name="Mail"
            type="email"
            placeholder="Майл"
            onChange={formik.handleChange}
            value={formik.values.Mail}
            className="bg-gray-200 p-2 rounded"
          />
          {formik.touched.Mail && formik.errors.Mail ? (
            <div className="text-red-500 mt-14 absolute text-[13px]">
              {formik.errors.Mail}
            </div>
          ) : null}
        </div>

        <div className="flex flex-col mb-4">
          <label htmlFor="phone" className="text-[13px]">
            Таны утасны дугаар
          </label>
          <input
            id="phone"
            name="Phone"
            type="text"
            pattern="[0-9]*"
            onChange={formik.handleChange}
            value={formik.values.Phone}
            className="bg-gray-200 p-2 rounded"
          />
          {formik.touched.Phone && formik.errors.Phone ? (
            <div className="text-red-500 mt-14 absolute text-[13px]">
              {formik.errors.Phone}
            </div>
          ) : null}
        </div>

        <div className="mb-4 flex items-center absolute top-[60%]">
          <input
            id="isChecked"
            name="isChecked"
            type="checkbox"
            onChange={formik.handleChange}
            checked={formik.values.isChecked}
          />
          <label htmlFor="isChecked" className="text-[13px] ml-[4px] ">
            Үнэт цаасны компанид данстай эсэх
          </label>
        </div>

        {formik.values.isChecked && (
          <div className="flex flex-col mb-4 absolute top-[63%]">
            <label htmlFor="company" className="text-[13px]">
              Компаны нэр
            </label>
            <input
              id="company"
              name="Company"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Company}
              className="bg-gray-200 p-2 rounded"
            />
          </div>
        )}

        <div className="flex flex-col mt-[35px]">
          <label htmlFor="cost" className="text-[13px]">
            Хөрөнгө оруулахаар сонирхож буй хэмжээ
          </label>
          <input
            id="cost"
            name="Cost"
            type="text"
            pattern="[0-9]*"
            onChange={formik.handleChange}
            value={formik.values.Cost}
            className="bg-gray-200 p-2 rounded"
          />
          {formik.touched.Cost && formik.errors.Cost ? (
            <div className="text-red-500 mt-14 absolute text-[13px]">
              {formik.errors.Cost}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Илгээх
        </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Registration;
