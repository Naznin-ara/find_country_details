const searchinput = document.querySelector('#search');

const loadData = async(name) =>{
let res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
let datas = await res.json();
let data = datas[0];
console.log(datas[0]);
showDetail(data);
}

const findCountryDetail = () =>{
    let countryName = searchinput.value;
    searchinput.value = "";
   
    loadData(`${countryName}`);
   
}

const showDetail = (data) =>{
   const modalDiv = document.getElementById('medium-modal');
   
    const div = document.createElement('div');
    modalDiv.innerHTML = "";
    div.innerHTML = ` <div  class="relative w-full max-w-lg max-h-full">
    <div  class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div class="relative flex items-center justify-center p-5 border-b rounded-t dark:border-gray-600">
           <img class="w-[95%]" src="${data.flags.png}"/>
            <button type="button" class=" absolute top-0 right-0 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onclick = "closemodal()" id="closebtn" >
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
        </div>
        <!-- Modal body -->
        <div class="p-6 space-y-2">
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
               <span class="text-lg font-bold">Name :</span> ${data?.name?.common}
            </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <span class="text-lg font-bold">Continent :</span> ${data?.continents}
         </p>
         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <span class="text-lg font-bold">Capital :</span> ${data?.capital}
         </p>
         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
         <span class="text-lg font-bold">Currency :</span> ${data?.currencies?.INR?.name || ""}
      </p>
            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            <span class="text-lg font-bold">Area :</span> ${data?.area}
         </p>
         <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
         <span class="text-lg font-bold">Population :</span> ${data?.population}
      </p>
      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
         <span class="text-lg font-bold">Maps :</span> <a href="${data?.maps?.googleMaps}">click here</a>
      </p>
      
        </div>
      
     </div>
</div> `

 modalDiv.appendChild(div)

   
  

}

const closemodal = () =>{
const closebtn = document.getElementById('closebtn');
const modalDiv = document.getElementById('medium-modal');

const body = document.getElementById('body');
modalDiv.classList.add('hidden');
modalDiv.innerHTML = "";
window.location.href = "index.html";

}
