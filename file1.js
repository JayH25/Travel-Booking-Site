let formContainer = document.querySelector(".formContainer");
// let login = document.querySelector(".login button"); // login wala button.
let close = document.querySelector(".close");
let body = document.querySelector("body");
let LOGIN = document.querySelector(".LOGIN");
let SIGNUP = document.querySelector(".SIGNUP");
let signUp = document.querySelector(".sign-up");
let Login = document.querySelector(".log-in");
let forgotPass = document.querySelector(".forgotPass");
let forgot = document.querySelector(".forgot");
let signIn = document.querySelector(".sign-in");
let q1 = document.querySelector(".first");
let q2 = document.querySelector(".second");
let q3 = document.querySelector(".third");
let q4 = document.querySelector(".fourth");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
let img9 = document.querySelector(".img9");
let img10 = document.querySelector(".img10");
let img11 = document.querySelector(".img11");
let img12 = document.querySelector(".img12");
let left = document.querySelector("#left");
let right = document.querySelector("#right");

let arrC = [img1 , img2 , img3 , img4 , img5 , img6 , img7 , img8 , img9 , img10 , img11 , img12];
let arr = [img1 , img2 , img3 , img4 ];


signIn.addEventListener('click' , () => {
    formContainer.showModal();
    body.style.filter = "blur(4px)";
    body.style.overflow = "none";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
    forgotPass.style.display = "none";
});

close.addEventListener('click' , () => {
    formContainer.close();
    body.style.filter = "blur(0px)";
    console.log('closed');
})
signUp.addEventListener('click' , () => {
    SIGNUP.style.display = "block";
    console.log("displaying signup");
    LOGIN.style.display = "none";
    console.log("hided login page ...");
    // forgotPass.style.display = "none";
})
Login.addEventListener('click' , () => {
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
    // forgotPass.style.display = "none";
})

forgot.addEventListener('click' , () => {
    forgotPass.style.display = "block";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "none";
    
    console.log("displaying");
})

                                    // FAQ Section
//Q1
let ans1 = document.createElement("div");
ans1.innerText = "Our website is designed to be intuitive and easy to navigate, ensuring a smooth booking experience for users of all ages and technical abilities.";

let cnt1 = 0;

q1.addEventListener('click' , () => {
    if(cnt1 %2 == 0)
    {
        ans1.classList.add("trans");
        q1.after(ans1);

        
        ans1.classList.add("faqbox");
        ans1.classList.add("seperate");

    }
    else
    {
        ans1.remove();
        // ans1.classList.remove("qStyle");
    }
    cnt1++;
    
});

//Q2

let ans2 = document.createElement("div");
ans2.innerText = "Find the flight search section.Enter your departure city or airport..Search for Flights.Click the Search button to display available flights based on your criteria.Select a FlightReview the list of available flights.Compare prices, flight times, layovers, and airline options.Select the flight that best meets your needs.";

let cnt2 = 0;
q2.addEventListener('click' , () => {
    if(cnt2 %2 == 0)
    {
        ans2.classList.add("trans");
        q2.after(ans2);
        ans2.classList.add("faqbox");
        ans2.classList.add("seperate");
    }
    else
    {
        ans2.remove();
        // ans1.classList.remove("qStyle");
    }
    cnt2++;
    
});
//Q3
let ans3 = document.createElement("div");
ans3.innerText = "To book a train ticket on our website, start by locating the train search section, typically found on the homepage. Review this list carefully, comparing train timings, journey duration, and class availability. Finally, select the train that best fits your schedule and preferences.";

let cnt3 = 0;
q3.addEventListener('click' , () => {
    if(cnt3 %2 == 0)
    {
        ans3.classList.add("trans");
        q3.after(ans3);
        ans3.classList.add("faqbox");
        ans3.classList.add("seperate");
    }
    else
    {
        ans3.remove();
        // ans1.classList.remove("qStyle");
    }
    cnt3++;
    
});
//Q4
let ans4 = document.createElement("div");
ans4.innerText = "Booking bus tickets through our website offers several advantages. We provide a comprehensive list of bus operators and routes, allowing you to compare various options and choose the one that best fits your needs. The platform shows real-time availability of seats, ensuring that the information you see is accurate and up-to-date. ";

let cnt4 = 0;
q4.addEventListener('click' , () => {
    if(cnt4 %2 == 0)
    {
        ans4.classList.add("trans");
    
        q4.after(ans4);
        ans4.classList.add("faqbox");
        ans4.classList.add("seperate");
        ans4.style.marginTop = "-1rem";
    }
    else
    {
        ans4.remove();
    }
    cnt4++;
});

                        //  Image Sliding Code
let i = 0;
img5.style.display = "none";
img6.style.display = "none";
img7.style.display = "none";
img8.style.display = "none";
img9.style.display = "none";
img10.style.display = "none";
img11.style.display = "none";
img12.style.display = "none";
left.addEventListener('click' , () => {
    
    if(i != 0)  
    {
        arrC[i-1].style.display = "block";
        arrC[i+3].style.display = "none";
        i--;
    }
    
    
    
})
right.addEventListener('click' , () => {
    if(i < 8)  i++;
    else     i = 0;
    if(i < 9)
    {
        arrC[i].style.display = "block";
        arrC[i+1].style.display = "block";
        arrC[i+2].style.display = "block";
        arrC[i+3].style.display = "block";
        for(let j=0;j<i;j++)    arrC[j].style.display = "none"; 
        for(let j=i+4;j<12;j++) arrC[j].style.display = "none";       
        // if(i != 0)  arrC[i-1].style.display = "none";
        // console.log("here");
    }
    // else
    // {
    //     arrC[i+3].style.display = "block";
    //     arrC[i-1].style.display = "none";
    // }
})


// let arrC = [img1 , img2 , img3 , img4 , img5 , img6 , img7 , img8 , img9 , img10 , img11 , img12];
// let arr = [img1 , img2 , img3 , img4 ];
// let n = 12;
// for(let i = 4;i<n;i++)  
// {
//     arrC[i].style.display = "none";
// }
// function displayNone(arrC)
// {
//     for(let i=0;i<n;i++)   arrC[i].style.display = "none";
// }
// function displayArr(arr)
// {
//     for(let i=0;i<4;i++)   
//     {
//         arr[i].style.display = "block";
//     }
//     img1.src = arr[0].src;
//     img2.src = arr[1].src;
//     img3.src = arr[2].src;
//     img4.src = arr[3].src;
// }

// let i = 0;
// left.addEventListener('click' , () => {
//     displayNone(arrC);
//     // console.log(i);
//     if(i != 0)
//     {
//         for(let j=i-1;j<i+3;j++)    
//         {
//             arr[j-i+1] = arrC[j];
//         }
//     }
//     else
//     {
//         arr[0]=arrC[n-1];
//         arr[1]=arrC[0];
//         arr[2]=arrC[1];
//         arr[3]=arrC[2];
//     }
//     // for(let i=0;i<4;i++)    console.log(arr[i]);
    
//     displayArr(arr);
// })

