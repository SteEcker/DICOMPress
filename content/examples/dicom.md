# DICOM

## The Spleen on CT Imaging

The spleen is located in the left upper abdomen and plays a key role in filtering blood and immune response. On a **CT scan**, it can be easily identified by its size and location beneath the diaphragm and lateral to the stomach.

| **CT Phase**          | **Appearance**                                    |
|-----------------------|---------------------------------------------------|
| Non-contrast CT       | Homogeneous density, smooth, oval-shaped organ    |
| Arterial phase        | May appear heterogeneous due to vascular structure|
| Venous phase          | Uniform enhancement, clear boundaries             |

CT is preferred for spleen imaging because it provides detailed visualization of the organ's structure and vasculature, helping diagnose injuries, splenomegaly, or other conditions.


<script setup>
import DicomViewer from '../../components/DicomViewer.vue';
</script>

<div>

<DicomViewer
    primaryVolumeUrl="/http-server/image.nii.gz"
    overlayVolumeUrl="/http-server/label.nii.gz"
  />
  <DicomViewer
    primaryVolumeUrl="/http-server/image.nii.gz"
    overlayVolumeUrl="/http-server/label.nii.gz"
    sliceOrientation="coronal"
  />
  <DicomViewer
    primaryVolumeUrl="/http-server/image.nii.gz"
    overlayVolumeUrl="/http-server/label.nii.gz"
    sliceOrientation="sagittal"
  />
  <DicomViewer
    primaryVolumeUrl="/http-server/image.nii.gz"
    overlayVolumeUrl="/http-server/label.nii.gz"
    sliceOrientation="multiplanar"
  />
</div>