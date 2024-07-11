import React from "react";

const Header = ({ name, headline, click }) => {
  //   const { name, headline } = props;
  return (
    <div className="w-full border-b mb-6 pb-4">
      <div className="flex text-4xl text-red-600 justify-center py-4">
        {name}
      </div>
    </div>
  );
};

export default Header;
