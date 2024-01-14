function PopUp({ children, open }) {
  if (!open) return null;
  return (
    <>
      <div className="fixed  bg-black opacity-25 h-36 w-64 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " />
      <div className="fixed top-1/2 left-1/2 transform w-52 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-md text-center">
        {children}
      </div>
    </>
  );
}

export default PopUp;
