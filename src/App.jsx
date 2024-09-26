import { useState } from "react";
import "./assets/index.css";
import Input from "./components/Input";
import Error from "./components/Error";

function App() {
  const [nameVal, setNameVal] = useState("");
  const [surnameVal, setSurnameVal] = useState("");
  const [phonVal, setPhonVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [submittVal, setSubmittVal] = useState([]);
  const [errorVal, setErrorVal] = useState("");

  const handleAdd = () => {
    if (!nameVal || !surnameVal || !phonVal || !emailVal) {
      setErrorVal("Xanani bos buraxmaq olmaz!");
      setTimeout(() => {
        setErrorVal("");
      }, 2000);
      return;
    }
    setSubmittVal((pereValue) => [
      ...pereValue,
      {
        name: nameVal,
        surname: surnameVal,
        phone: phonVal,
        email: emailVal,
      },
    ]);
    setNameVal("");
    setSurnameVal("");
    setPhonVal("");
    setEmailVal("");
  };

  return (
    <>
      <div className="text-[#8b8585] mt-4 w-[55%]   m-auto ">
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <Input title="Ad" value={nameVal} onChange={(e) => setNameVal(e.target.value)} />
            <Error mesaj={errorVal} />
            <div></div>
            <Input title="Soyad" value={surnameVal} onChange={(e) => setSurnameVal(e.target.value)} />
            <Error mesaj={errorVal} />
          </div>
          <div>
            <Input title="Telefon" value={phonVal} onChange={(e) => setPhonVal(e.target.value)} />
            <Error mesaj={errorVal} />
          </div>
          <div>
            <Input title="Email" value={emailVal} onChange={(e) => setEmailVal(e.target.value)} />
            <Error mesaj={errorVal} />
          </div>
        </div>
        <button
          onClick={handleAdd}
          className="my-[20px] px-[15px] py-[10px] bg-slate-600 rounded-lg text-[18px] text-white"
        >
          Elave Et
        </button>
        <hr />
        {submittVal.map((item, index) => (
          <div key={index} className="flex gap-4 text-[20px] text-emerald-950 border my-3 p-2">
            <div>
              <span>Ad:{item.name}</span>
            </div>
            <div>
              <span>Soyad:{item.surname}</span>
            </div>
            <div>
              <span>Telefon:{item.phone}</span>
            </div>
            <div>
              <span>Email:{item.email}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
