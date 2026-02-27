let mainLeft = document.querySelector(".main-left");
let seemoreseeless = document.querySelector(".see-more-see-less");
let seemoreseelessLabel = document.querySelector(".see-more-see-less-label");


let mainleftexpend = `<div class="expended-section">
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Ads Manager</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Birthdays</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Chat with AIs</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Events</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Feeds</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Gaming Videos</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Messenger</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Messenger Kids</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Orders and payments</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Pages</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Play Games</span>
            </div>
            <div class="disply-flex">
                <img src="../Assets/images/profile pic.png" alt="profile picture" width="35px" height="35px">
                <span>Recent Ad Activity</span>
</div>
</div>`;

let expended = false;
function seemoreseelessmainleft() {
    if (!expended) {
        seemoreseeless.textContent = "See Less";
        seemoreseelessLabel.insertAdjacentHTML("beforebegin", mainleftexpend);
        expended = true;
    }
    else {
        document.querySelectorAll(".expended-section").forEach(el => el.remove());
        seemoreseeless.textContent = "See More";
        expended = false;
    }
}


seemoreseelessLabel.addEventListener("click", seemoreseelessmainleft);