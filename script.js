document.addEventListener('DOMContentLoaded', function() {

    // --- MOBILE NAVIGATION ---
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navIcon = navToggle.querySelector('i');
    const navLinks = document.querySelectorAll('.nav-menu a');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Cambiar el ícono de hamburguesa a una 'X' y viceversa
        if (navMenu.classList.contains('active')) {
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-times');
        } else {
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        }
    });

    // --- CERRAR MENÚ AL HACER CLIC EN UN ENLACE ---
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        });
    });
    
    // --- SMOOTH SCROLL FOR NAV LINKS ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- HERO CAROUSEL ---
    if (document.querySelector('.hero-swiper')) {
        const heroSwiper = new Swiper('.hero-swiper', {
            // Opciones
            loop: true,
            effect: 'fade', // Efecto de desvanecimiento
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000, // Cambia cada 5 segundos
                disableOnInteraction: false,
            },
            pagination: { el: '.swiper-pagination', clickable: true },
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        });
    }
    
    // --- MENU LOGIC (only for index.html) ---
    const menuGrid = document.querySelector('.menu-grid');
    if (menuGrid) {
        const menuData = {
            breakfast: [
                { name: "Ensalada de fruta con miel, yogurt y granola", price: "17.00" },
                { name: "Waffles Belgas con miel de maple y frutos rojos", price: "22.00" },
                { name: "Quiche de Poro y Champignones", description: "Con guarnición verde y vinagreta de la casa.", price: "21.00" },
                { name: "Quiche de Espinaca, blue cheese y cebollas caramelizadas", description: "Guarnición verde con vinagreta de la casa.", price: "24.00" },
                { name: "Pastel de Choclo relleno con carne", description: "Acompañado de ensalada verde.", price: "20.00" },
                { name: "Panini Capresse", description: "En pan campesino relleno de queso mozarella, pesto y tomate confitado.", price: "20.00" },
                { name: "Tostón de Palta", description: "Con una capa de queso crema, palta y huevos pochados.", price: "22.00" }
            ],
            almuerzo: [
                { categoryTitle: "Abrebocas" },
                { name: "Carpaccio de res clásico a lo Harris Bar", price: "42.00" },
                { name: "Canastas Crocantes de tartare de atún", description: "Con una base de palta y sour cream.", price: "34.00" },
                { name: "Champiñones al ajillo", description: "Acompañados de tostadas de pan Campesino.", price: "35.00" },
                { name: "Taquitos de panceta agridulce", description: "Acompañados de guacamole y pico de gallo.", price: "32.00" },
                { categoryTitle: "Ensaladas y Pokes" },
                { name: "Ensalada César a nuestro estilo", description: "A base de lechuga romana ahumada acompañada de pollo y tradicional aliño César.", price: "39.00" },
                { name: "Ensalada con Roast beef", description: "Mix de lechugas, espinaca, blue cheese, peras laminadas.", price: "38.00" },
                { name: "Ensalada de Quinua Gourmet a la griega", description: "Acompañada de queso fresco, aceituna, cebolla y tomate cherry.", price: "28.00" },
                { name: "Pokebowl de atún", description: "A escoger arroz shari o quinua tricolor (atún, palta, tomate, pepinillo, choclito, holantao).", price: "33.00" },
                { categoryTitle: "Sandwiches" },
                { name: "Sandwich triple tradicional", price: "14.00" },
                { name: "Sandwich triple de pollo y palta", price: "14.00" },
                { name: "Sandwich de lomo", description: "En pan ciabatta relleno de roast beef con salsa de champignones, queso gouda y toques de mostaza dijón.", price: "26.00" },
                { categoryTitle: "Platos de Fondo" },
                { name: "Osobuco cocido 12 horas", description: "A baja temperatura acompañado con gratín (pastel de papa).", price: "55.00" },
                { name: "Tagliatelle pasta con salsa de hongos y trozos de lomo", price: "42.00" },
                { name: "Quinotto cremoso de ají y langostinos a la miel", price: "42.00" },
            ],
            postres: [
                { categoryTitle: "Delicadeza de Sabores" },
                { name: "Mousse de algarrobina con salsa de café", price: "16.00" },
                { name: "Semifreddo de chocolate con salsa de fresas", price: "16.00" },
                { name: "Skillet Cookie", description: "Galleta calientita coronada con helado de vainilla.", price: "15.00" },
                { name: "Cheesecake Fresa", price: "14.00" },
                { name: "Torta de Chocolate", price: "13.00" },
                { name: "Torta de Zanahoria", price: "14.00" },
                { categoryTitle: "Dulcecitos" },
                { name: "Alfajor", price: "4.50" },
                { name: "Brownie", price: "4.50" },
                { name: "Maná", price: "2.00" }
            ],
            bebidas: [
                { categoryTitle: "Cafés" },
                { name: "Café americano", price: "8.00" },
                { name: "Capuccino", price: "9.00" },
                { name: "Chocolate Caliente (estacional)", price: "12.00" },
                { categoryTitle: "Cafés Fríos" },
                { name: "Iced americano", price: "8.00" },
                { name: "Frapuccino Clásico", price: "14.00" },
                { categoryTitle: "Refrescos y Jugos" },
                { name: "Limonada clásica", price: "7.50" },
                { name: "Chicha morada", price: "7.50" },
                { name: "Jugo de naranja", price: "12.00" },
                { categoryTitle: "Cocktails" },
                { name: "APEROL SPRITZ", price: "26.50" },
                { name: "TINTO DE VERANO", price: "29.50" }
            ]
        };
        const filterButtons = document.querySelectorAll('.menu-filter-btn');

        const renderMenu = (category) => {
            menuGrid.innerHTML = ''; // Clear current items

            const categoriesToRender = (category === 'all')
                ? Object.keys(menuData)
                : [category];

            categoriesToRender.forEach(catKey => {
                const categoryName = {
                    breakfast: "Breakfast & Brunch",
                    almuerzo: "Almuerzo",
                    postres: "Postres",
                    bebidas: "Bebidas"
                }[catKey];

                if (category === 'all') {
                    const categoryHeader = document.createElement('h3');
                    categoryHeader.className = 'menu-category-title';
                    categoryHeader.textContent = categoryName;
                    menuGrid.appendChild(categoryHeader);
                }

                menuData[catKey].forEach(item => {
                    if(item.categoryTitle) {
                         const subCategoryHeader = document.createElement('h4');
                         subCategoryHeader.className = 'menu-subcategory-title'; // Puedes estilizar esto si quieres
                         subCategoryHeader.textContent = item.categoryTitle;
                         subCategoryHeader.style.fontFamily = "var(--font-titulos)";
                         subCategoryHeader.style.marginTop = "20px";
                         subCategoryHeader.style.color = "var(--azul-puerta)";
                         menuGrid.appendChild(subCategoryHeader);
                    } else {
                        const itemElement = document.createElement('div');
                        itemElement.className = 'menu-item';
                        itemElement.innerHTML = `
                            <div class="menu-item-header">
                                <h4>${item.name}</h4>
                                <span class="menu-item-price">S/. ${item.price}</span>
                            </div>
                            ${item.description ? `<p class="menu-item-description">${item.description}</p>` : ''}
                        `;
                        menuGrid.appendChild(itemElement);
                    }
                });
            });
        };

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderMenu(button.dataset.category);
            });
        });

        renderMenu('all');
    }
    // --- SCROLL REVEAL ANIMATION ---
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: dejar de observar el elemento una vez que es visible
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.1, // 10% del elemento debe ser visible
        rootMargin: '0px 0px -50px 0px' // Empieza la animación un poco antes de que llegue al fondo
    });

    // Observar todos los elementos con la clase .reveal
    document.querySelectorAll('.reveal').forEach(elem => {
        revealObserver.observe(elem);
    });

    // --- SCROLL SPY FOR NAVIGATION ---
    const navLinksForSpy = document.querySelectorAll('.nav-menu a[href^="index.html#"]');

    // Solo ejecutar el scroll spy en la página de inicio
    if (navLinksForSpy.length > 0 && document.getElementById('inicio')) {
        const sections = document.querySelectorAll('main section[id]');
        const scrollSpyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    
                    navLinksForSpy.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `index.html#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { 
            rootMargin: '-50% 0px -50% 0px' // Activa el enlace cuando la sección está en el centro de la pantalla
        });

        sections.forEach(section => {
            scrollSpyObserver.observe(section);
        });
    }

    // --- LIGHTBOX FOR GALLERY ---
    if (document.querySelector('.glightbox')) {
        const lightbox = GLightbox({
            selector: '.glightbox',
            touchNavigation: true,
            loop: true,
            autoplayVideos: true
        });
    }
});