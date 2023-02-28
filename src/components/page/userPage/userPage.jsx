import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import QualitiesList from "../../ui/qualities/qualitiesList";
import { useNavigate, useLocation } from "react-router-dom";

const UserPage = ({ userId }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);
  const handleClick = () => {
    navigate(location.pathname + "/edit");
  };
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>completed meetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <button onClick={handleClick}>Изменить</button>
      </div>
    );
  } else {
    return <h1>loading</h1>;
  }
};
UserPage.propTypes = {
  userId: PropTypes.string.isRequired,
};
export default UserPage;
