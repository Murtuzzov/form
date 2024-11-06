// App.tsx
import React from "react";
import MyForm from "./MyForm"; // Импортируем компонент формы

const App: React.FC = () => {
  return (
    <div>
      <MyForm /> {/* Вставляем компонент формы */}
    </div>
  );
};

export default App;
