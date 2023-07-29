import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          <h6>Empowering You to Make a Difference</h6>
          Welcome, {user?.name}.
          <br />
          You hold the power to save lives and make a lasting impact.
          With your dedication and efforts,
          we can ensure a seamless blood donation process and meet the needs of those in critical situations.
          Your dedication and commitment play a crucial role in saving lives and fostering a compassionate community.
          Thank you for your invaluable service!

          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
