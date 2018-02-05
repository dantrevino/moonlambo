document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('sign-in').addEventListener('click', function() {
    var scopes = ['store_write']
    console.log(chrome.runtime.getURL('popup.html'))
    console.log(chrome.runtime.getURL('manifest.json'))
    blockstack.redirectToSignIn(chrome.runtime.getURL('popup.html'), chrome.runtime.getURL('manifest.json'), scopes)
  })
  document.getElementById('sign-out').addEventListener('click', function() {
    // blockstack.signUserOut(window.location.origin)
    blockstack.signUserOut(chrome.runtime.getURL('popup.html'))
  })

  function showProfile(profile) {
    var person = new blockstack.Person(profile)
    document.getElementById('profile-name').innerHTML = person.name()
    document.getElementById('avatar-image').setAttribute('src', person.avatarUrl())
    // document.getElementById('section-1').style.display = 'none'
    // document.getElementById('section-2').style.display = 'block'
  }

  if (blockstack.isUserSignedIn()) {
    blockstack.loadUserData(function(userData) {
      showProfile(userData.profile)
    })
  } else if (blockstack.isSignInPending()) {
    blockstack.signUserIn(function(userData) {
      window.location = window.location.origin
    })
  }
})
