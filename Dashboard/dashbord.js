let mainLeft = document.querySelector(".main-left");
let seemoreseeless = document.querySelector(".see-more-see-less");
let seemoreseelessLabel = document.querySelector(".see-more-see-less-label");
const storyContainer = document.querySelector(".story-container");


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

const stories = [
  {
    fullName: "Emma Johnson",
    profilePic: "https://i.pravatar.cc/150?img=1",
    storyFile: "https://picsum.photos/400/700?random=1",
  },
  {
    fullName: "Liam Carter",
    profilePic: "https://i.pravatar.cc/150?img=2",
    storyFile: "https://picsum.photos/400/700?random=2",
  },
  {
    fullName: "Sophia Martinez",
    profilePic: "https://i.pravatar.cc/150?img=3",
    storyFile: "https://picsum.photos/400/700?random=3",
  },
  {
    fullName: "Noah Williams",
    profilePic: "https://i.pravatar.cc/150?img=4",
    storyFile: "https://picsum.photos/400/700?random=4",
  },
  {
    fullName: "Ava Brown",
    profilePic: "https://i.pravatar.cc/150?img=5",
    storyFile: "https://picsum.photos/400/700?random=5",
  },
  {
    fullName: "Olivia Anderson",
    profilePic: "https://i.pravatar.cc/150?img=6",
    storyFile: "https://picsum.photos/400/700?random=6",
  },
  {
    fullName: "Ethan Miller",
    profilePic: "https://i.pravatar.cc/150?img=7",
    storyFile: "https://picsum.photos/400/700?random=7",
  },
  {
    fullName: "Isabella Garcia",
    profilePic: "https://i.pravatar.cc/150?img=8",
    storyFile: "https://picsum.photos/400/700?random=8",
  },
  {
    fullName: "James Wilson",
    profilePic: "https://i.pravatar.cc/150?img=9",
    storyFile: "https://picsum.photos/400/700?random=9",
  },
  {
    fullName: "Mia Thompson",
    profilePic: "https://i.pravatar.cc/150?img=10",
    storyFile: "https://picsum.photos/400/700?random=10",
  },
  {
    fullName: "Benjamin Moore",
    profilePic: "https://i.pravatar.cc/150?img=11",
    storyFile: "https://picsum.photos/400/700?random=11",
  },
  {
    fullName: "Charlotte Taylor",
    profilePic: "https://i.pravatar.cc/150?img=12",
    storyFile: "https://picsum.photos/400/700?random=12",
  },
  {
    fullName: "Lucas Hernandez",
    profilePic: "https://i.pravatar.cc/150?img=13",
    storyFile: "https://picsum.photos/400/700?random=13",
  },
  {
    fullName: "Amelia Clark",
    profilePic: "https://i.pravatar.cc/150?img=14",
    storyFile: "https://picsum.photos/400/700?random=14",
  },
  {
    fullName: "Henry Lewis",
    profilePic: "https://i.pravatar.cc/150?img=15",
    storyFile: "https://picsum.photos/400/700?random=15",
  },
];

const createStoryHTMLtThroughtMap = () => {
  const returyarr = stories.map((story) => {
  return `<div class="story" style="background-image: url(${story.storyFile});">
                    <div class="story-profile-pic">
                        <img src="${story.profilePic}" alt="profile picture" width="35px" height="35px">
                    </div>
                    <div class="story-name">
                        <p>${story.fullName}</p>
                    </div>
                </div>`;
});

storyContainer.innerHTML = returyarr.join("");
};

createStoryHTMLtThroughtMap();





seemoreseelessLabel.addEventListener("click", seemoreseelessmainleft);