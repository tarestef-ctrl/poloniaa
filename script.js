console.log("Hello from Js!");
let texts = {
  en: {
    home_title: "Discover Poland",
    culture_title: "Poland's Culture",
    quiz_header: "Quick Quiz",
    nav_home: "Home",
    nav_physicists: "Culture",
    nav_geography: "Geography",
    nav_history: "History",
    nav_about: "About Us",
    nav_quiz: "Quiz",
    home_subtitle: "Discover Poland",
    home_intro: "Poland is a country in Central Europe with a rich history, diverse geography, and vibrant traditions.",
    home_intro2: "Explore its cities, landscapes, and cultural heritage.",
    practice_badge: "Geography",
    practice_example: "Example: The Vistula is the longest river in Poland.",
    practice_formula: "Capital: Warsaw",
    laws_title: "Geography of Poland",
    laws_point1: "Poland is bordered by Germany, Czech Republic, Slovakia, Ukraine, Belarus, Lithuania, and Russia.",
    laws_point2: "The Carpathian and Sudeten Mountains lie in the south.",
    laws_point3: "The Baltic Sea forms Poland's northern coast.",
    laws_point4: "The Vistula is the longest river in Poland.",
    law1: "Highest peak: Rysy reaches 2,499 meters in the Tatra Mountains.",
    law2: "Largest lake: Śniardwy covers about 113 square kilometers.",
    law3: "Major city: Warsaw is Poland’s capital and largest city, located on the Vistula river.",
    laws_more: "See more" ,
    activity_badge: "Traditions",
    activity_text: "Try: Name a traditional Polish dish and a folk dance.",
    activity_answer: "Answer: Pierogi are dumplings, and the polonaise is a traditional dance.",
    work_title: "Culture & Celebrations",
    work_text: "Poland celebrates many holidays, including Christmas (Wigilia) and Easter (Wielkanoc), with unique customs.",
    kinetic: "Traditional dish: Pierogi",
    potential: "Traditional costume: Folk outfits (stroje ludowe)",
    try_badge: "Did you know?",
    try_example: "Example: The Polish flag has two horizontal stripes: white over red.",
    culture_more: "See more",
    waves_title: "Did You Know?",
    waves_text: "Poland has UNESCO World Heritage sites like the Wieliczka Salt Mine and Malbork Castle.",
    wave1: "The Białowieża Forest is one of Europe's last primeval forests.",
    wave2: "The Tatra Mountains include Poland’s highest peak, Rysy.",
    wave3: "Malbork Castle is the largest castle in the world by land area.",
    wave4: "Poland joined the European Union in 2004.",
    experiment_badge: "Fun Fact",
    experiment_text: "The word 'Polska' means 'Land of the Polans'.",
    experiment_note: "Note: Poland's official language is Polish.",
    geo_title: "Geography of Poland",
    geo_subtitle: "Explore Poland's Landscapes",
    geo_intro: "Poland's geography features diverse landscapes from mountains to plains, rivers to lakes. Discover the natural beauty and geographical wonders of Poland.",
    geo_intro2: "Learn about Poland's terrain, climate, and natural features in an engaging way.",
    geo_badge: "Key Fact",
    geo_example: "Example: Poland covers an area of 312,696 square kilometers.",
    geo_formula: "Highest Peak: Rysy (2,499 m)",
    terrain_title: "Terrain & Borders",
    terrain_point1: "Poland is located in Central Europe, bordered by seven countries: Germany, Czech Republic, Slovakia, Ukraine, Belarus, Lithuania, and Russia.",
    terrain_point2: "The northern border is along the Baltic Sea coastline.",
    terrain_point3: "The southern regions feature the Carpathian and Sudeten mountain ranges.",
    terrain_point4: "Central Poland consists of vast plains and lowlands.",
    terrain1: "Mountains: The Tatra Mountains are the highest in Poland.",
    terrain2: "Rivers: The Vistula (Wisła) is the longest river at 1,047 km.",
    terrain3: "Lakes: Poland has over 9,000 lakes, with Śniardwy being the largest.",
    explore_badge: "Explore",
    explore_text: "Try: Name Poland's main geographical regions.",
    explore_answer: "Answer: Lowlands, uplands, and mountains.",
    climate_title: "Climate & Nature",
    climate_text: "Poland has a temperate climate with four distinct seasons, influenced by continental and oceanic factors.",
    climate1: "Average temperature: 7-8°C annually.",
    climate2: "Precipitation: About 600 mm per year.",
    nature_badge: "Did you know?",
    nature_example: "Example: The Białowieża Forest is a UNESCO site and home to European bison.",
    regions_title: "Regions & Landmarks",
    regions_text: "Poland is divided into 16 voivodeships, each with unique geographical features.",
    region1: "Masovia: Home to Warsaw and central plains.",
    region2: "Lesser Poland: Features the Tatra Mountains and Kraków.",
    region3: "Pomerania: Baltic Sea coast and lakes.",
    region4: "Silesia: Industrial region with mountains.",
    landmark_badge: "Fun Fact",
    landmark_text: "Poland has 23 national parks protecting diverse ecosystems.",
    landmark_note: "Note: The Oder and Neisse rivers form part of the western border.",
    history_title: "History of Poland",
    history_subtitle: "Key Moments in Polish History",
    history_intro: "Poland's past includes medieval kingdoms, the Polish–Lithuanian Commonwealth, partitions, and rebirth. Discover milestones that shaped the nation.",
    history_intro2: "Learn about important dates, leaders, and events that define Poland's identity.",
    history_badge: "Timeline",
    history_example: "Example: The Union of Lublin (1569) created the Polish–Lithuanian Commonwealth.",
    history_formula: "Year: 1918 – Poland regained independence.",
    history_section1: "Foundations & Kingdoms",
    history_point1: "966: Mieszko I converted to Christianity and united Polish tribes.",
    history_point2: "1025: Bolesław I the Brave became the first crowned king of Poland.",
    history_point3: "1138: The fragmentation of Poland began with the Testament of Bolesław III.",
    history_note_badge: "Did you know?",
    history_note_text: "Poland's medieval capital was Kraków until the 16th century.",
    history_section2: "Commonwealth & Partitions",
    history_section2_text: "The Polish–Lithuanian Commonwealth (1569–1795) was a major European power until it was partitioned by its neighbors.",
    history_point4: "1772, 1793, 1795: Three partitions erased Poland from the map.",
    history_point5: "1791: The Constitution of May 3 was adopted—the first modern constitution in Europe.",
    history_fact_badge: "Fact",
    history_fact_text: "The May 3 Constitution is celebrated as a national holiday in Poland.",
    history_section3: "Modern Era",
    history_section3_text: "Poland regained independence in 1918, endured World War II, and emerged from communism in 1989.",
    history_point6: "1939: Germany and the Soviet Union invaded Poland, starting World War II.",
    history_point7: "1945–1989: Poland was part of the Eastern Bloc under communist rule.",
    history_point8: "1989: The Solidarity movement helped bring democracy to Poland.",
    history_footer_badge: "Fun Fact",
    history_footer_text: "Poland joined NATO in 1999 and the EU in 2004.",
    about_title: "About Us",
    about_subtitle: "Who We Are",
    about_intro: "This project was created by the students from the national college of Ienachita Vacarescu.",
    about_intro2: "Our team: Simion Stefan, Stan Catalina and Teodora Serban.",
    about_badge: "Mission",
    about_example: "We've put our own heart and soul into this project and our purpose is of informing and educating people.",
    about_formula: "Goal: Share knowledge.",
    about_section1: "Our Team",
    about_point1: "Simion Stefan",
    about_point2: "Stan Catalina",
    about_point3: "Teodora Serban",
    about_note_badge: "Contact",
    about_note_text: "Visit ienachita.com for our school's website.",
    about_contact: "Visit ienachita.com for our school's website.",
    about_section2: "Our Project",
    about_section2_text: "Add details about the project here.",
    about_point4: "Add project feature here.",
    about_point5: "Add project feature here.",
    about_fact_badge: "Fact",
    about_fact_text: "Add a fun fact here.",
    about_section3: "More Info",
    about_section3_text: "Add additional information here.",
    about_point6: "Add point here.",
    about_point7: "Add point here.",
    about_point8: "Add point here.",
    about_footer_badge: "Thank You",
    about_footer_text: "Add thank you message here.",
    newton_text: "Marie Curie was born in Warsaw and won two Nobel Prizes for her work on radioactivity.",
    einstein_text: "Frédéric Chopin was a famous Polish composer and pianist, known for his poetic piano pieces.",
    galileo_text: "Lech Wałęsa led the Solidarity movement that helped end communist rule in Poland.",
    why_title: "Why Learn About Poland?",
    why1: "Poland has a rich history that shaped Europe.",
    why2: "Its cultural traditions include music, food, and storytelling.",
    why3: "Understanding Poland helps appreciate European diversity.",
    why4: "Poland's geography includes mountains, forests, and a Baltic coastline.",
    why5: "Poles played key roles in science, arts, and politics.",
    why6: "Polish cuisine is famous for pierogi, kielbasa, and hearty soups.",
    why7: "Poland is home to many UNESCO World Heritage sites.",
    why8: "Language and literature reflect Poland’s long history.",
    why9: "Learning about Poland connects you to its resilient spirit.",
    fun_title: "Fun Facts",
    fun1: "Warsaw is sometimes called the 'Phoenix City' for rebuilding after WWII.",
    fun2: "Poland has one of the oldest salt mines in the world at Wieliczka.",
    fun3: "The Polish national anthem is one of the oldest in Europe.",
    fun4: "Poland is home to the largest castle by land area (Malbork).",
    fun5: "The Białowieża Forest is home to European bison.",
    fun6: "Poland’s mountain range, the Tatra, includes the highest peak in the country.",
    fun7: "Polish mathematician Stefan Banach helped found modern functional analysis.",
    fun8: "The Solidarity movement began at the Gdańsk shipyard in 1980.",
    fun9: "Poland’s flag has been used since 1919 with white over red.",
    quiz_title: "Poland Quiz",
    q1_title: "1. What is the capital of Poland?",
    q1_a: "Berlin",
    q1_b: "Warsaw",
    q1_c: "Prague",
    q2_title: "2. Which sea borders Poland to the north?",
    q2_a: "Baltic Sea",
    q2_b: "Black Sea",
    q2_c: "Mediterranean Sea",
    q3_title: "3. What is the traditional Polish dumpling called?",
    q3_a: "Gyoza",
    q3_b: "Ravioli",
    q3_c: "Pierogi",
    q4_title: "4. In which year did Poland regain independence after partitions?",
    q4_a: "1918",
    q4_b: "1945",
    q4_c: "1991",
    q5_title: "5. Which river is the longest in Poland?",
    q5_a: "Vistula",
    q5_b: "Oder",
    q5_c: "Danube",
    submit_button: "Submit Quiz",
    footer1: "©2026 - Facts about Poland",
    footer2: "©Credits to Stefan Simion,Catalina Stan and Teodora Serban™.",
    "perfect_score": "Perfect score! You know a lot about Poland!",
    "good_job": "Good job! You scored {{score}} out of {{total}}. Keep exploring Poland.",
    "better_luck": "Try again! You scored {{score}} out of {{total}}. Learn more about Poland."
  },
  ro: {
    home_title: "Descoperă Polonia",
    culture_title: "Cultura Poloniei",
    quiz_header: "Chestionar rapid",
    nav_home: "Acasă",
    nav_physicists: "Cultură",
    nav_geography: "Geografie",
    nav_history: "Istorie",
    nav_about: "Despre noi",
    nav_quiz: "Chestionar",
    home_subtitle: "Descoperă Polonia",
    home_intro: "Polonia este o țară din Europa Centrală cu o istorie bogată, o geografie variată și tradiții vibrante.",
    home_intro2: "Explorează orașele, peisajele și patrimoniul cultural.",
    practice_badge: "Geografie",
    practice_example: "Exemplu: Vistula este cel mai lung râu din Polonia.",
    practice_formula: "Capitala: Varșovia",
    laws_title: "Geografia Poloniei",
    laws_point1: "Polonia este mărginită de Germania, Cehia, Slovacia, Ucraina, Belarus, Lituania și Rusia.",
    laws_point2: "Munții Carpați și Sudetenii se află în partea de sud.",
    laws_point3: "Marea Baltică formează coasta de nord a Poloniei.",
    laws_point4: "Vistula este cel mai lung râu din Polonia.",
    law1: "Cel mai înalt vârf: Rysy ajunge la 2.499 metri în Munții Tatra.",
    law2: "Cel mai mare lac: Śniardwy acoperă aproximativ 113 kilometri pătrați.",
    law3: "Oraș principal: Varșovia este capitala și cel mai mare oraș al Poloniei, situat pe râul Vistula.",
    laws_more: "Vezi mai mult" ,
    activity_badge: "Tradiții",
    activity_text: "Încearcă: Numește un fel de mâncare tradițional polonez și un dans popular.",
    activity_answer: "Răspuns: Pierogi sunt colțunași, iar poloneza este un dans tradițional.",
    work_title: "Cultură și Sărbători",
    work_text: "Polonia sărbătorește multe zile importante, inclusiv Crăciunul (Wigilia) și Paștele (Wielkanoc), cu obiceiuri unice.",
    kinetic: "Fel tradițional: Pierogi",
    potential: "Costum tradițional: Straie populare (stroje ludowe)",
    try_badge: "Știai că?",
    try_example: "Exemplu: Steagul Poloniei are două dungi orizontale: alb deasupra și roșu dedesubt.",
    culture_more: "Vezi mai mult",
    waves_title: "Știai că?",
    waves_text: "Polonia are situri UNESCO comoara precum Salina Wieliczka și Castelul Malbork.",
    wave1: "Pădurea Białowieża este una dintre ultimele păduri virgine din Europa.",
    wave2: "Munții Tatra includ cel mai înalt vârf din Polonia, Rysy.",
    wave3: "Castelul Malbork este cel mai mare castel din lume ca suprafață.",
    wave4: "Polonia a aderat la Uniunea Europeană în 2004.",
    experiment_badge: "Fapt distractiv",
    experiment_text: "Cuvântul 'Polska' înseamnă 'Țara polanilor'.",
    experiment_note: "Notă: Limba oficială a Poloniei este poloneza.",
    geo_title: "Geografia Poloniei",
    geo_subtitle: "Explorează peisajele Poloniei",
    geo_intro: "Geografia Poloniei cuprinde peisaje diverse, de la munți la câmpii, de la râuri la lacuri. Descoperă frumusețea naturală și minunile geografice ale Poloniei.",
    geo_intro2: "Află despre relieful, clima și caracteristicile naturale ale Poloniei într-un mod captivant.",
    geo_badge: "Fapt cheie",
    geo_example: "Exemplu: Polonia are o suprafață de 312.696 kilometri pătrați.",
    geo_formula: "Cel mai înalt vârf: Rysy (2.499 m)",
    terrain_title: "Relief și granițe",
    terrain_point1: "Polonia se află în Europa Centrală, având granițe cu șapte țări: Germania, Cehia, Slovacia, Ucraina, Belarus, Lituania și Rusia.",
    terrain_point2: "Granița de nord este pe coasta Mării Baltice.",
    terrain_point3: "Regiunile sudice includ Munții Carpați și Munții Sudetici.",
    terrain_point4: "Partea centrală a Poloniei este formată din câmpii întinse și podișuri.",
    terrain1: "Munți: Munții Tatra sunt cei mai înalți din Polonia.",
    terrain2: "Râuri: Vistula (Wisła) este cel mai lung râu, având 1.047 km.",
    terrain3: "Lacuri: Polonia are peste 9.000 de lacuri, cel mai mare fiind Śniardwy.",
    explore_badge: "Explorează",
    explore_text: "Încearcă: Numește principalele regiuni geografice ale Poloniei.",
    explore_answer: "Răspuns: Câmpii, podișuri și munți.",
    climate_title: "Climă și natură",
    climate_text: "Polonia are un climat temperat cu patru anotimpuri distincte, influențat de factorii continentali și oceanici.",
    climate1: "Temperatură medie: 7-8°C pe an.",
    climate2: "Precipitații: Aproximativ 600 mm pe an.",
    nature_badge: "Știai că?",
    nature_example: "Exemplu: Pădurea Białowieża este un sit UNESCO și găzduiește zimbrul european.",
    regions_title: "Regiuni și repere",
    regions_text: "Polonia este împărțită în 16 voievodate, fiecare cu trăsături geografice unice.",
    region1: "Masovia: Acasă la Varșovia și câmpii centrale.",
    region2: "Polonia Mică: Cu Munții Tatra și Cracovia.",
    region3: "Pomerania: Coastă la Marea Baltică și lacuri.",
    region4: "Silezia: Regiune industrială cu munți.",
    landmark_badge: "Fapt distractiv",
    landmark_text: "Polonia are 23 de parcuri naționale care protejează ecosisteme diverse.",
    landmark_note: "Notă: Râurile Oder și Neisse formează o parte a graniței de vest.",
    history_title: "Istoria Poloniei",
    history_subtitle: "Momente cheie în istoria poloneză",
    history_intro: "Trecutul Poloniei include regate medievale, Uniunea Polono-Lituaniană, împărțiri și renaștere. Descoperă pietrele de hotar care au modelat națiunea.",
    history_intro2: "Află despre date importante, lideri și evenimente care definesc identitatea Poloniei.",
    history_badge: "Cronologie",
    history_example: "Exemplu: Uniunea de la Lublin (1569) a creat Uniunea Polono-Lituaniană.",
    history_formula: "An: 1918 – Polonia și-a recăpătat independența.",
    history_section1: "Bazele și regatele",
    history_point1: "966: Mieszko I s-a convertit la creștinism și a unit triburile poloneze.",
    history_point2: "1025: Bolesław I cel Viteaz a devenit primul rege încoronat al Poloniei.",
    history_point3: "1138: Fragmentarea Poloniei a început cu Testamentul lui Bolesław III.",
    history_note_badge: "Știai că?",
    history_note_text: "Capitala medievală a Poloniei a fost Cracovia până în secolul al XVI-lea.",
    history_section2: "Uniunea și împărțirile",
    history_section2_text: "Uniunea Polono-Lituaniană (1569–1795) a fost o putere majoră europeană până când a fost împărțită de vecinii săi.",
    history_point4: "1772, 1793, 1795: Trei împărțiri au șters Polonia de pe hartă.",
    history_point5: "1791: Constituția din 3 Mai a fost adoptată—prima constituție modernă din Europa.",
    history_fact_badge: "Fapt",
    history_fact_text: "Constituția din 3 Mai este sărbătorită ca sărbătoare națională în Polonia.",
    history_section3: "Epoca modernă",
    history_section3_text: "Polonia și-a recăpătat independența în 1918, a îndurat al Doilea Război Mondial și a ieșit din comunism în 1989.",
    history_point6: "1939: Germania și Uniunea Sovietică au invadat Polonia, declanșând al Doilea Război Mondial.",
    history_point7: "1945–1989: Polonia a făcut parte din Blocul Estic sub regimul comunist.",
    history_point8: "1989: Mișcarea Solidaritatea a ajutat la aducerea democrației în Polonia.",
    history_footer_badge: "Fapt distractiv",
    history_footer_text: "Polonia a aderat la NATO în 1999 și la UE în 2004.",
    about_title: "Despre noi",
    about_subtitle: "Cine suntem",
    about_intro: "Acest proiect a fost creat de studenții de la Colegiul Național Ienăchiță Văcărescu.",
    about_intro2: "Echipa noastră: Simion Ștefan, Stan Catalina și Teodora Serban.",
    about_badge: "Misiune",
    about_example: "Am pus inima și sufletul nostru în acest proiect și scopul nostru este de a informa și educa oamenii.",
    about_formula: "Scop: Împărtășirea cunoștințelor.",
    about_section1: "Echipa noastră",
    about_point1: "Simion Ștefan",
    about_point2: "Stan Catalina",
    about_point3: "Teodora Serban",
    about_note_badge: "Contact",
    about_note_text: "Vizitați ienachita.com pentru site-ul școlii noastre.",
    about_contact: "Vizitați ienachita.com pentru site-ul școlii noastre.",
    about_section2: "Proiectul nostru",
    about_section2_text: "Adaugă detalii despre proiect aici.",
    about_point4: "Adaugă caracteristică proiect aici.",
    about_point5: "Adaugă caracteristică proiect aici.",
    about_fact_badge: "Fapt",
    about_fact_text: "Adaugă un fapt distractiv aici.",
    about_section3: "Mai multe informații",
    about_section3_text: "Adaugă informații suplimentare aici.",
    about_point6: "Adaugă punct aici.",
    about_point7: "Adaugă punct aici.",
    about_point8: "Adaugă punct aici.",
    about_footer_badge: "Mulțumesc",
    about_footer_text: "Adaugă mesaj de mulțumire aici.",
    newton_text: "Marie Curie s-a născut la Varșovia și a câștigat două premii Nobel pentru lucrările despre radioactivitate.",
    einstein_text: "Frédéric Chopin a fost un compozitor și pianist polonez faimos pentru piesele sale poetice pentru pian.",
    galileo_text: "Lech Wałęsa a condus mișcarea Solidaritatea care a contribuit la încheierea regimului comunist în Polonia.",
    why_title: "De ce să înveți despre Polonia?",
    why1: "Polonia are o istorie bogată care a modelat Europa.",
    why2: "Tradițiile culturale includ muzică, mâncare și povestiri.",
    why3: "Înțelegerea Poloniei ajută la aprecierea diversității europene.",
    why4: "Geografia Poloniei include munți, păduri și o coastă la Marea Baltică.",
    why5: "Polonezii au avut roluri importante în știință, artă și politică.",
    why6: "Bucătăria poloneză este cunoscută pentru pierogi, cârnați (kielbasa) și supe consistente.",
    why7: "Polonia găzduiește multe situri din Patrimoniul Mondial UNESCO.",
    why8: "Limba și literatura reflectă istoria îndelungată a Poloniei.",
    why9: "A învăța despre Polonia te conectează la spiritul său rezilient.",
    fun_title: "Curiozități",
    fun1: "Varșovia este numită uneori 'Orașul Phoenix' pentru reconstruirea sa după al Doilea Război Mondial.",
    fun2: "Polonia are una dintre cele mai vechi saline din lume la Wieliczka.",
    fun3: "Imnul național polonez este unul dintre cele mai vechi din Europa.",
    fun4: "Polonia găzduiește cel mai mare castel după suprafață, Malbork.",
    fun5: "Pădurea Białowieża este casa zimbrului european.",
    fun6: "Muntele cel mai înalt din Polonia se află în Munții Tatra.",
    fun7: "Matematicianul polonez Stefan Banach a pus bazele analizei funcționale moderne.",
    fun8: "Mișcarea Solidaritatea a început la șantierul naval din Gdańsk în 1980.",
    fun9: "Steagul Poloniei este folosit din 1919 și are alb deasupra roșului.",
    quiz_title: "Chestionar despre Polonia",
    q1_title: "1. Care este capitala Poloniei?",
    q1_a: "Berlin",
    q1_b: "Varșovia",
    q1_c: "Praga",
    q2_title: "2. Care mare mărginește Polonia la nord?",
    q2_a: "Marea Baltică",
    q2_b: "Marea Neagră",
    q2_c: "Marea Mediterană",
    q3_title: "3. Cum se numesc colțunașii tradiționali polonezi?",
    q3_a: "Gyoza",
    q3_b: "Ravioli",
    q3_c: "Pierogi",
    q4_title: "4. În ce an și-a recăpătat Polonia independența după împărțiri?",
    q4_a: "1918",
    q4_b: "1945",
    q4_c: "1991",
    q5_title: "5. Care este cel mai lung râu din Polonia?",
    q5_a: "Vistula",
    q5_b: "Oder",
    q5_c: "Dunărea",
    submit_button: "Trimite Chestionarul",
    footer1: "©2026 - Fapte despre Polonia",
    footer2: "Credite catre Stefan Simion,Catalina Stan,Teodora Serban™.",
    "perfect_score": "Scor perfect! Știi multe despre Polonia!",
    "good_job": "Bravo! Ai obținut {{score}} din {{total}}. Continuă să explorezi Polonia.",
    "better_luck": "Încearcă din nou! Ai obținut {{score}} din {{total}}. Află mai multe despre Polonia."
  }
};


