"use strict";

/******************************************************************************
 * Handling navbar clicks and updating navbar
 */

/** Show main list of all stories when click site name */

function navAllStories(evt) {
  console.debug("navAllStories", evt);
  hidePageComponents();
  putStoriesOnPage();
}

$body.on("click", "#nav-all", navAllStories);

/** Show login/signup on click on "login" */

function navLoginClick(evt) {
  console.debug("navLoginClick", evt);
  hidePageComponents();
  $loginForm.show();
  $signupForm.show();
}

$navLogin.on("click", navLoginClick);

/** When a user first logins in, update the navbar to reflect that. */

function updateNavOnLogin() {
  console.debug("updateNavOnLogin");
  $(".main-nav-links").show();
  $navLogin.hide();
  $navLogOut.show();
  $navUserProfile.text(`${currentUser.username}`).show();
}

function navSubmitStoryClick(evt) {
  //hides uneeded forms (stories submit login signup profile )
  hidePageComponents();
  //displays stories list and submit forms 
  $allStoriesList.show();
  //submit form contains submitNewStory function
  $submitForm.show();
}
$navSubmitStory.on("click", navSubmitStoryClick);

function navFavoritesClick(evt) {
  //hides uneeded forms (stories submit login signup profile )
  hidePageComponents();
  
  // check if any favorited stories exist, generate HTML mark up, append to DOM
  putFavoritesListOnPage();
  
}
$body.on("click", "#nav-favorites", navFavoritesClick);

function navMyStories(evt) {
  //hides uneeded forms (stories submit login signup profile )
  hidePageComponents();
  //checks if user instance has ownStories posted and generates markup
  //appends to DOM
  putUserStoriesOnPage();
  $ownStories.show();
}
$body.on("click", "#nav-my-stories", navMyStories);

function navProfileClick(evt) {
  //hides uneeded forms (stories submit login signup profile )
  hidePageComponents();
  $userProfile.show();
}
$navUserProfile.on("click", navProfileClick);

