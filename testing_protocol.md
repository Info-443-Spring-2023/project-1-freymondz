
# Testing Protocol & Known Bugs
A full test of the MVP would include 1) clicking on the link to the webpage and 2) going through each task listed below (the tasks below are listed in the recommended order of testing), and 3) using Lighthouse to test the website's accessibility.

## List of Tasks By Function (Recommended Order of Testing)

### Function 1: View Volunteer Positions
1. Ensure you are on the homepage
    - **Expected Result:** You should see a navigation bar on the top, a list of volunteer positions on the left, and filters on the right
3. Click on the small arrow of any volunteer postion card and then click on the small arrow a second time
    - **Expected Result:** The card should expand revealing additional information about the volunteer positions (accessibility, interests, commitment, age requirement, and location)
5. Click on the "Sign Up" button of any volunteer postion
    - **Expected Result:** A new tab should open up with the website to sign up for the volunteer position

### Function 2: Filtering Volunteer Positions
4. Click on a filter (any checkbox)
    - **Expected Result:** Check box should be "checked" and only volunteer positions that contain the interest or accessibility check should be displayed. Note: If you select multiple filters volunteer positions that fall under **at least one** filter will be displayed.
6. Click on any checked filter
    - **Expected Result:** Clicking a checked box should uncheck the box and unfilter the volunteer positions

### Function 3: Log In
6. Click on the "Sign in with Google Button" in the upper right corner and sign in with any Google account
    - **Expected Result:** A window allowing you to sign into a Google account should pop up. If it is your first time signing in to our website you should also get a small window prompting you to edit your profile.
7. (*Skip this step if this is your first time signing into our site.*) If you are using a Google account that you already signed into our site with, click on your profile image in the upper right corner and then click on edit profile
    - **Expected Result:** You should get a small pop-up promoting you to edit your profile (it should be the same window you got after you signed up for your first time)
8. Make any edits to your profile and click submit
    - **Expected Result:** Any interest or disability you click on should turn blue when clicked. If you click submit and then repeat step 6.5, you should be able to see any edits you previously made. Plus, if you reload the website, the order of volunteer positions on the homepage should have changed to match the edits you made to your profile. (For example, if you selected your interest to be "Hunger", volunteer positions related "Hunger" should be on top). 

### Function 4: Bookmark
9. Ensure you are logged in and on the homepage 
    - **Expected Result:** Volunteer positions on the homepage should have a bookmark icon in the upper right corner
10. Click on the bookmark button of any volunteer postion
    - **Expected Result:** Bookmark icon should "fill"
11. Go to Dashboard (located on the navigation bar)
    - **Expected Result:** Any volunteer position that has been bookmarked should be displayed under "Bookmarked Opportunities"
12. Click on the bookmark button of any position under "Bookmarked Opportunities"
    - **Expected Result:** Clicking on a "filled" bookmark icon should unbookmark the volunteer position. Thus, the volunteer position should disappear from under "Bookmarked Opportunities"

### Function 5: Site Navigation and About Page
13. Click on "About" in the navigation bar
    - **Expected Result:** You should be taken to the About page
14. Click on the Youtube video (optional: click again to pause the video)
    - **Expected Result:** The Youtube video should play and should function like a typical embedded Youtube video

## Testing Accessibility Using Google Lighthouse
We tested the accessibility of our website using Google Lighthouse. Below are the steps to run Google Lighthouse.
1. Right click on webpage and select "Inspect".
2. On the top where it says "Elements", "Console", etc., there should also be a more tabs button (should look like double arrows), click on it.
3. A dropdown menu should appear, click on "Lighthouse".
4. Under "Categories" make sure "Accessibility" is checked and then click "Analyze page load".

**Expected Result:** We aim for our website to have an accessibility score of over 90. 

## Known Bugs and Disclaimers
1. **Disclaimer**: We have no control over the functionality of the external sites that open when users click on the "Sign Up" button of the volunteer positions. We can ensure that the url that is stored in our database will open in a new tab when the "Sign Up" button is clicked. All sign-up links are working as of 3/5/2023.
2. **Known Bug**: If you make an edit to your profile and click away or click "Cancel", your edits are still saved. 
3. **Known Bug**: If you make an edit to your profile, ideally we would have wanted the volunteer positions to automatically reorganize based on the edits made to your profile. However, you will have to refresh the webpage in order for the volunteer positions to reorganize.
