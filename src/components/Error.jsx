import PropTypes from "prop-types";

function Error({children}) {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded">
        {children}
    </div>
  )
}

Error.propTypes = {
  children: PropTypes.object
}

export default Error