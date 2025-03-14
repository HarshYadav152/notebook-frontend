import React from 'react'

export default function About() {
  return (
    <>
      <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About - Notebook Web App</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    body {
      background-color: #e0e5ec;
      font-family: 'Poppins', sans-serif;
      color: #333;
    }
    .neumorphism {
      background: #e0e5ec;
      border-radius: 15px;
      box-shadow: 5px 5px 10px #a3b1c6, -5px -5px 10px #ffffff;
      padding: 2rem;
      margin: 2rem auto;
      max-width: 800px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    h1, h2 {
      color: #4a5568;
      font-weight: 700;
    }
    p {
      color: #4a5568;
      line-height: 1.8;
    }
    .btn-primary {
      background-color: #4a5568;
      border: none;
      border-radius: 10px;
      padding: 10px 20px;
      box-shadow: 3px 3px 6px #a3b1c6, -3px -3px 6px #ffffff;
      transition: all 0.3s ease;
    }
    .btn-primary:hover {
      background-color: #2d3748;
      box-shadow: inset 3px 3px 6px #a3b1c6, inset -3px -3px 6px #ffffff;
    }
    .feature-icon {
      font-size: 2rem;
      color: #4a5568;
      margin-bottom: 1rem;
    }
    .tech-icon {
      font-size: 1.5rem;
      color: #4a5568;
      margin: 0 0.5rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="neumorphism text-center">
      <h1 class="mb-4">About Notebook Web App</h1>
      <p class="lead">
        Notebook Web App is a modern, cloud-based note-taking application designed to help you organize your thoughts, ideas, and tasks securely. Built with cutting-edge technologies, it offers a seamless and intuitive experience for users to create, manage, and access their notes anytime, anywhere.
      </p>
    </div>

    <div class="neumorphism">
      <h2 class="mb-4">Features</h2>
      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="neumorphism p-3">
            <div class="feature-icon">📝</div>
            <h4>User Authentication</h4>
            <p>Secure signup and login functionality using JWT and bcrypt for password hashing. Your data is always protected.</p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="neumorphism p-3">
            <div class="feature-icon">🗂️</div>
            <h4>Note Management</h4>
            <p>Create, read, update, and delete notes effortlessly. All notes are stored securely in the cloud and associated with your account.</p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="neumorphism p-3">
            <div class="feature-icon">📱</div>
            <h4>Responsive Design</h4>
            <p>Built with Bootstrap, the app is fully responsive and works seamlessly on all devices, from desktops to smartphones.</p>
          </div>
        </div>
        <div class="col-md-6 mb-4">
          <div class="neumorphism p-3">
            <div class="feature-icon">🔒</div>
            <h4>Secure Cloud Storage</h4>
            <p>Your notes are stored in a MongoDB database, ensuring data integrity and security.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="neumorphism">
      <h2 class="mb-4">Technologies Used</h2>
      <div class="text-center">
        <div class="tech-icon">🚀 Node.js</div>
        <div class="tech-icon">🌐 Express.js</div>
        <div class="tech-icon">🗄️ MongoDB</div>
        <div class="tech-icon">🔑 JWT</div>
        <div class="tech-icon">🔒 bcrypt</div>
        <div class="tech-icon">🎨 Bootstrap</div>
      </div>
    </div>

    <div class="neumorphism text-center">
      <h2 class="mb-4">Get Started</h2>
      <p>Ready to organize your life? Sign up now and start taking notes effortlessly!</p>
      <a href="/signup" class="btn btn-primary">Sign Up</a>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
    </>
  )
}
