import { useNavigate } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";

export default function PopUpConf(props) {
    const navigate = useNavigate();

    return (
        <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModalCenter"
        tabIndex="-1"
        aria-labelledby="exampleModalCenterTitle"
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-3xl font-bold leading-normal text-gray-800 flex justify-center"
                id="exampleModalScrollableLabel"
              >
                {props.title}
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative p-4">
              <div className=" text-xl font-bold">
                <div className=" flex justify-center">
                  <BsFillCheckCircleFill
                    className="h-12 w-12 cursor-pointer"
                    fill="#d9b310"
                  />
                </div>
                <div className="flex justify-center my-6">
                    {props.text}
                </div>
              </div>

              <div className="modal-footer justify-center flex flex-shrink-0 flex-wrap items-center p-4 border-t border-gray-200 rounded-b-md">
                <button
                  type="button"
                  className="inline-block px-6 py-2.5 bg-projectBlue text-white rounded-md font-medium text-l"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    navigate(`${props.link}`);
                  }}
                >
                    {props.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}   