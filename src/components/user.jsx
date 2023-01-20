import React from "react";
import Quality from "./quality";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";
const User = ({ handleDelete, ...user }) => {
  return (
    <tr key={user._id}>
      <th scope="row">
        <span className="fw-normal">{user.name}</span>
      </th>
      <td>
        <QualitiesList qualities={user.qualities} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}</td>
      <td></td>
    </tr>
  );
};
User.propTypes = {
  handleDelete: PropTypes.func.isRequired,
};
export default User;
