import { useState } from "react";
import ContactForm from "./ContactForm";
function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={openPopup}
        className="bg-[#77773f] px-8 py-3 text-lg font-medium text-white hover:bg-[#666633]"
      >
        Enquire Now
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4"
          onClick={closePopup}
        >
          <div
            className="relative w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactForm
              formData={{
                name: "",
                mobile: "",
                email: "",
              }}
              loading={false}
              message=""
              error=""
              handleChange={() => {}}
              handleMobileChange={() => {}}
              handleSubmit={(e) => e.preventDefault()}
              onClose={closePopup}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PopupForm;