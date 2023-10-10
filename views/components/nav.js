/* eslint-disable no-undef */
const navbar = document.querySelector('#nav');
const closeApp = document.querySelector('#closed');


const createNavHome = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 text-zinc-900 dark:text-slate-50 justify-between ">

        <a class="font-bold text-xl  dark:text-zinc-50 flex items-center gap-2" href="/" >
            <img src="/images/contact-list-logo.jpg" class="h-8 w-8 rounded-md"> <div>Contacts<span class="text-[#39BBBD]">App</span></div></img>
        </a>

        <!-- mobile version -->

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2 rounded-lg hover:bg-zinc-300 dark:text-zinc-50 hover:dark:bg-slate-700 md:hidden cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <!-- tablet/pc version -->

          <div class="hidden md:flex flex-row gap-4">
            <a href="/login/" class="hover:underline dark:text-zinc-50">Login</a>
            <a href="/signup/" class="hover:underline dark:text-zinc-50">Registro</a>
          </div>

          <!-- menu mobile -->

            <div class="fixed bg-slate-800 bg-opacity-90 top-16 right-0 hidden left-0 bottom-0 justify-center items-center flex-col text-slate-50 gap-4">
                <a href="/login/" class="bg-[#39BBBD] hover:bg-[#429fa0] dark:text-zinc-900 rounded-lg p-4">Login</a>
                <a href="/signup/" class="bg-[#39BBBD] hover:bg-[#429fa0] dark:text-zinc-900 rounded-lg p-4">Registro</a>
            </div>          
    </div>
    `;
};
const createNavSignup = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 text-zinc-900 dark:text-slate-50 justify-between ">

        <a class="font-bold text-xl  dark:text-zinc-50 flex items-center gap-2" href="/" >
            <img src="/images/contact-list-logo.jpg" class="h-8 w-8 rounded-md"> <div>Contacts<span class="text-[#39BBBD]">App</span></div></img>
        </a>

        <!-- mobile version -->

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2 rounded-lg hover:bg-zinc-300 dark:text-zinc-50 hover:dark:bg-slate-700 md:hidden cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <!-- tablet/pc version -->

          <div class="hidden md:flex flex-row gap-4">
            <a href="/login/" class="hover:underline dark:text-zinc-50">Login</a>
            <a href="/signup/" class="hover:underline dark:text-zinc-50">Registro</a>
          </div>

          <!-- menu mobile -->

            <div class="fixed bg-slate-800 bg-opacity-90 top-16 right-0 hidden left-0 bottom-0 justify-center items-center flex-col text-slate-50 gap-4">
                <a href="/login/" class="bg-[#39BBBD] hover:bg-[#429fa0] dark:text-zinc-900 rounded-lg p-4">Login</a>
            </div>          
    </div>
    `;
};
const createNavLogin = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 text-zinc-900 dark:text-slate-50 justify-between ">

        <a class="font-bold text-xl  dark:text-zinc-50 flex items-center gap-2" href="/" >
            <img src="/images/contact-list-logo.jpg" class="h-8 w-8 rounded-md"> <div>Contacts<span class="text-[#39BBBD]">App</span></div></img>
        </a>

        <!-- mobile version -->

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2 rounded-lg hover:bg-zinc-300 dark:text-zinc-50 hover:dark:bg-slate-700 md:hidden cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <!-- tablet/pc version -->

          <div class="hidden md:flex flex-row gap-4">
            <a href="/login/" class="hover:underline dark:text-zinc-50">Login</a>
            <a href="/signup/" class="hover:underline dark:text-zinc-50">Registro</a>
          </div>

          <!-- menu mobile -->

            <div class="fixed bg-slate-800 bg-opacity-90 top-16 right-0 hidden left-0 bottom-0 justify-center items-center flex-col text-slate-50 gap-4">
                <a href="/signup/" class="bg-[#39BBBD] hover:bg-[#429fa0] dark:text-zinc-900 rounded-lg p-4">Registro</a>
            </div>          
    </div>
    `;
};
const createNavContacts = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 text-zinc-900 dark:text-slate-50 justify-between ">

        <a class="font-bold text-xl  dark:text-zinc-50 flex items-center gap-2" href="/" >
            <img src="/images/contact-list-logo.jpg" class="h-8 w-8 rounded-md"> <div>Contacts<span class="text-[#39BBBD]">App</span></div></img>
        </a>

        <!-- mobile version -->

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 p-2 rounded-lg hover:bg-zinc-300 dark:text-zinc-50 hover:dark:bg-slate-700 md:hidden cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <!-- tablet/pc version -->

          <div class="hidden md:flex flex-row gap-4">
            <button id="close-btn" class="hover:underline dark:text-slate-50">Cerrar sesión</button>
            <span class="updating hidden"></span>
          </div>

          <!-- menu mobile -->

            <div class="fixed bg-slate-800 bg-opacity-90 top-16 right-0 hidden left-0 bottom-0 justify-center items-center flex-col text-slate-50 gap-4">
                <button id="close-btn" class="bg-[#39BBBD] hover:bg-[#429fa0] rounded-lg p-4">Cerrar sesión</button>
                <span class="updating hidden"></span>
            </div>          
    </div>
    `;
};
const closed = () => {
    closeApp.innerHTML = `
    <div class = "fixed bg-zinc-50 dark:bg-slate-800 top-16 left-0 right-0 h-screen w-full mx-auto flex items-center flex-col">
        <p class="font-bold text-slate-950 dark:text-slate-50 mx-auto mt-16">Sesión cerrada, vuelve pronto.</p>
        <a href="/" class="bg-[#39BBBD] hover:bg-[#429fa0] rounded-lg p-4 mt-4">Volver al inicio</a>
		<img src="/images/logout.svg" class="top-16 h-screen w-5/6 md:w-3/6 lg:w-1/3 mx-auto right-0 left-0" alt="imagen">
    </div>
    `;
};
if (window.location.pathname === '/') {
    createNavHome();
} else if (window.location.pathname === '/signup/') {
    createNavSignup();
} else if (window.location.pathname === '/login/') {
    createNavLogin();
} else if (window.location.pathname === '/contacts/') {
    createNavContacts();
}

