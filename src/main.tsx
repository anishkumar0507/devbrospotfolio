import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950 flex items-center justify-center z-[999]">
      <div className="text-center">
        <img
          src="/devbros-logo.svg"
          className="w-16 mx-auto mb-4 animate-pulse"
        />
        <p className="text-indigo-400 text-lg">Loading Dev Bro's...</p>
      </div>
    </div>
  );
}

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 second loader

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <App />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);