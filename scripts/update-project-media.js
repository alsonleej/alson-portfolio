const fs = require('fs');
const path = require('path');

// Paths
const projectsDir = path.join(__dirname, '../public/projects');
const dataFile = path.join(__dirname, '../data/my.ts');

// Video file extensions
const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];

// Helper function to check if a file is a video
const isVideo = (filename) => {
  return videoExtensions.some(ext => filename.toLowerCase().endsWith(ext));
};

// Helper function to get sorted media files for a project
const getProjectMediaFiles = (projectPath) => {
  try {
    const files = fs.readdirSync(projectPath);
    
    // Filter for media files and sort numerically
    const mediaFiles = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return videoExtensions.includes(ext) || ['.png', '.jpg', '.jpeg', '.gif', '.webp'].includes(ext);
      })
      .sort((a, b) => {
        // Extract numbers from filenames for proper sorting
        const numA = parseInt(a.match(/\d+/)?.[0] || '0');
        const numB = parseInt(b.match(/\d+/)?.[0] || '0');
        return numA - numB;
      });
    
    return mediaFiles;
  } catch (error) {
    console.warn(`Warning: Could not read directory ${projectPath}:`, error.message);
    return [];
  }
};

// Function to update the data file
const updateDataFile = () => {
  try {
    // Read the current data file
    let dataContent = fs.readFileSync(dataFile, 'utf8');
    
    // Get all project directories
    const projectDirs = fs.readdirSync(projectsDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    console.log('Found project directories:', projectDirs);
    
    // For each project directory, find the corresponding project in the data
    projectDirs.forEach(projectDir => {
      const mediaFiles = getProjectMediaFiles(path.join(projectsDir, projectDir));
      
      if (mediaFiles.length === 0) {
        console.warn(`No media files found in ${projectDir}`);
        return;
      }
      
      console.log(`${projectDir}: ${mediaFiles.join(', ')}`);
      
      // Create the media array string
      const mediaArray = `["${mediaFiles.join('", "')}"]`;
      
      // Find and replace the media array for this project
      const projectId = projectDir;
      const regex = new RegExp(`getProjectMedia\\("${projectId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}", \\[.*?\\]\\)`, 'g');
      
      if (dataContent.match(regex)) {
        dataContent = dataContent.replace(regex, `getProjectMedia("${projectId}", ${mediaArray})`);
        console.log(`Updated media for ${projectId}`);
      } else {
        console.warn(`Could not find project "${projectId}" in data file`);
      }
    });
    
    // Write the updated content back to the file
    fs.writeFileSync(dataFile, dataContent, 'utf8');
    console.log('✅ Successfully updated project media arrays!');
    
  } catch (error) {
    console.error('Error updating data file:', error);
    process.exit(1);
  }
};

// Run the update
updateDataFile(); 