# Project Images & Videos

This directory contains images for displaying your projects on the portfolio website.

## Current structure

```
public/
├── images/
│   ├── profile-photo.jpg
│   ├── nyuad-logo.png
│   └── projects/
│       ├── clout-demo.jpg
│       ├── project2-demo.jpg
│       └── project3-demo.jpg
└── videos/
    └── projects/
        └── (place video files here)
```

## Adding new project images

1. Save your project screenshots, demos, or images in this directory
2. Recommended image dimensions: 800x600px or 16:9 aspect ratio
3. Optimize images for web to keep file sizes small (< 500KB per image)
4. Use descriptive filenames like `project-name-demo.jpg` or `project-name-screenshot.jpg`

## Adding videos to your projects

To add videos:

1. Add video files to `/public/videos/projects/` directory
2. Use web-optimized formats like MP4 with H.264 encoding
3. Keep videos short (ideally under 30 seconds) and optimized for web (< 5MB)
4. Update the component markup to include video elements or modify the play button overlay to link to your video

### Example video implementation

```jsx
<div className="relative h-48 w-full overflow-hidden">
  {/* Replace the Image component with a video */}
  <video 
    src="/videos/projects/your-video-file.mp4"
    className="object-cover w-full h-full"
    controls
    poster="/images/projects/your-thumbnail.jpg"
  />
</div>
```

Or for auto-playing videos (muted is required for autoplay):

```jsx
<div className="relative h-48 w-full overflow-hidden">
  <video 
    src="/videos/projects/your-video-file.mp4"
    className="object-cover w-full h-full"
    autoPlay
    muted
    loop
    playsInline
  />
</div>
```

## Best practices

1. Optimize all images and videos for web performance
2. Use consistent aspect ratios for all project media
3. Include thumbnails for videos to improve page load speed
4. Consider accessibility by adding proper alt text to images and captions for videos 