import React from "react";

export default function ApplyForm({ openForm, setOpenForm }) {
  return (
    <>
      {openForm && (
        <h1>Hello World</h1>
      )}
    </>
  );
}