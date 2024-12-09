# ImPics 🎨🖼️

ImPics is a modern web application that empowers users to explore stunning images through the Shutterstock API and create breathtaking AI-generated visuals using the Hugging Face API. With an intuitive interface and seamless functionality, ImPics redefines how users interact with images.

## Features 🚀

- **Explore Images:**
  Search and browse high-quality images curated from Shutterstock, with options to download, share, or add to favorites.
- **Generate AI Images:**
  Provide a text prompt to generate unique AI images using Hugging Face’s advanced models.
- **Interactive Design:**
  Responsive and aesthetic design for both desktop and mobile users.
- **User-Friendly Navigation:**
  Clean and straightforward navigation with hover effects, modals, and tooltips.

## Tech Stack 🛠️

- **Frontend:**
  - React.js with Vite
  - TailwindCSS for styling
- **Backend:**
  - Nodejs
  - Express
- **APIs:**
  - Shutterstock API for image exploration
  - Hugging Face API for AI image generation
- **Deployment:**
  - Frontend Hosted on [Vercel](https://vercel.com)
  - Backend Hosted on [Render](https://render.com)

## Installation 💻

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/abuaslamtech/impics.git
   cd impics
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Add environment variables:
   Create a `.env` file in the project root with the following variables:
   ```env
   REACT_APP_SHUTTERSTOCK_API_KEY=your_shutterstock_api_key
   REACT_APP_HUGGINGFACE_API_KEY=your_huggingface_api_key
   ```
4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## API Integration 🔗

### Shutterstock API

- Used for fetching and displaying high-quality images.
- Refer to the [Shutterstock API Documentation](https://developers.shutterstock.com/) for more details.

### Hugging Face API

- Generates AI images based on user prompts.
- Refer to the [Hugging Face API Documentation](https://huggingface.co/docs) for setup and usage.

## Deployment 🌐

The app is deployed on Vercel for fast and reliable access.

### Deployment Steps

1. Push the project to a GitHub repository.
2. Connect the repository to Vercel.
3. Configure the required environment variables on Vercel.
4. Deploy! 🎉

## Usage 🖥️

- **Homepage:**
  Choose to either explore images or generate AI images.
- **Explore Images Page:**
  Search for images, hover for options (download, share, favorite), or expand for a detailed view.
- **Generate AI Images Page:**
  Enter a prompt and let the AI create something magical.

## Screenshots 📸

![Homepage](https://via.placeholder.com/800x400)
_Caption: Homepage showcasing options for exploring and generating images._

![Explore Images](https://via.placeholder.com/800x400)
_Caption: Discover high-quality images with interactive options._

![Generate AI Images](https://via.placeholder.com/800x400)
_Caption: Enter prompts to create custom AI-generated visuals._

## Contributing 🤝

Contributions are welcome!

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License 📜

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments 🙏

- [Shutterstock API](https://developers.shutterstock.com/)
- [Hugging Face](https://huggingface.co/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

**Let your creativity shine with ImPics!**
