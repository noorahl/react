import {useState} from 'react';
const Upload = () => {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Lähetetään:', file);
  };

  const handleFileChange = (event) => {
    const browserFile = event.target.files[0];
    console.log('Event:');
    setFile(browserFile);
    setFileUrl(URL.createObjectURL(browserFile));
  };

  return (
    <>
      <h2>Upload Simple demo</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="filinput"
          accept="image/*, video/*"
          onChange={handleFileChange}
        />
        <button type="submit">Lähetä</button>
      </form>

      {/* ehdollinen renderöinti reactissa */}

      {file && (
        <>
          <h2>Upattu tiedosto:</h2>
          <img src={fileUrl} alt="upattu kuva" width={200} />
        </>
      )}
    </>
  );
};

export default Upload;
