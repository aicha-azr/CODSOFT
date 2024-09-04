# Tech Blog Platform

A simple tech blog platform built with the MERN stack, featuring a rich text editor, image uploading, and JWT authentication. The platform allows users to create, update, and manage blog posts seamlessly.

## 🚀 Features

- **Rich Text Editing**: Powered by Draft.js, enabling complex text formatting and media embedding.
- **Image Upload**: Upload images directly to the server and embed them in posts.
- **JWT Authentication**: Secure authentication with JSON Web Tokens (JWT).
- **Responsive Design**: Fully responsive design built with Tailwind CSS, optimized for large devices.
- **AOS Animations**: Animate on scroll for a smooth and engaging user experience.
- **Toast Notifications**: Feedback for user actions using react-toastify.
- **SideBar Navigation**: A fixed sidebar for easy navigation through the platform.

## 🛠️ Installation

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (>= 14.x)
- MongoDB

### Clone the Repository

```bash
git clone [https://github.com/yourusername/tech-blog-platform.git](https://github.com/aicha-azr/CODSOFT.git)
cd CODSOFT/Blog_Platform
```
### Install Dependencies
```bash
npm install
```
### Configure Environment Variables
Create a .env file in the root of your project and add the following environment variables:
```bash
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```
### Run the Development Server
```bash
npm start
```
## 🎨 Usage
### Creating and Editing Posts
* Navigate to the "My Posts" section using the sidebar.
* Click on "Create Post" to start a new blog post.
* Use the toolbar to format your text and embed images.
* Click "Update Post" to save your changes.
### Authentication
* Sign in using your credentials to access the dashboard.
* JWT is used to manage sessions and secure API endpoints.
* AOS (Animate On Scroll)
* AOS is integrated into the project to add scroll animations. You can customize the animations in the component files.
