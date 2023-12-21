import React, { useState } from "react";
import Navbar from "../../Components/navbar";
import Form from "../../pages/Form/form";
import "./createadd.css";
import Image1 from "../../image/th.jpg";
import Image2 from "../../image/th (2).jpg";
import Image3 from "../../image/th (1).jpg";

export default function CreateAdd() {
  const [selectedImages, setSelectedImages] = useState({
    1: false,
    2: false,
    3: false,
  });
  const [currentPage, setCurrentPage] = useState("createAd");

  const handleCheckboxChange = (imageIndex) => {
    setSelectedImages((prevSelectedImages) => ({
      ...prevSelectedImages,
      [imageIndex]: !prevSelectedImages[imageIndex],
    }));
  };

  const handleNextButtonClick = () => {
    const selectedImageIndexes = Object.keys(selectedImages).filter(
      (index) => selectedImages[index]
    );

    if (selectedImageIndexes.length > 0) {
      console.log(`Selected image indexes: ${selectedImageIndexes}`);
      
      setCurrentPage("nextPage");
    } else {
      alert("Please select at least one image before proceeding.");
    }
  };

  return (
    <>
      <Navbar />
      {currentPage === "createAd" && (
        <div className="createadd-container">
          <h2>Create Ad</h2>
          <div className="image-container">
            {[1, 2, 3].map((imageIndex) => (
              <div key={imageIndex} className="image-wrapper">
                <img
                  className="profile-avatar"
                  src={
                    imageIndex === 1
                      ? Image1
                      : imageIndex === 2
                      ? Image2
                      : Image3
                  }
                  alt={`Profile Avatar ${imageIndex}`}
                />
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={selectedImages[imageIndex]}
                    onChange={() => handleCheckboxChange(imageIndex)}
                  />
                  Select Image {imageIndex}
                </label>
              </div>
            ))}
          </div>
          <button className="next-button" onClick={handleNextButtonClick}>
            Next
          </button>
        </div>
      )}

      {currentPage === "nextPage" && (
        <div>
           <Form />
        </div>
      )}
    </>
  );
}
