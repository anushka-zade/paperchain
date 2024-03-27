import React, { useState } from "react";
import { content } from "../Content";

const DocumentUpload = ({ onUpload }) => {
  const { hero } = content;
  const [document, setDocument] = useState(null);

  const handleDocumentUpload = (event) => {
    const uploadedDocument = event.target.files[0];
    setDocument(uploadedDocument);
  };

  const handleUpload = () => {
    if (document) {
      onUpload(document);
      setDocument(null);
    } else {
      alert("Please upload a document");
    }
  };

  return (
    <section id="document-upload" className="overflow-hidden relative">
      {/* Image */}
      <img
        src={hero.image1}
        style={{
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          opacity: 0.7,
          position: "absolute", // Ensure image is below text content
        }}
        alt="..."
        className="h-full object-cover"
      />

      {/* Text content */}
      <div className="min-h-screen relative flex flex-col justify-center items-center">
        <div className="pb-16 px-6 pt-5 text-center" data-aos="fade-up">
          <div className="flex flex-col gap-10 mt-10 z-10">
            {" "}
            {/* Adjust z-index to ensure text is above image */}
            <div class="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 -mt-6 mb-4 grid h-28 place-items-center overflow-hidden rounded-xl bg-gradient-to-tr from-cyan-600 to-cyan-400 bg-clip-border text-white shadow-lg shadow-cyan-500/40">
                <h3 class="block font-sans text-3xl font-semibold leading-snug tracking-normal text-white antialiased">
                  Document Upload
                </h3>
              </div>
              <div class="flex flex-col gap-4 p-6">
                <label for="file" class="custum-file-upload">
                  <div class="icon flex justify-center items-center">
                    <img
                      className="w-32"
                      src="https://cdn-icons-png.freepik.com/512/9737/9737932.png"
                    />
                  </div>
                  <div class="text">
                    <p class="mt-6 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
                      Click to upload image
                    </p>
                  </div>
                  <input
                    onChange={handleDocumentUpload}
                    id="file"
                    type="file"
                    style={{display:"none"}}
                  />
                </label>
                <button
                  onClick={handleUpload}
                  className="bg-black text-white py-2 px-4 rounded-lg focus:outline-none"
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentUpload;
