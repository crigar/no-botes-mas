var mapa = new Phaser.Game(1200, 600, Phaser.CANVAS, 'mapa-interactivo');
var fondo;

var iconos = {}
var lugares = {}

var lugarActivo = { lugar: undefined, numImagen: 0 };
var textoDefecto = {};



var jugando = {
	preload: function() {
			//aqui se cargan todas las imagenes
		mapa.load.image("mapafondo", "imagenes/mapa/fondo.png");

    mapa.load.image("alpina", "imagenes/iconos/alpina.jpg");
		mapa.load.image("alpina1", "imagenes/alpina/1.jpg");
		mapa.load.image("alpina2", "imagenes/alpina/2.jpg");
		mapa.load.image("alpina3", "imagenes/alpina/3.jpg");
		mapa.load.image("alpina4", "imagenes/alpina/4.jpg");

    mapa.load.image("cabaña", "imagenes/iconos/cabaña.jpg");
		mapa.load.image("cabaña1", "imagenes/cabaña/1.jpg");
		mapa.load.image("cabaña2", "imagenes/cabaña/2.jpg");
		mapa.load.image("cabaña3", "imagenes/cabaña/3.jpg");
		mapa.load.image("cabaña4", "imagenes/cabaña/4.jpg");

    mapa.load.image("capilla", "imagenes/iconos/capilla.jpg");
		mapa.load.image("capilla1", "imagenes/capilla/1.jpg");
		mapa.load.image("capilla2", "imagenes/capilla/2.jpg");
		mapa.load.image("capilla3", "imagenes/capilla/3.jpg");
		mapa.load.image("capilla4", "imagenes/capilla/4.jpg");

    mapa.load.image("coliseo", "imagenes/iconos/coliseo.jpg");
		mapa.load.image("coliseo1", "imagenes/coliseo/1.jpg");
		mapa.load.image("coliseo2", "imagenes/coliseo/2.jpg");
		mapa.load.image("coliseo3", "imagenes/coliseo/3.jpg");
		mapa.load.image("coliseo4", "imagenes/coliseo/4.jpg");

    mapa.load.image("estadio", "imagenes/iconos/estadio.jpg");
		mapa.load.image("estadio1", "imagenes/estadio/1.jpg");
		mapa.load.image("estadio2", "imagenes/estadio/2.jpg");
		mapa.load.image("estadio3", "imagenes/estadio/3.jpg");
		mapa.load.image("estadio4", "imagenes/estadio/4.jpg");

    mapa.load.image("hotel", "imagenes/iconos/hotel.jpg");
		mapa.load.image("hotel1", "imagenes/hotel/1.jpg");
		mapa.load.image("hotel2", "imagenes/hotel/2.jpg");
		mapa.load.image("hotel3", "imagenes/hotel/3.jpg");
		mapa.load.image("hotel4", "imagenes/hotel/4.jpg");

    mapa.load.image("musica", "imagenes/iconos/musica.jpg");
		mapa.load.image("musica1", "imagenes/musica/1.jpg");
		mapa.load.image("musica2", "imagenes/musica/2.jpg");
		mapa.load.image("musica3", "imagenes/musica/3.jpg");
		mapa.load.image("musica4", "imagenes/musica/4.jpg");

    mapa.load.image("parque", "imagenes/iconos/parque.jpg");
		mapa.load.image("parque1", "imagenes/parque/1.jpg");
		mapa.load.image("parque2", "imagenes/parque/2.jpg");
		mapa.load.image("parque3", "imagenes/parque/3.jpg");
		mapa.load.image("parque4", "imagenes/parque/4.jpg");

		mapa.load.image("pionono", "imagenes/iconos/pionono.jpg");
		mapa.load.image("pionono1", "imagenes/pionono/1.jpg");
		mapa.load.image("pionono2", "imagenes/pionono/2.jpg");
		mapa.load.image("pionono3", "imagenes/pionono/3.jpg");
		mapa.load.image("pionono4", "imagenes/pionono/4.jpg");

		mapa.load.image("derecha", "imagenes/iconos/derecha.jpg");
		mapa.load.image("izquierda", "imagenes/iconos/izquierda.jpg");

	},

	create: function() {
    fondo = mapa.add.sprite(0, 0, "mapafondo");
    this.ponerIconos();
		this.ponerImagenesLugares();
		this.agregarTexto();
		fondo.inputEnabled = true;
		fondo.events.onInputDown.add(this.clickFondo, this);
	},
	update: function(){
    this.activarIcono();
  },
	clickFondo: function(){ //se encarga de ocultar y mostrar los componentes necesarios cuando
													//hay un lugar activo y se hace click por fuera de las imagenes

		textoDefecto.titulo.visible = true;
		textoDefecto.descripcion.visible = true;

		if (lugarActivo.lugar != undefined) {
			for (var image of lugares[lugarActivo.lugar].imagenes) {
				image.visible = false;
			}
			iconos.derecha.visible = false;
			iconos.izquierda.visible = false;
			lugares[lugarActivo.lugar].texto.titulo.visible = false;
			lugares[lugarActivo.lugar].texto.descripcion.visible = false;
		}
		for (var icono in iconos) {
			if (icono != 'derecha' && icono != 'izquierda') {
				iconos[icono].visible = true;
			}
		}

	},

  activarIcono: function( ){ //agranda los iconos cuando el mouse pasa por encima
    for (var icono in iconos) {
      if ( iconos[icono].input.pointerOver() ) {
        iconos[icono].scale.setTo(0.3, 0.3);
      }else{
        iconos[icono].scale.setTo(0.2, 0.2);
      }
    }
  },
  ponerIconos: function(){
    alpina = mapa.add.button(220, 50, "alpina", this.mostrarLugar );
    iconos.alpina = alpina;
    cabaña = mapa.add.button(220, 220, "cabaña", this.mostrarLugar);
    iconos.cabaña = cabaña;
    capilla = mapa.add.button(480, 360, "capilla", this.mostrarLugar);
    iconos.capilla = capilla;
    coliseo = mapa.add.button(330, 300, "coliseo", this.mostrarLugar);
    iconos.coliseo = coliseo;
    estadio = mapa.add.button(50, 445, "estadio", this.mostrarLugar);
    iconos.estadio = estadio;
    hotel = mapa.add.button(280, 450, "hotel", this.mostrarLugar);
    iconos.hotel = hotel;
    musica = mapa.add.button(150, 480, "musica", this.mostrarLugar);
    iconos.musica = musica;
    parque = mapa.add.button(320, 380, "parque", this.mostrarLugar);
    iconos.parque = parque;
    pionono = mapa.add.button(580, 540, "pionono", this.mostrarLugar);
    iconos.pionono = pionono;

		derecha = mapa.add.button(590, 250, "derecha", this.cambiarImagen);
		derecha.visible = false;
    iconos.derecha = derecha;
		izquierda = mapa.add.button(30, 250, "izquierda", this.cambiarImagen);
		izquierda.visible = false;
    iconos.izquierda = izquierda;

    for (var icono in iconos) {
      iconos[icono].scale.setTo(0.2, 0.2);
    }

  },
	ponerImagenesLugares: function(){
		var cantidadImagenes = 4;
		var imagenes = [];
		for (var nombreIcono in iconos) {
			for (var i = 1; i <= cantidadImagenes; i++) {
				var nombreImagen = nombreIcono + i;
				var imagen = mapa.add.button(90, 100, nombreImagen);
				imagen.scale.setTo(0.7, 0.7);
				imagen.visible = false;
				imagenes.push(imagen);
			}
			lugares[nombreIcono] = { imagenes: imagenes };
			imagenes = [];
		}
	},
	cambiarImagen: function( ){
		var nombreIcono = arguments[0].key;
		var cantidadImagenes = lugares[lugarActivo.lugar].imagenes.length;
		if (nombreIcono == 'derecha') {
			lugarActivo.numImagen = (lugarActivo.numImagen + 1) % cantidadImagenes;
		}else{
			lugarActivo.numImagen = ( lugarActivo.numImagen - 1 < 0  )? cantidadImagenes - 1 : lugarActivo.numImagen - 1  ;
		}
		for (var indiceImagen in lugares[lugarActivo.lugar].imagenes) {
			var imagen = lugares[lugarActivo.lugar].imagenes[indiceImagen];
			if (indiceImagen == lugarActivo.numImagen) {
				imagen.visible = true;
			}else{
				imagen.visible = false;
			}
		}
	},
	mostrarLugar: function(  ){
		var lugar = arguments[0].key;
		lugarActivo.lugar = lugar;
		lugarActivo.numImagen = 0;
		lugares[lugar].imagenes[0].visible = true;
		iconos['derecha'].visible = true;
		iconos['izquierda'].visible = true;
		for (var icono in iconos) {
			if (icono != 'derecha' && icono != 'izquierda') {
				iconos[icono].visible = false;
			}
		}

		textoDefecto.titulo.visible = false;
		textoDefecto.descripcion.visible = false;

		for (var lugar in lugares) {
			if (lugar == lugarActivo.lugar) {
				lugares[lugar].texto.titulo.visible = true;
				lugares[lugar].texto.descripcion.visible = true;
			}else{
				lugares[lugar].texto.titulo.visible = false;
				lugares[lugar].texto.descripcion.visible = false;
			}
		}


	},
	agregarTexto: function(){
		var styleTitulo = { font: "50px Arial", fill: "#ffffff", align: "center", wordWrap: true, wordWrapWidth: 500 };
		var styleDescripcion = { font: "20px Arial", fill: "#ffffff", align: "center", wordWrap: true, wordWrapWidth: 480 };

		lugares['alpina'].titulo = 'Alpina';
		lugares['alpina'].descripcion = 'Alpina Productos Alimenticios S.A. es una empresa multinacional colombiana productora de alimentos 3​ a base de lácteos.4​ Tiene operación en Colombia, Ecuador, Venezuela y Estados Unidos y comercializa sus productos en centro América.2​ Alpina se caracteriza por sus productos que son en su mayoría enfocados a los niños. Su CEO y presidente actual es Ernesto Fajardo.';
		lugares['cabaña'].titulo = 'Cabaña de Alpina';
		lugares['cabaña'].descripcion = 'En todo el corazón de Sopó se encuentra La Cabaña Alpina, un lugar único en el que todas las personas pueden disfrutar de deliciosos postres, sánduches, crepes, perros y productos Alpina, divertirse al aire libre y compartir con sus seres queridos. La Cabaña es el mayor símbolo de tradición de Alpina, pues La Cabaña nace desde los inicios de la compañía';
		lugares['capilla'].titulo = 'Capilla Señor de la Piedra';
		lugares['capilla'].descripcion = 'Santuario creado gracias a la Milagrosa aparición de Nuestro Señor Jesucristo sobre una roca el 3 de Diciembre de 1753. Desde el año de 1909 la imagen del Señor de La Piedra de Sopó fue traslado a su propia capilla. En 1953 se construyó el actual santuario.';
		lugares['coliseo'].titulo = 'Coliseo Municipal';
		lugares['coliseo'].descripcion = 'Es un complejo deportivo cubierto en donde se entrenan diferentes deportes y se organizan torneos municipales, intermunicipales e internacionales';
		lugares['estadio'].titulo = 'Estadio Municipal';
		lugares['estadio'].descripcion = 'Es un complejo deportivo especialmente creado para la practica del futbol, actualmente es un lugar en donde se entrenan otros deportes como el ultimate frisbee';
		lugares['hotel'].titulo = 'Hotel Camelia Real';
		lugares['hotel'].descripcion = 'Ofrecemos una imponente arquitectura colonial con un amplio y tranquilo jardín Interior y un agradable ambiente familiar. Contamos con modernas habitaciones donde podrá disfrutar de un excelente descanso y confort.';
		lugares['musica'].titulo = 'Edificio de Musica';
		lugares['musica'].descripcion = 'Es un edificio construido especialmente para las escuelas de musica que practican en el municipio, tambien es un espacio para el arte en general, alli practican escuelas de baile, pintura y escultura';
		lugares['parque'].titulo = 'Parque Principal';
		lugares['parque'].descripcion = 'El parque principal engalana el centro del municipio con la frondosidad de sus árboles y la belleza de las especies vegetales. Su nombre se deriva del homenaje a los mandatarios muiscas más importantes de las tres poblaciones denominados Tibas o capitanes mayores.';
		lugares['pionono'].titulo = 'Pionono';
		lugares['pionono'].descripcion = 'El cerro presenta alturas que comprenden desde los 2.800 metros. Hasta su pico máximo de 3.250 llamado Cerro de las Águilas. Por sus características geomorfológicas se ha constituido en una gran reserva forestal para la recarga de acuíferos, su fauna está representada por mamíferos como liebres, zorrillo, armadillos, curíes; aves como golondrinas, mirlas, copetones, reinitas, trogloditas, reptiles y anfibios.';

		for (var lugar in lugares) {
			var titulo = mapa.add.text(700, 20, lugares[lugar].titulo, styleTitulo);
			var descripcion = mapa.add.text(700, 200, lugares[lugar].descripcion, styleDescripcion)
			titulo.visible = false;
			descripcion.visible = false;
			lugares[lugar].texto = { titulo: titulo,
			 												 descripcion: descripcion}
		}

		var tituloDefecto = mapa.add.text(700, 20, 'Sopó, Tierra verde y Colonial', styleTitulo);
		var descripcionDefecto = mapa.add.text(700, 200, 'Sopó es un municipio colombiano ubicado en el departamento de Cundinamarca. Forma parte de la provincia de Sabana Centro. Se sitúa a 39 kilómetros al norte de Bogotá. Fue fundado en 1653 por fray Francisco Chacón. Integra el área metropolitana de Bogotá según el censo del DANE de 2005. Su parroquia católica hace parte de la diócesis de Zipaquirá.', styleDescripcion)
		tituloDefecto.visible = true;
		descripcionDefecto.visible = true;
		textoDefecto = { titulo: tituloDefecto, descripcion: descripcionDefecto };
	},
}
mapa.state.add("inicial", jugando);
mapa.state.start("inicial");