let savedLanguage = localStorage.getItem("language");
let currentLanguage=null;




if (savedLanguage==null){
    currentLanguage = "en";

}else{
    currentLanguage = savedLanguage;
}
updateLanguage(currentLanguage);
let enButton=document.querySelector("#btn-en");
let roButton=document.querySelector("#btn-ro");
if(enButton&& roButton){
    enButton.addEventListener("click", function(){
        currentLanguage="en";
        localStorage.setItem("language", "en");
        updateLanguage("en");
    });
    roButton.addEventListener("click", function(){
        currentLanguage="ro";
        localStorage.setItem("language", "ro");
        updateLanguage("ro");
    }); 
}
function updateLanguage(lang){
    let elements=document.querySelectorAll("[data-key]");
    console.log("Updating language to: " + lang);
    console.log("Elements to update: ", elements);
    for(let i=0; i<elements.length; i++){
        let element=elements[i];
        let key=element.getAttribute("data-key");
        console.log("updating element:",element)
        console.log("Data key:", key
        )
        let languageObject=texts[lang];
        console.log("Language object:", languageObject);    
        let translatedText=languageObject[key];
        console.log("Translated text:", translatedText);
        element.textContent=translatedText;
    }

    // Special case: contact link requires HTML <a> and should open in a new tab
    const contactLink = document.getElementById("about-contact-link");
    if (contactLink) {
        const languageObject = texts[lang];
        contactLink.textContent = languageObject.about_contact;
    }

}
let correctAnswers={
    q1:"b",
    q2:"a",
    q3:"c",
    q4:"a",
    q5:"a"
};
function checkQuiz(){
    let score=0;
    let totalQuestions=5;

let answer1=document.querySelector('input[name="q1"]:checked');
if(answer1 && answer1.value===correctAnswers.q1){
    score=score+1;
}
let answer2=document.querySelector('input[name="q2"]:checked');
if(answer2 && answer2.value===correctAnswers.q2){
    score=score+1;
}
let answer3=document.querySelector('input[name="q3"]:checked');
if(answer3 && answer3.value===correctAnswers.q3){
    score=score+1;
}
let answer4=document.querySelector('input[name="q4"]:checked');
if(answer4 && answer4.value===correctAnswers.q4){
    score=score+1;
}   
let answer5=document.querySelector('input[name="q5"]:checked');
if(answer5 && answer5.value===correctAnswers.q5){
    score=score+1;
}   
let resultParagraph=document.querySelector("#result");
let resultKey="";
if(score===totalQuestions){
    resultKey="perfect_score";

}else if(score>=2){
    resultKey="good_job";
}else{
    resultKey="better_luck";
}

let resultMessage=texts[currentLanguage][resultKey];
resultMessage=resultMessage.replace("{{score}}",score);
resultMessage=resultMessage.replace("{{total}}",totalQuestions);
resultParagraph.textContent=resultMessage;
resultParagraph.style.display="block";
}

let checkQuizButton=document.querySelector("#check-btn");
if (checkQuizButton) {
    checkQuizButton.addEventListener("click", checkQuiz);
}
