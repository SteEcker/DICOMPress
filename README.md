# 🩻 DICOMPress

![License](https://img.shields.io/badge/license-MIT-blue.svg) ![VitePress](https://img.shields.io/badge/VitePress-Framework-blue) ![Vue.js](https://img.shields.io/badge/Vue.js-Frontend-green) ![Docker](https://img.shields.io/badge/Docker-Easy--Deployment-blue)

### Seamless integration of 3D medical images into Markdown

Welcome to **DICOMPress**, a toolkit designed for professionals in healthcare, education, and research who want to create web-based protocols with embedded, interactive 3D medical images (CT/MRI). Whether for clinical studies, educational material, or research documentation, **DICOMPress** combines the power of **VitePress** and **Niivue** to deliver high-performance, modern web technology for medical imaging.

This project builds upon:
- **[VitePress](https://github.com/vuejs/vitepress)**: A Vite-powered static site generator with markdown support and Vue components integration.
- **[Niivue](https://github.com/niivue/niivue)**: A high-performance, WebGL-based DICOM viewer for rendering 3D medical images (CT/MRI) with advanced features like segmentation overlays.

![Demo GIF](./assets/gif/demo.gif)

## ✨ Features

- **Interactive DICOM Viewer**: Scroll through CT or MRI image stacks embedded in your Markdown pages.
- **Overlay Segmented Structures**: Highlight critical anatomical structures and seamlessly integrate them with 3D images to enhance the clarity of target concepts.
- **Smooth Integration with VitePress**: Utilize VitePress to create fast, responsive, and easy-to-navigate documentation sites.
- **Powered by Niivue**: Leverage Niivue’s powerful, WebGL-based medical image visualization for high-quality 3D rendering and smooth interactivity.
- **Customizable and Extensible**: Easily adapt and extend the viewer to suit your specific use cases with flexible configurations.
- **Fully Configured for Easy Hosting**: Comes with **Nginx** and **Docker-Compose** setup, making it easy to deploy and host on any server.

## 🚀 Quick Start

### Development Mode

To get started with **DICOMPress** for development, follow these steps:

```bash
# Install dependencies
npm i

# Start VitePress in development mode
npm run docs:dev
```

This will run the development server, allowing you to view and interact with the site locally at `http://localhost:3001`.

### Docker-Compose for DICOM Server and Viewer

The **Docker-Compose** configuration not only runs the VitePress development server but also sets up a **DICOM server** using `http-server` to serve the DICOM files for viewing. It uses **Nginx** to proxy these services, making it easier to host on any server.

```bash
# Build and run the services, including the DICOM server and proxy
docker-compose up --build
```

The Nginx configuration exposes:
- The **VitePress** server at the root URL (`/`), proxied to port `3001`.
- The **DICOM server** at `/http-server/`, proxied to port `4000`.

## 📚 Use Cases

- **Clinical Protocols**: Create interactive, image-rich protocols that enhance the communication of complex medical data.
- **Educational Content**: Develop web-based learning modules with live 3D visualizations to improve the understanding of medical imaging concepts.
- **Research Documentation**: Easily integrate and share imaging data and segmented structures with collaborators, directly within your Markdown-based research notes.

## 🛠 Configuration

Customize the DICOM viewer to fit your needs by tweaking the available Vue components and Niivue settings. The configuration options allow for control over:

- **Image Stack Controls**: Adjust scroll speed, view range, and segmentation overlays.
- **Interactive Annotations**: Add notes or labels to key structures for educational purposes.
- **Performance Optimization**: Configure caching and image processing for high-performance visualization on various devices.

## 🖼 Image Sources

The images used in this repo are sourced from the **[Medical Decathlon Dataset](http://medicaldecathlon.com/)**. This dataset comes from the **Memorial Sloan Kettering Cancer Center**.

## 🤝 Contributions

We welcome contributions! Feel free to fork this repository, submit pull requests, or open issues for any bugs or feature requests.

## 🔗 Resources

- [VitePress Documentation](https://vitepress.vuejs.org/)
- [Niivue Documentation](https://niivue.github.io/niivue/)
- [Vue.js Documentation](https://vuejs.org/)
- [DICOM](https://www.dicomstandard.org/)