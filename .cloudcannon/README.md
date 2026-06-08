# CloudCannon Editor Guide

Welcome to the CloudCannon CMS for the **Pasifika Festivals Aotearoa** website! This guide will help you edit and publish content on the site.

## Site-Wide Settings

These data files control elements that appear across the entire site:

### Navigation & Footer

- [Edit Main Navigation](cloudcannon:collections/data:/edit?collection=data&path=%2Fsrc%2Fdata%2FmainNav.json&schema=false&editor=data) - The primary navigation menu at the top of every page, including dropdown menus (e.g. Festivals → Directory, Calendar)
- [Edit Footer](cloudcannon:collections/data:/edit?collection=data&path=%2Fsrc%2Fdata%2Ffooter.json&schema=false&editor=data) - Footer links, social media links, and footer copyright text

### Other Site Data

- [Edit SEO Settings](cloudcannon:collections/data:/edit?collection=data&path=%2Fsrc%2Fdata%2Fseo.json&schema=false&editor=data) - Site name, URL, description, logo, and social media metadata
- [Edit Events / Calendar](cloudcannon:collections/data:/edit?collection=data&path=%2Fsrc%2Fdata%2Fevents.json&schema=false&editor=data) - Upcoming festivals and events (appears in the home page and calendar sections, with their name, region, location, date, and time)

## Content Collections

The website content is organized into collections. Click on any collection to view and edit pages:

### [Pages Collection](cloudcannon:collections/pages/)

Main marketing and informational pages — including the home page, Resources, Members, Blog, and Search

### [Festivals Collection](cloudcannon:collections/festivals/)

Individual festival entries that appear in the festivals directory and calendar

### [Team Collection](cloudcannon:collections/team/)

Team and committee member profiles

## How to Edit Pages

### Visual Editor (Recommended)

1. Navigate to the page you want to edit from the collections sidebar
2. Click on the page to open it
3. The Visual Editor will load, showing you a live preview
4. Click on any element to edit it directly on the page
5. You can also use the sidebar to edit/reorder/etc.

### Content Editor

- Best for editing text-heavy content without visual context
- Shows formatted text with a simple editing interface
- Good for editing prose and long-form content

### Data Editor

- Shows the raw data structure
- Useful for making precise edits to configuration
- Required for editing the data files (navigation, footer, SEO, events)

## Working with Page Sections

Pages are built using **components** (also called "page sections"). Each section serves a specific purpose:

### Common Page Sections

- **Heroes** - Large introductory sections at the top of pages (with images, calendars, or split layouts)
- **Features** - Content sections with lists, grids, forms, testimonials, logos, or videos
- **Events** - Sections that display upcoming festivals and events from the events data file
- **Festivals** - Sections that list or showcase festivals from the Festivals collection
- **Info Blocks** - Focused blocks of supporting information
- **People** - Team or committee member sections
- **CTAs** - Call-to-action sections encouraging visitors to take action

To add a section, open a page in the Visual Editor, find the section list in the sidebar, and click **Add**. You can reorder sections by dragging them in the sidebar.

## Publishing Workflow

Your site uses a **branching workflow** for safe publishing:

### Main Branch

- **Purpose:** The live production website
- This is what your visitors see

### Staging Branch

- **Purpose:** Test changes before they go live
- All edits you make are typically saved to the staging branch first
- Preview your changes here before publishing to production

### Feature Branches (Recommended)

Feature branches are useful for:

- **Larger projects** that will take multiple days or weeks to complete
- **Experimental changes** you want to test without affecting the main staging branch
- **Multiple editors** working on different features at the same time
- **Long-term content** that isn't ready to publish yet

#### Creating a Feature Branch

1. Go to the project in CloudCannon
2. Click **Create a Site**
3. Give it a descriptive name (e.g., "2027-festivals-update" or "new-resources-pages")
4. Choose to branch from staging (recommended)
5. Make your changes on this branch without affecting staging

### How to Save and Publish

#### Saving Your Work

1. Make your edits in CloudCannon
2. Click **Save** in the top-right corner
3. Your changes are saved to the current site/branch
4. The staging site will rebuild automatically (typically takes 1-3 minutes)
5. Preview your changes on the staging URL

#### Publishing Your Changes

1. After reviewing your changes on your current branch, [go to the **Publishing** tab](cloudcannon:publish) in CloudCannon
2. You'll see a summary of changes ready to publish
3. Click the **Publish** button to merge your changes to the publish branch:
   - **From staging:** Publishes to production (main branch) - your changes go live!
   - **From a feature branch:** Publishes to staging - ready for final review before going live
4. The target site will rebuild (takes 1-3 minutes)
5. Your changes are now on the publish branch

**Important:**

- Always preview your changes before publishing
- If publishing from staging to production, make sure you've thoroughly tested on staging first!

#### Pulling Changes from the Publish Branch

Sometimes other team members might make changes on the branch you're publishing to (e.g., someone editing staging while you're on a feature branch, or changes made to production). To get those changes into your current branch:

1. [Go to the **Publishing** tab](cloudcannon:publish) in CloudCannon
2. If there are new changes on the publish branch, you'll see a notification
3. Click the **Update From Publish Branch** button to bring those changes into your current branch
4. Your site will update with the latest content and rebuild

This ensures you're always working with the most up-to-date version of the site and helps prevent conflicts when publishing your own changes.

**Example scenarios:**

- On a feature branch? Pull from staging to get the latest approved content
- On staging? Pull from production to sync any hotfixes or direct updates

## Tips for Success

### Before Making Changes

- ✅ Preview the page you're about to edit
- ✅ Make a note of what you want to change
- ✅ If making major changes, consider working on one section at a time

### While Editing

- ✅ Save frequently
- ✅ Use the Visual Editor to see changes in real-time
- ✅ Test links after adding them
- ✅ Keep descriptions concise and scannable

### After Editing

- ✅ Review the entire page in the Visual Editor
- ✅ Check the page on the staging site
- ✅ Test on mobile (use browser developer tools or your phone)
- ✅ Only publish to production when you're confident

### Working with Festivals & Events

Festival information lives in two places:

- **Festivals collection** - full festival pages (directory entries)
- **Events data file** - the upcoming events list shown in calendar and event sections (name, region, location, date, time)

To add a new festival to the directory:

1. Open the [Festivals Collection](cloudcannon:collections/festivals/)
2. Click **Add** → **Add New Festival**
3. Fill in the details and save

To update the upcoming events list:

1. [Edit the events data file](cloudcannon:collections/data:/edit?collection=data&path=%2Fsrc%2Fdata%2Fevents.json&schema=false&editor=data)
2. Add, edit, or remove events
3. Save and publish

## Getting Help

### Common Questions

**Q: I made a mistake. Can I undo it?**<br> A: Yes! If you haven't saved yet, you can discard your changes in CloudCannon. If you've already saved, contact your development team.

**Q: How do I add a completely new page?**<br> A: Go to the appropriate collection (e.g., Pages, Festivals), click **Add** → **Add New Page** and start editing.

**Q: The site looks broken in the Visual Editor. What do I do?**<br> A: Try refreshing the page. If that doesn't work, save your work and contact your technical team.

### Need Technical Support?

Contact your development team if you:

- Encounter errors or bugs
- Need to create custom components
- Have questions about site structure
- Need help with complex changes

---

**Happy editing!** Remember: save often, preview on staging, and publish with confidence.
