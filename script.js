window.onload = function () {

let sign = document.querySelector(".sign");
let image = document.querySelector(".image");

// PAGE INFO
function PageSetup (){
    this.getColor = function(){
        return document.querySelector(".color").value;
    };
    this.getBg = function(){
        return document.querySelector(".background").value;
    };
    this.getImage = function(){
        return document.querySelector(".imagesrc").value;
    };
    if ( localStorage.getItem("color") !== null ) {
        this.localColor = localStorage.getItem("color");
        document.body.style.setProperty("color", this.localColor, "important");
    }
    if ( localStorage.getItem("background") !== null ) {
        this.localBg = localStorage.getItem("background");
        document.body.style.setProperty("background", this.localBg, "important");
    }
    if ( localStorage.getItem("image") !== null ) {
        this.localImg = localStorage.getItem("image");
        document.querySelector(".images").setAttribute('src', this.localImg);
    }
}

// USER INFO
function UserSetup (){
    this.getName = function(){
        return document.querySelector(".name").value;
    };
    this.getSecondName = function(){
        return document.querySelector(".surname").value;
    };
    this.getBirthDate = function(){
        return document.querySelector(".birth").value;
    };
    this.getCity = function(){
        return document.querySelector(".city").value;
    };
    this.getAge = function(){
        return document.querySelector(".age").value;
    };

    if ( localStorage.getItem("name") !== null ) {
        this.localName = localStorage.getItem("name");
        document.querySelector("#name").innerHTML = this.localName;
    }
    if ( localStorage.getItem("birth") !== null ) {
        this.localSurname = localStorage.getItem("surname");
        document.querySelector("#secondname").innerHTML = this.localSurname;
    }
    if ( localStorage.getItem("birth") !== null ) {
        this.localBirth = localStorage.getItem("birth");
        document.querySelector("#birth").innerHTML = this.localBirth;
    }
    if ( localStorage.getItem("city") !== null ) {
        this.localCity = localStorage.getItem("city");
        document.querySelector("#city").innerHTML = this.localCity;
    }
    if ( localStorage.getItem("age") !== null ) {
        this.localAge = localStorage.getItem("age");
        document.querySelector("#age").innerHTML = this.localAge;
    }
}

PageSetup.prototype = {
    "btn" : function(){
        sign.addEventListener("click", () => {
            window.localStorage.setItem("color", this.getColor());
            window.localStorage.setItem("background", this.getBg());
            this.setColor();
            this.setBg();
        })
    },
    "btnImage" : function(){
        document.querySelector(".imagebtn").addEventListener("click", () => {
            this.setUserImage();
            window.localStorage.setItem("image", user.getImage());
        })
    },
    "setColor" : function(){
        document.body.style.setProperty("color", this.getColor(), "important");
    },
    "setBg" : function(){
        document.body.style.setProperty("background-color", this.getBg(), "important")
    },
    "setUserImage" : function(){
        document.querySelector(".images").setAttribute('src', this.getImage());
    },
};
UserSetup.prototype = {
    "setName" : function(){
        document.querySelector("#name").innerHTML = this.getName();
    },
    "setSecondName" : function(){
        document.querySelector("#secondname").innerHTML = this.getSecondName();
    },
    "setBirthDate" : function(){
        document.querySelector("#birth").innerHTML = this.getBirthDate();
    },
    "setCity" : function(){
        document.querySelector("#city").innerHTML = this.getCity();
    },
    "setAge" : function(){
        document.querySelector("#age").innerHTML = this.getAge()
    },
    "btn" : function(){
        sign.addEventListener("click", () => {
            window.localStorage.setItem("name", this.getName());
            window.localStorage.setItem("surname", this.getSecondName());
            window.localStorage.setItem("birth", this.getBirthDate());
            window.localStorage.setItem("city", this.getCity());
            window.localStorage.setItem("age", this.getAge());
            this.setName();
            this.setSecondName();
            this.setAge();
            this.setBirthDate();
            this.setCity();
        });
    },
};

let modal = document.getElementById("my_modal");
let span = document.getElementsByClassName("close_modal_window")[ 0 ];

image.addEventListener("click", function(){
    document.querySelector(".modal").style.display = "block";
});
span.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click", function( event ){
    if ( event.target === modal ) {
        modal.style.display = "none";
    }
});

let userInfo = new UserSetup();
let user = new PageSetup();
userInfo.btn();
user.btn();
user.btnImage();
};




