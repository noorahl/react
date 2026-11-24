import {useState} from 'react';
import useForm from '../hooks/formHooks';
import {useFile} from '../hooks/apiHooks';

const Upload = () => {
  const [file, setFile] = useState(null);

  const initValues = {
    title: '',
    description: '',
  };

  const {postFile} = useFile();

  const doUpload = async (FormData) => {
    const token = localStorage.getItem('token');

    try {
      // TODO: call postFile function (see below)
      console.log('File:', file);
      const fileResponse = await postFile(file, token);
      console.log('APIVASTAUS', fileResponse);

      const mediaResponse = await postMedia(fileResponse, inputs, token);

      // TODO: call postMedia function (see below)
      console.log('FormData', FormData);
      // TODO: redirect to Home
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleFileChange = (evt) => {
    if (evt.target.files) {
      console.log(evt.target.files[0]);
      // TODO: set the file to state
      setFile(evt.target.files[0]);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doUpload,
    initValues,
  );

  return (
    <>
      <h1>Upload</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            type="text"
            id="title"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            rows={5}
            id="description"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label htmlFor="file">File</label>
          <input
            name="file"
            type="file"
            id="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
          />
        </div>
        <img
          src={
            file
              ? URL.createObjectURL(file)
              : 'https://placehold.co/200?text=Choose+image'
          }
          alt="preview"
          width="200"
        />
        <button
          type="submit"
          disabled={file && inputs.title.length > 3 ? false : true}
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Upload;
