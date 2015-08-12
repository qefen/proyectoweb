(function (){

	var cache = {};

	function get (url, cb) {
		if (cache[url]) return cb(cache[url]);
			$.ajax({
				url: url,
				success: function(data) {
				cache[url] = data;
				cb(data);
			},
			error: function(jqXHR, textStatus, errorThrown) {
			console.log(jqXHR, textStatus, errorThrown);
			},
			dataType: 'text'
		});
	}

	window.init={
		ctx: function (ctx, next){
			ctx.data = {};
			ctx.proyectoweb={};
			next();
		}
	};

	window.route = {
		inicio: function (ctx, next) {
			get('html/incio.html', function (html) {
				ctx.data.index =0;
				ctx.proyectoweb.content = html;
				next();
			});
		},
		pagina2: function (ctx,next) {
			get('html/pagina2.html', function (html) {
				ctx.data.index =1;
				ctx.proyectoweb.content = html;
				next();
			});
		}
	};

	window.render = {
		content: function (ctx, next){
			get('html/inicio.html', function (html) {
				var template = Hogan.compile(html),
				contentenido = template.render(ctx.data, ctx.proyectoweb);

				$('#content').empty().append(contentenido);
				changeActive(ctx.data.index);
				if (typeof done === 'function') done(ctx.data.index);
			});
		}
	};

window.done = null;
}());