import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ users }) => {
  const renderPhase = (number) => {
    const lastOne = Number(number.toString().slice(-1));
    if (number > 4 && number < 15) return "Человек тусанет";
    if ([2, 3, 4].indexOf(lastOne) >= 0) return "Человека тусанет";
    if (lastOne === 1) return "Человек тусанет";
    return "Человек тусанет";
  };
  return (
    <h2>
      <span className={`badge bg-${users > 0 ? "primary" : "danger"}`}>
        {users > 0
          ? `${users} ${renderPhase(users)} с тобой сегодня`
          : "Никто не тусанет с тобой сегодня"}
      </span>
    </h2>
  );
};
SearchStatus.propTypes = {
  users: PropTypes.number.isRequired,
};
export default SearchStatus;
