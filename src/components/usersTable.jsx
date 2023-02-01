import React from "react";
import PropTypes from "prop-types";
import Table from "./table";
import QualitiesList from "./qualitiesList";
import { Link } from "react-router-dom";

const UserTable = ({ users, onSort, selectedSort, handleDelete }) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <Link to={user._id}>{user.name}</Link>,
    },
    qualities: {
      name: "Качества",
      component: (user) => <QualitiesList qualities={user.qualities} />,
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретился, раз" },
    rate: { path: "rate", name: "Оценка" },
    delete: {
      component: (user) => (
        <button
          onClick={() => handleDelete(user._id)}
          type="button"
          className="btn btn-danger"
        >
          delete
        </button>
      ),
    },
  };
  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  );
};
UserTable.propTypes = {
  users: PropTypes.array,
  onSort: PropTypes.func.isRequired,
  selectedSort: PropTypes.object.isRequired,
  handleDelete: PropTypes.func,
};
export default UserTable;
