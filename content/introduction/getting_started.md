## 🛠 Getting Started

### Step 1: Install Prerequisites

Before you can run **DICOMPress**, you'll need to install:

1. **Docker**: Docker allows you to run applications in isolated environments called containers, making it easier to run services without complex setup. Install Docker by following the instructions here: [Install Docker](https://www.docker.com/get-started).

2. **Node.js** (Optional, for development): Node.js is needed if you plan to modify or customize the project. Install it from here: [Install Node.js](https://nodejs.org/).

Make sure both Docker and Node.js are correctly installed by running the following commands in your terminal:

```bash
# Check if Docker is installed
docker --version
 
# Check if Node.js is installed (optional)
node --version
```

### Step 2: Clone the Repository

Once you have Docker (and optionally Node.js) installed, you can download the project by cloning the GitHub repository. Open a terminal and run:

```bash
git clone https://github.com/your-username/dicompress.git
```

Navigate into the project folder:

```bash
cd dicompress
```

### Step 3: Running DICOMPress

#### Option 1: Using Docker (Recommended for Production)

With Docker, you can run everything without needing to install extra dependencies like Node.js. The **Docker-Compose** file handles the VitePress server, DICOM server, and Nginx proxy for you.

Run the following command to start the project:

```bash
docker-compose up --build
```

This command will:
- Start the VitePress development server (at `http://localhost`).
- Serve DICOM images via the DICOM server (available at `http://localhost/http-server/`).
- Set up an Nginx proxy that combines both services into a single web interface accessible at `http://localhost`.

Once the services have started, open your browser and navigate to:

```bash
http://localhost
```

You'll be able to explore the **DICOMPress** site, interact with 3D medical images, and see how it all works.

#### Option 2: Running Locally with Node.js (For Development)

If you want to customize the project, or if you're actively developing new features, you'll need to install the project dependencies using **Node.js**.

1. Install the required dependencies:

   ```bash
   npm install
   ```

2. Start the VitePress development server:

   ```bash
   npm run docs:dev
   ```

3. Open your browser and navigate to:

   ```bash
   http://localhost:3001
   ```

## 🖼 Using the DICOM Viewer Component

To embed and interact with 3D medical images in your markdown files, you can use the **`DicomViewer`** component. Below is an example of how you can use it in a markdown file:

```markdown
# DICOM Example

<script setup>
import DicomViewer from '../../components/DicomViewer.vue';
</script>

<div>
  <DicomViewer
    primaryVolumeUrl="/http-server/image.nii.gz"
    overlayVolumeUrl="/http-server/label.nii.gz"
  />
</div>
```

- **`primaryVolumeUrl`**: This is the URL pointing to the primary volume, such as a CT or MRI scan.
- **`overlayVolumeUrl`**: This optional property points to a volume used for overlaying segmentations (such as labeled structures or organs).

Once you add this code, the viewer will render in your Markdown page, allowing users to scroll through image stacks and view the segmented structures interactively.

## 🔧 Configuring VitePress

For more advanced users looking to customize the site (e.g., adding pages, modifying the sidebar, or changing the site layout), the VitePress configuration is fully customizable. All configurations are managed in the `.vitepress/config.ts` file.

To learn more about how to configure and customize VitePress, please refer to the official VitePress documentation:

- [VitePress Documentation](https://vitepress.vuejs.org/)

This documentation covers:
- How to modify the site title and metadata.
- How to structure your documentation with multiple pages.
- How to customize the sidebar and navigation.
- Additional features like deploying to production, adding plugins, and more.

