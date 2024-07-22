import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";

export default function Modal({ handleCloseModal, openModal, children }) {
  return createPortal(
    <>
      {openModal && (
        <div className="absolute top-0 z-40 grid h-screen w-screen place-items-center backdrop-blur">
          <div className="relative z-50 m-auto min-h-[200px] min-w-[80%]  bg-white p-4 shadow-lg border-teal-500 rounded">
            <div className="flex justify-end">
                <IoMdClose onClick={handleCloseModal} className="self-end text-2xxl cursor-pointer"/>
            </div>
            {children}
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  );
}
