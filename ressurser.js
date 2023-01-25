const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]


// lag variabel for å mappe resources, lag et parameter navn : "cat"/category.
// ta html teksten for ordnet liste å sett inn i en variabel
// lag variabel for å lagre template litaral strengene til h2 taggen. I mellom h2 taggene reffer til variabelen i resources med navnet category
var oneList = resources.map(cat => { 
    let olList = "<ol>"
    let firstPart = `
     <h2>${cat.category}</h2>
     <p> ${cat.text}</p>`
// I arrayen resources har vi enda en array, multidimensjonal array med navn sources. bruker samme metode fortsette mappingen fra resources til sources, (her var resources og sources nå brukt, valgte å kalle den sauce :| )
     cat.sources.map(sauce => olList += `<li><a href="${sauce.url}">${sauce.title} </a></li>` )
     //konkantiner olList med ordnet liste end tag.
     olList += "</ol>"
     //ta den første delen av mappingen og legg til den nå ordnede listen med linker.
    firstPart += olList
    return firstPart
     }
)

var tittelRender = resources.map(cat => {
    let ting = `${cat.category}`
    return ting
})

document.getElementById("HTML").innerHTML = tittelRender[0]
document.getElementById("CSS").innerHTML = tittelRender[1]
document.getElementById("javaScript").innerHTML = tittelRender[2]
document.getElementById("react").innerHTML = tittelRender[3]
document.getElementById("sanityCms").innerHTML = tittelRender[4]


// console.log(oneList[1])



       
//  https://www.w3schools.com/howto/howto_js_active_element.asp
// finn div elementene i html som har id kate, lagre dette i en variabel for å så å finne elementer med classe navn button.
        var div = document.getElementById("kate")
        var button = div.getElementsByClassName("button")
        console.log(button.length)

        // forloop som sjekker alle elementene i div med classe button, for hvert av elementene lagre "aktive elementer i current".
        // var button er nå en liste med classer. med en addEventListener kan jeg sjekke om elementet blir klikket på, dermed ønsker jeg å legge til-
        //texten " active" for å endre classe navnet "button" i HTML til "button active". dermed kan jeg lage css kode som er klar til bruk i tifelle den skulle endre navn med gitte egenskaper.

        for (var i = 0; i < button.length; i++) {
            button[i].addEventListener("click", function() {
                // console.log("test")
                var current = document.getElementsByClassName("active")
                current[0].className = current[0].className.replace(" active", "")
                this.className += " active"
        });
    }
 
    

// let categoryHTML = ""

// funksjoner for å hente ønsket del av listen, hvis listen er åpen, mulighet for å navigere til neste kategori.
// Å gjøre, hvis listen er åpen "aktiv" endre denne knappens bakgrunnsfarge til til turquoise, og color til lightwhite.
// Å gjøre, hvis denne knappen er åpen skal den kunne lukkes, hvis onclicken ikke er denne knappen, åpne.
// kan vurdere å lage en class til buttons, og id til hver enkelt, da kan jeg sette fargen slik jeg vil avhengig av hvilken jeg trykker på.

document.querySelector("#articles").classList.toggle("hidden")

document.querySelector("#articles").innerHTML = oneList[0]
// Classlist.toggle velger css classen hidden, siden jeg har laget en css classe som heter hidden velger den stilen til classen i css filen.
//hvis jeg lager en class som heter feks visible button eller aktive kan jeg kansje få til å toggle de forskjellige buttonsene avhengig om jeg har trykket på dem.
// kan kansje vurdere å lage, finner en funksjon som sjekker om elementet er synlig.
function toggleCategoryZero() {
    
    if (document.querySelector("#articles").classList.toggle("hidden")) {
        document.querySelector("#articles").innerHTML = oneList[0]
        document.querySelector("#articles").classList.toggle("hidden")
        
    } else { 
        document.querySelector("#articles").innerHTML = oneList[0]
            
        
    }
}
function toggleCategoryOne() {
    if (document.querySelector("#articles").classList.toggle("hidden")){
        document.querySelector("#articles").innerHTML = oneList[1]
        document.querySelector("#articles").classList.toggle("hidden")
    } else {
        document.querySelector("#articles").innerHTML = oneList[1]
    }   
}
function toggleCategoryTwo() {
    if (document.querySelector("#articles").classList.toggle("hidden")){
        document.querySelector("#articles").innerHTML = oneList[2]
        document.querySelector("#articles").classList.toggle("hidden")
    } else {
        document.querySelector("#articles").innerHTML = oneList[2]
    } 
}
function toggleCategoryThree() {
    if (document.querySelector("#articles").classList.toggle("hidden")){
        document.querySelector("#articles").innerHTML = oneList[3]
        document.querySelector("#articles").classList.toggle("hidden")
    } else {
        document.querySelector("#articles").innerHTML = oneList[3]
    }
}
function toggleCategoryFour() {
    if (document.querySelector("#articles").classList.toggle("hidden")){
        document.querySelector("#articles").innerHTML = oneList[4]
        document.querySelector("#articles").classList.toggle("hidden")
    } else {
    document.querySelector("#articles").innerHTML = oneList[4]
    }
}
