
# Testing Protocol & Known Bugs
A full test of the MVP would include 1) clicking on the link to the webpage and 2) going through each task listed below. The tasks below are listed in the recommended order of testing.

## List of Tasks By Function (Recommended Order of Testing)

### Function 1: View Volunteer Positions
1. Ensure you are on the homepage
    - **Expected Result:** You should see a navigation bar on the top, a list of volunteer postions on the left and filters on the right
3. Click on the small arrow of any volunteer postion card and then click on small arrow a second time
    - **Expected Result:** The card should expand revealing addtional information about the volunteer postions (accessability, interests, commitment, age requirement, and location)
5. Click on the "Sign Up" button of any volunteer postion
    - **Expected Result:** A new tab should open up with the website to sign up for the volunteer position

### Function 2: Filtering Volunteer Positions
4. Click on filter (any checkbox)
    - **Expected Result:** Check box should be "checked" and only volunteer postions that contain the interest or accessability check should be displayed. Note: If you select multiple filters volunteer positions that fall under **at least one** filter will be displayed.
6. Click on any checked filter
    - **Expected Result:** Clicking a checked box should uncheck the box and unfilter the volunteer postions

### Function 3: Log In
6. Click on the "Sign in with Google Button" in upper right corner and sign with any Google account
    - **Expected Result:** A window allowing you to sign into a Google account should pop up. If it is your first time signing into our webiste you should also get a small window prompting you to edit your profile.
7. (*Skip this step if this is your first time signing into our site.*) If you are using a Google account that you already signed into our site with, click on your profile image in upper right corner and then click on edit profile
    - **Expected Result:** You should get a small pop up promoting you to edit your profile (it should be the same window you got after you signed up for your first time)
8. Make any edit to profile and click submit
    - **Expected Result:** Any interest or disability you click on should turn blue when clicked. If you click submit and then repeat step 6.5, you should be able to see any edits you previously made. 

### Function 4: Bookmark
9. Ensure you are logged in and on the homepage 
    - **Expected Result:** Volunteer positions on homepage should have a bookmark icon in the upper right corner
10. Click on the bookmark button of any volunteer postion
    - **Expected Result:** Bookmark icon should "fill"
11. Go to Dashboard (located on navigation bar)
    - **Expected Result:** Any volunteer position that has been bokmarked should be displayed under "Bookmarked Opportunities"
12. Click on bookmark button of any position under "Bookmarked Opportunities"
    - **Expected Result:** Clicking on an "filled" bookmark icon should unbookmark the volunteer position. Thus, the volunteer position should disapper from under "Bookmarked Opportunities"

### Function 5: Site Navigation and About Page
13. Click on "About" in the naviagtion bar
    - **Expected Result:** You should be taken to the About page
14. Click on Youtube video (optional: click again to pause video)
    - **Expected Result:** The Youtube video should play and should function like a typical embedded Youtube video

## Known Bugs and Disclaimers
1. **Issue/Disclaimer**: Images of volunteer postions are taken from the Internet via a link which we have stored in our database. These links may not work or may expire which will result in the image not showing up. Sometimes refreshing the page resolves this issue, however if something more permanant happened to the image such as the orginal website creator deleted the image from their website, the image may not show up. Similarly, we have no control over the fuctionaility of the external sites that open when users click on  the "Sign Up" button of volunteer positions. We can ensure that the url that is stored in our database will open in a new tab when the "Sign Up" button is clicked. All images and sign up links are working as of 3/5/2023.
2. **Known Bug**: If you make an edit to your profile and click away or click "Cancel", your edits are still saved. 