import { useState } from "react";
import "./assets/index.css";
import Input from "./components/Input";

function App() {
  const [nameVal, setNameVal] = useState("");
  const [surnameVal, setSurnameVal] = useState("");
  const [phonVal, setPhonVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [submittVal, setSubmittVal] = useState("");

  const handleAdd = () => {
    setSubmittVal({
      name: nameVal,
      surname: surnameVal,
      phone: phonVal,
      email: emailVal,
    });
    setNameVal("");
    setSurnameVal("");
    setPhonVal("");
    setEmailVal("");
  };

  return (
    <>
      <div className="text-[#8b8585] mt-4 w-[55%]   m-auto ">
        <div className="grid grid-cols-2 gap-4 ">
          <Input title="Ad" value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
          <Input title="Soyad" value={surnameVal} onChange={(e) => setSurnameVal(e.target.value)} />
          <Input title="Telefon" value={phonVal} onChange={(e) => setPhonVal(e.target.value)} />
          <Input title="Email" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
        </div>
        <button
          onClick={handleAdd}
          className="my-[20px] px-[15px] py-[10px] bg-slate-600 rounded-lg text-[18px] text-white"
        >
          Elave Et
        </button>
        <hr />
        <div className="flex gap-4 text-[20px] text-emerald-950">
          <div>
            <span>Ad:{submittVal.name}</span>
          </div>
          <div>
            <span>Soyad:{submittVal.surname}</span>
          </div>
          <div>
            <span>Telefon:{submittVal.phone}</span>
          </div>
          <div>
            <span>Email:{submittVal.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
