2. Responsive Design Implementation Using Tailwind CSS
mandatory
Objective: Enhance the UserProfile component to be responsive and adaptable to different device sizes using Tailwind CSS’s responsive utilities.

Task Description:
Building on the previous task, this step involves adjusting the UserProfile component to ensure it displays attractively across various screen sizes. Use Tailwind CSS’s responsive utilities to make the component’s layout and typography adjust dynamically based on the viewport size.

Instructions for Responsive Styling:
Responsive Container Adjustments:

Ensure the container maintains comfortable margins and padding on smaller screens but utilizes more space on larger screens.
Example modifications:
Padding should be smaller on smaller devices (p-4 on sm: screens and p-8 on md: screens and above).
The maximum width should adapt to screen size (use max-w-xs on small screens and max-w-sm on medium screens and above).
Responsive Typography:

Adjust the font size of the heading and paragraph text to increase readability on different devices.
Example modifications:
The heading should be slightly smaller on smaller devices (text-lg on sm: screens and text-xl on md: screens and above).
The paragraph text should maintain readability without overwhelming smaller screens (text-sm on sm: screens and text-base on md: screens and above).
Responsive Image Sizing:

The image should scale appropriately across devices to ensure it does not dominate the layout on smaller screens but remains visible.
Example modifications:
Use w-24 h-24 on sm: screens and w-36 h-36 on md: screens and above for the profile image.
Repo:

GitHub repository: alx-fe-reactjs
Directory: tailwind-react-integration
