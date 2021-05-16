const canvas = new fabric.Canvas("canvas");
let playerX = 10;
let playerY = (600 - 140);
let block__width = 100;
let block__height = 100;
let playerObject = "";
let blockObject = "";
function playerUpdate() {
  fabric.Image.fromURL("./../../game/img/player.png", (img) => {
    playerObject = img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(playerObject);
  });
}
function newIMG(getImage) {
  fabric.Image.fromURL(getImage, (img) => {
    blockObject = img;
    blockObject.scaleToWidth(block__width);
    blockObject.scaleToHeight(block__height);

    blockObject.set({
      top: playerY,
      left: playerX,
    });
    canvas.add(blockObject);
  });
}
window.addEventListener("keydown", (e) => {
  const key = e.key;
  switch (key) {
    case "u":
      newIMG("./../../game/img/Unique.png");
      break;
    case "t":
      newIMG("./../../game/img/Tree.png");
      break;
    case "w":
      newIMG("./../../game/img/Wall.PNG");
      break;
    case "W":
      newIMG("./../../game/img/WallYellow.png");
      break;
    case "r":
      newIMG("./../../game/img/Roof.png");
      break;
    case "g":
      newIMG("./../../game/img/Ground.png");
      break;
    case "k":
      newIMG("./../../game/img/DarkGreen.png");
      break;
    case "l":
      newIMG("./../../game/img/LightGreen.png");
      break;
    case "c":
      newIMG("./../../game/img/Cloud.png");
      break;
  }
  if (key.indexOf("Arrow") > -1) {
    const direction = key.replace("Arrow", "");
    if (direction == "Up") {
      if (playerY > 60) {
        playerY -= block__height;
        canvas.remove(playerObject);
        playerUpdate();
        console.log(playerY);
      }
    } else if (direction == "Down") {
      if (playerY < 600 - 140) {
        playerY += block__height;
        canvas.remove(playerObject);
        playerUpdate();
        console.log(playerY);
      }
    } else if (direction == "Right") {
      if (playerX < 1000 - 150) {
        playerX += block__height;
        canvas.remove(playerObject);
        playerUpdate();
        console.log(playerY);
      }
    } else if (direction == "Left") {
      if (playerX >= 60) {
        playerX -= block__height;
        canvas.remove(playerObject);
        playerUpdate();
        console.log(playerY);
      }
    }
  }
});
playerUpdate();
