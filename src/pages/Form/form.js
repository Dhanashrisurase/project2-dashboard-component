import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  const [heading01, setHeading01] = useState("");
  const [heading02, setHeading02] = useState("");
  const [description, setDescription] = useState("");
  const [landscapeImage, setLandscapeImage] = useState("");
  const [portraitImage, setPortraitImage] = useState("");
  const [squareImage, setSquareImage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      heading01,
      heading02,
      description,
      landscapeImage,
      portraitImage,
      squareImage,
      videoUrl,
      businessName,
      buttonLabel,
      websiteUrl,
    });

    alert("Form submitted!");

    navigate("/dashboard");
  };
  const handleBackButtonClick = () => {
    
    window.history.back();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="heading">
        <div>
          <label>
            Heading 01:
            <input
              type="text"
              value={heading01}
              onChange={(e) => setHeading01(e.target.value)}
            />
          </label>

          <label>
            Heading 02:
            <input
              type="text"
              value={heading02}
              onChange={(e) => setHeading02(e.target.value)}
            />
          </label>
        </div>

        <label className="desscription">
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div className="img">
        <label>
          Landscape Marketing Image:
          <input
            type="text"
            onChange={(e) => setLandscapeImage(e.target.value)}
          />
        </label>

        <label>
          Portrait Marketing Image:
          <input
            type="text"
            onChange={(e) => setPortraitImage(e.target.value)}
          />
        </label>

        <label>
          Square Marketing Image:
          <input type="text" onChange={(e) => setSquareImage(e.target.value)} />
        </label>
      </div>
      <label>
        Video URL:
        <input
          type="text"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
      </label>
      <div className="img">
        <label>
          Business Name:
          <input
            type="text"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
          />
        </label>

        <label>
          Button Label:
          <input
            type="text"
            value={buttonLabel}
            onChange={(e) => setButtonLabel(e.target.value)}
          />
        </label>
      </div>
      <label>
        Website URL:
        <input
          type="text"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
        />
      </label>

      <button type="submit">Submit</button>
      <button type="button" onClick={handleBackButtonClick}>
        Back
      </button>
    </form>
  );
};

export default Form;
