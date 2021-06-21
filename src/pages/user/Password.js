import React, { useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(password);

    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        setPassword("");
        toast.success("Password updated");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
      });
  };

  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label> Enter new Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="......"
          disabled={loading}
          value={password}
        />
        <button
          className="nav-link col btn btn-outline-light btn-lg btn-block btn-raised mt-2 text-light mb-4 pb-2"
          style={{
            color: "rgb(255,255,255)",
            height: 40,
            background: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
          }}
          disabled={!password || password.length < 6 || loading}
        >
          Update Now
        </button>
      </div>
    </form>
  );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-danger">Loading..</h4>
          ) : (
            <h4
              className="text-center p-3 mt-4 mb-5 bg-dark text-light"
              style={{ fontFamily: "Arial Black" }}
            >
              Update Your Password
            </h4>
          )}
          {passwordUpdateForm()}
        </div>
      </div>
    </div>
  );
};

export default Password;
