const CampoTexto = ({ label, tipo = "text", placeholder }) => {
  return (
    <div className="flex flex-col gap-2 mb-4">
      <label className="text-slate-700 font-medium">{label}</label>
      <input 
        type={tipo}
        placeholder={placeholder}
        className="border border-slate-300 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
      />
    </div>
  );
};

export default CampoTexto;