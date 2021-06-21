import React from "react";

const CategoryForm = ({ handleSubmit, name, setName }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
        required
      />
      <br />
      <button
        className="btn btn-raised py-6 px-3"
        style={{
          color: "rgb(255,255,255)",

          background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
        }}
      >
        Create Now
      </button>
    </div>
  </form>
);

export default CategoryForm;
