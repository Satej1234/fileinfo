const fileInput = document.getElementById('fileInput');
const fileInfo = document.getElementById('fileInfo');
const preview = document.getElementById('preview');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  fileInfo.innerHTML = '';
  preview.innerHTML = '';

  if (file) {
    // Show file info
    fileInfo.innerHTML = `
      <p><strong>Name:</strong> ${file.name}</p>
      <p><strong>Size:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
      <p><strong>Type:</strong> ${file.type || 'Unknown'}</p>
      <p><strong>Last Modified:</strong> ${new Date(file.lastModified).toLocaleString()}</p>
    `;

    // File preview
    const fileURL = URL.createObjectURL(file);

    if (file.type.startsWith('image/')) {
      const img = document.createElement('img');
      img.src = fileURL;
      img.alt = 'Image preview';
      preview.appendChild(img);
    } else if (file.type.startsWith('video/')) {
      const video = document.createElement('video');
      video.src = fileURL;
      video.controls = true;
      preview.appendChild(video);
    } else {
      preview.innerHTML = '<p>No preview available for this file type.</p>';
    }
  } else {
    fileInfo.innerHTML = "<p>No file selected.</p>";
  }
});