const navBtn = navbar.children[0].children[1];

// eslint-disable-next-line no-unused-vars
navBtn.addEventListener('click', e => {
    const menuMobile = navbar.children[0].children[3];
    if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" >';
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('flex');

    } else {
        navBtn.classList.remove('active');
        navBtn.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />';
        menuMobile.classList.add('hidden');
        menuMobile.classList.remove('flex');
    }
});
const closeBtnDesktop = navbar.children[0].children[2].children[0];
const loaderLogoutDesktop = navbar.children[0].children[2].children[1];
const closeBtnMobile = navbar.children[0].children[3].children[0];
const loaderLogoutMobile = navbar.children[0].children[3].children[1];

closeBtnDesktop.addEventListener('click', async () => {
    closeBtnDesktop.classList.add('hidden');
    loaderLogoutDesktop.classList.remove('hidden');
    try {
        await axios.get('/api/logout');
        closed();
        closeBtnDesktop.classList.remove('hidden');
        loaderLogoutDesktop.classList.add('hidden');
        window.location.pathname = '/login';
    } catch (error) {
        closeBtnDesktop.classList.remove('hidden');
        loaderLogoutDesktop.classList.add('hidden');
        console.log(error);
    }
});
closeBtnMobile.addEventListener('click', async () => {
    closeBtnMobile.classList.add('hidden');
    loaderLogoutMobile.classList.remove('hidden');
    try {
        await axios.get('/api/logout');
        closed();
        closeBtnMobile.classList.remove('hidden');
        loaderLogoutMobile.classList.add('hidden');
        window.location.pathname = '/login';
    } catch (error) {
        closeBtnMobile.classList.remove('hidden');
        loaderLogoutMobile.classList.add('hidden');
        console.log(error);
    }
});