import { FaDownload } from "react-icons/fa";

const ImageCard = ({ image }) => {
  const handleDownload = async () => {
    try {
      // Fetch the image
      const response = await fetch(image.urls.full);
      const blob = await response.blob();

      // Create a temporary link element
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "impics-explore.png";

      // Programmatically trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback to default download behavior
      window.open(image.links.download, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-elegant group">
      {/* Image */}
      <img
        src={image.urls.full}
        alt="Preview"
        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Download Button */}
      <div className="p-4 flex items-center justify-between">
        <button
          onClick={handleDownload}
          className="
            bg-primary-soft text-white
            px-4 py-2 rounded-full
            flex items-center
            hover:bg-primary-soft/90
            transition-colors
          "
        >
          <FaDownload className="mr-2" />
          Download
        </button>
        <span className="text-xs md:text-sm text-neutral-dark">
          Photo by {image.user.name}
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
