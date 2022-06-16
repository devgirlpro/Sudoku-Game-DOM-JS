let numSelected = null;
let tileSelected = null;

let errors = 0;


let board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

let solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]


window.onload = function() {
    setGame();
}


function setGame() {
    //diigits 1-9
    for (let i = 1; i < 10 ; i++) {
        let digits = document.getElementById("digits");
        // console.log(digits)
        let number = document.createElement("dive");
        number.id = i;

        number.addEventListener("click", selectNumber);

        number.innerText = i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
        //  console.log(number)    
    }


    //Board 9 * 9
     for (let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++ ) {
            let tile = document.createElement("div");
            tile.id = r.toString()+ "-" + c.toString();
            if(board[r][c] != "-") {
                tile.innerText = board[r][c];
                tile.classList.add("tile-start");
            }
            
            if( r === 2 || r === 5) {
                tile.classList.add("horizontal-line")
            }
            if(c === 2 || c === 5) {
                tile.classList.add("vertical-line")
            }

            tile.addEventListener("click", selectTile)
            tile.classList.add("tile");
            document.getElementById("sudoBoard").appendChild(tile);
        }
        
     }
}

//here i have problem about check & remove class after click
// function selectNumber() {
//     console.log("this => ", this);
//     let numSelected = this
//     console.log("numSelected => ", numSelected);
//     console.log("classList before click =>", numSelected.className);
   
//      if (numSelected.classList.contains(".active")) {
//         console.log("true then remove it")
//         numSelected.classList.remove("active")
//             numSelected.classList.remove(".active")
//     } 
//     else {
//         numSelected.classList.add("active")
//         console.log("it actived")
//         console.log("classList aftedr click =>", numSelected.className);
//     }      
// }



function selectNumber(){
    if (numSelected != null) {
        console.log("numSelected in iF =>", numSelected)
        numSelected.classList.remove("active");
    }
    console.log("numSelected out iF =>", numSelected)
    numSelected = this;
    numSelected.classList.add("active");
    console.log("numSelected after iF =>", numSelected)
}


function selectTile() {
    tileSelected = this;
    console.log("id ===>", tileSelected.id);
    // console.log("tile selected", tileSelected)
    if (numSelected) {
        if (tileSelected.innerText != "") {
            return
        }

    //remind th tileID => "0-0", "0-1".."0-2"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] == numSelected.id) {
        this.innerText = numSelected.id;
    }
    else {
        alert("I know i'm ANNOYING but you're wrong")
        errors += 1;
        document.getElementById("errors").innerText = errors;
    }

  

       //
       
    }
}