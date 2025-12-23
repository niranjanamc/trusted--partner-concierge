# Managing Destination Images

This folder contains all the images used in the Destinations page of the application.

## 📂 File Naming Convention
Images are named using a standardized format to match them with their respective places and attractions:
`[place-name]_[entity-name]_[type].[extension]`

**Examples:**
- `hampi_virupaksha-temple_attraction.jpg`
- `nandi-hills_main_main.jpg`

## 🔄 How to Update an Image

### Scenario A:Replacing an existing Photo (.jpg)
If the image in this folder is already a photo (e.g., `hampi_main_main.jpg`), simply:
1.  Get your new high-quality image.
2.  Rename it to **exactly** match the existing filename (e.g., `hampi_main_main.jpg`).
3.  Replace the file in this folder.
4.  Refresh the website.

### Scenario B: Replacing a Placeholder (.svg)
Many files currently might be `.svg` files (e.g., `hampi_main_main.svg`). These are generated placeholders used when the original download failed. To replace these with real photos:
1.  Delete the placeholder `.svg` file.
2.  Add your new photo to this folder (e.g., `hampi_main_main.jpg`).
3.  **Crucial Step:** You must update the code to point to the new file extension.
    - Open `src/data/destinations.js`.
    - Search for the old filename (e.g., `hampi_main_main.svg`).
    - Change the extension to `.jpg` (e.g., `hampi_main_main.jpg`).
    - Save the file.

## 📋 Mapping Reference
For a full list of which file corresponds to which destination, refer to the **Image Mapping Table** located at:
`src/data/image_mapping.md`

This table lists the:
- **Place Name**
- **Attraction/Entity Name**
- **Filename** currently assigned in the system.
