export default function Container({ children }) {
  return (
    <div className="lg:w-7xl m-auto md:w-full max-w-screen px-4">
      {children}
    </div>
  );
}
