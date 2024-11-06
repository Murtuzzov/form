import React, { useState } from "react";
import { Formik } from "formik";
import { FormValues } from "./utils/types";
import { validationSchema } from "./utils/validationSchema";
import ProgressBar from "./ProgressBar";
import NextStepButton from "./NextStepButton";
import FormField from "./FormField";
import "./App.css";

const MyForm: React.FC = () => {
  const initialValues: FormValues = {
    projectName: "",
    genre: "",
    format: "",
    unfNumber: "",
    country: "",
    budget: "",
    synopsis: "",
  };

  const [showSuccess, setShowSuccess] = useState(false);

  const loadSavedValues = () => {
    const savedValues = localStorage.getItem("formValues");
    return savedValues ? JSON.parse(savedValues) : initialValues;
  };

  const calculateProgress = (values: FormValues) => {
    const filledFields = Object.values(values).filter((value) => value);
    return (filledFields.length / Object.keys(values).length) * 100;
  };

  return (
    <Formik<FormValues>
      initialValues={loadSavedValues()}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 2000);
      }}
    >
      {({ values, handleSubmit, isValid, dirty, resetForm }) => {
        const handleNextStep = () => {
          localStorage.setItem("formValues", JSON.stringify(values));
          handleSubmit();
        };

        const handleCancel = () => {
          resetForm({ values: initialValues });
          localStorage.removeItem("formValues");
        };

        const progress = calculateProgress(values);

        return (
          <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 relative">
            {showSuccess && (
              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
                <div className="checkmark-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="green"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="checkmark-svg"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
              </div>
            )}

            <div className="w-full max-w-screen-lg p-4 sm:p-8">
              <ProgressBar progress={progress} />

              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
                <div className="font-bold leading-tight text-center sm:text-left">
                  <h1 className="text-[32px] sm:text-[40px]">
                    Производственные
                  </h1>
                  <h2 className="text-[32px] sm:text-[40px]">
                    параметры фильма
                  </h2>
                </div>
                <button
                  className="mt-4 sm:mt-0 text-gray-600 border border-gray-400 rounded-full px-4 py-2 text-sm sm:text-base w-full sm:w-auto"
                  onClick={handleCancel}
                >
                  Отменить заполнение
                </button>
              </div>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mt-8 sm:mt-16 sm:gap-x-[126px]"
              >
                <div className="space-y-4">
                  <FormField
                    label="Название проекта"
                    name="projectName"
                    type="text"
                    placeholder="Название"
                  />
                  <FormField
                    label="Жанр"
                    name="genre"
                    type="select"
                    isSelect={true}
                    options={["Фантастика", "Комедия", "Драма"]}
                    placeholder="Жанр"
                  />
                  <FormField
                    label="Формат (для онлайн-платформ, интернета, другое)"
                    name="format"
                    type="select"
                    isSelect={true}
                    options={["Платформа", "Большой экран", "Интернет"]}
                    placeholder="Формат"
                  />
                  <FormField
                    label="№ УЧР или отсутствует"
                    name="unfNumber"
                    type="text"
                    placeholder="890-000-000-00-00"
                  />
                </div>

                <div className="space-y-4 flex flex-col justify-between">
                  <FormField
                    label="Страна-производитель (копродукция)"
                    name="country"
                    type="select"
                    isSelect={true}
                    options={["Россия", "Беларусь", "Азербайджан", "Казахстан"]}
                    placeholder="Страна"
                  />
                  <FormField
                    label="Сведения о сметной стоимости производства фильма на территории Нижегородской области, если есть"
                    name="budget"
                    type="text"
                    placeholder="Сметная стоимость"
                  />
                  <FormField
                    label="Синопсис"
                    name="synopsis"
                    type="text"
                    placeholder="Напишите краткое изложение"
                  />
                </div>
              </form>

              <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-[96px] space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex space-x-4 sm:space-x-6 justify-center w-full sm:left-[100px] sm:relative sm:top-0">
                  <button className="text-gray-500 font-semibold text-base border border-gray-500 rounded-full w-8 h-8 flex items-center justify-center">
                    1
                  </button>
                  <button className="text-gray-500 text-base">2</button>
                  <span className="text-gray-500 text-base relative top-1">
                    ...
                  </span>
                  <button className="text-gray-500 text-base flex items-center">
                    4 <span className="ml-6 text-lg font-bold"> &rarr;</span>
                  </button>
                </div>
                <NextStepButton
                  isValid={isValid}
                  dirty={dirty}
                  onClick={handleNextStep}
                />
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default MyForm;
