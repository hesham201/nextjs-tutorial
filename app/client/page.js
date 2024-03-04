"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">{count}</h1>
      <button className="btn btn-primary" onClick={() => setcount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default ClientPage;
