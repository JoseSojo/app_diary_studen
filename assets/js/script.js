$(document).ready(function() {
	console.log('¡jQuery is Working!');
	// HIDE ELEMENTS
	$('#msj-err-matter').hide();
	$('#alert-matter-delete').hide();
	$('#alert-add-data').hide();
	$('#alert-add-matter').hide();
	$('#alert-save-task').hide();
	$('#alert-add-data').hide();
	$('#alert-save-noti').hide();
	$('#delete-task').hide();
	$('#alert-delete-noti').hide();

	// EXECUTE TO FUNCTION
	seeData();
	seeMatter();
	seeNot();
	seeNotification();
	seeHistory();


	/*
	 * Mode
	 * DARK - LIGHT
	 *
	*/
	let modesIcos = [
		$('#dark'),
		$('#light')
	]
	modesIcos[1].hide(10);

	modesIcos[0].click(function(event) {
		modesIcos[0].hide(10);
		modesIcos[1].show(10);
		modeChange($('#body-global'),'bg-secondary','bg-light')

		modeChange($('#nav-global'),'navbar-dark','navbar-light');
		modeChange($('#nav-global'),'bg-dark','bg-light');
		modeChange($('#card-data-studen'),'bg-dark','bg-light');
		modeChange($('#card-data-studen'),'text-light','text-dark');
		modeChange($('#table-data-studen'),'table-dark','table-light');

		modeChange($('#card-matter-studen'),'bg-dark','bg-light');
		modeChange($('#table-matter-studen'),'table-dark','table-light');
		modeChange($('#table-matter-studen'),'text-light','text-dark');

		modeChange($('#card-diary-search'),'bg-dark','bg-light');
		modeChange($('#card-diary-save'),'bg-dark','bg-light');
		modeChange($('#card-diary-search'),'text-light','text-dark');
		modeChange($('#card-diary-save'),'text-light','text-dark');
		modeChange($('#table-diary'),'table-dark','table-light');

		modeChange($('#table-notifications'),'table-dark','table-light');

		modeChange($('#table-body-history'),'table-dark','table-light');

		modeChange($('#form-config'),'bg-dark','bg-light');
		modeChange($('#form-matter'),'bg-dark','bg-light');
	});
	modesIcos[1].click(function(event) {
		modesIcos[0].show(10);
		modesIcos[1].hide(10);
		modeChange($('#body-global'),'bg-light','bg-secondary');

		modeChange($('#nav-global'),'navbar-light','navbar-dark');
		modeChange($('#nav-global'),'bg-light','bg-dark');
		modeChange($('#card-data-studen'),'bg-light','bg-dark');
		modeChange($('#card-data-studen'),'text-dark','text-light');
		modeChange($('#table-data-studen'),'table-light','table-dark');

		modeChange($('#card-matter-studen'),'bg-light','bg-dark');
		modeChange($('#table-matter-studen'),'table-light','table-dark');

		modeChange($('#card-diary-search'),'bg-light','bg-dark');
		modeChange($('#card-diary-save'),'bg-light','bg-dark');
		modeChange($('#card-diary-search'),'text-dark','text-light');
		modeChange($('#card-diary-save'),'text-dark','text-light');
		modeChange($('#table-diary'),'table-light','table-dark');

		modeChange($('#table-notifications'),'table-light','table-dark');

		modeChange($('#table-body-history'),'table-light','table-dark');

		modeChange($('#form-matter'),'bg-light','bg-dark');
		modeChange($('#form-config'),'bg-light','bg-dark');
	});

	function modeChange(camp,add,remove){
		camp.removeClass(remove);
		camp.addClass(add)
	}


	/*
	 * CAMBIAR DE VENTANAS
	 *
	*/
	// Array the windows document
	let windows = [
		$('#studen'), $('#diary'),
		$('#noti'), $('#config'),
		$('#history')
	]
	// Array the buton for change window
	let btns = [
		$('#ico-studen'), $('#ico-diary'),
		$('#ico-noti'),	$('#ico-config'),
		$('#ico-history')
	]
	// ICO NOTI
	let icoNoti = false;
	let itemNoti = $('#ico-noti');
	hideIcoNoti (icoNoti,itemNoti)
	function hideIcoNoti(item,ico){
		if(item){
			ico.removeClass('bi-bell-slash-fill');
			ico.addClass('bi-bell-fill');
		}
	}
	seeHide(windows[0],windows[1],windows[2],windows[3],windows[4]);
	removeAddClass(btns[0],btns[1],btns[2],btns[3],btns[4]);

	btns[0].click(function(event) {
		seeHide(windows[0],windows[1],windows[2],windows[3],windows[4]);
		removeAddClass(btns[0],btns[1],btns[2],btns[3],btns[4]);
	});
	btns[1].click(function(event) {
		seeHide(windows[1],windows[0],windows[2],windows[3],windows[4]);
		removeAddClass(btns[1],btns[0],btns[2],btns[3],btns[4]);
	});
	btns[2].click(function(event) {
		seeHide(windows[2],windows[0],windows[1],windows[3],windows[4]);
		removeAddClass(btns[2],btns[0],btns[1],btns[3],btns[4]);
	});
	btns[3].click(function(event) {
		seeHide(windows[3],windows[0],windows[1],windows[2],windows[4]);
		removeAddClass(btns[3],btns[0],btns[1],btns[2],btns[4])
	});
	btns[4].click(function(event) {
		seeHide(windows[4],windows[0],windows[1],windows[2],windows[3]);
		removeAddClass(btns[4],btns[0],btns[1],btns[2],btns[3])
	});
	function seeHide(cero,one,two,tree,four){
		cero.show(700);
		one.hide();
		two.hide();
		tree.hide();
		four.hide();
	}	
	function removeAddClass(cero,one,two,tree,four){
		cero.removeClass('text-muted');
		one.addClass('text-muted');
		two.addClass('text-muted');
		tree.addClass('text-muted');
		four.addClass('text-muted');
		
		cero.addClass('text-warning');
		one.removeClass('text-warning');
		two.removeClass('text-warning');
		tree.removeClass('text-warning');
		four.removeClass('text-warning');
	}



	/*
	 * WINDOW CONFIG < tus datos >
	 *
	 *
	 *
	*/
	$('#msj-info-tablet').hide(6000);
	
	$('#msj-info-matter').hide(8000);
	

	$('#form-config').submit(function(event) {
		event.preventDefault();
		let postData = {
			name: $('#name').val(),
			surname: $('#surname').val(),
			univRace: $('#univ-race').val(),
			univ: $('#univ').val(),
			univDuration: $('#duration-race').val(),
			adminAge: $('#age-admin').val(),
			adminYear: $('#year-admin').val()
		};
		$.post('src/send_data.php', postData, function(response) {
			seeData();
			$('#alert-add-data').text(response)
			$('#alert-add-data').show(1000)
			$('#form-config').trigger('reset');
		});
	});

	$('#name').keyup(function(event) {
		valdiateCampConfig();
	});
	$('#surname').keyup(function(event) {
		valdiateCampConfig();
	});
	$('#univ-race').keyup(function(event) {
		valdiateCampConfig();
	});
	$('#univ').keyup(function(event) {
		valdiateCampConfig();
	});
	$('#duration-race').keyup(function(event) {
		valdiateCampConfig();
	});
	$('#age-admin').keyup(function(event) {
		valdiateCampConfig();
	});
	$('#year-admin').keyup(function(event) {
		valdiateCampConfig();
	});
	function valdiateCampConfig(){
		if ($('#name').val().length > 3 &&
			$('#surname').val().length > 3 &&
			$('#univ-race').val().length > 3 &&
			$('#univ').val().length > 3 &&
			$('#duration-race').val().length >= 1 &&
			$('#age-admin').val().length >=2 &&
			$('#year-admin').val().length > 3) {

			$('#btn-submit-data').removeClass('disabled')
			$('#btn-submit-data').removeClass('btn-outline-dark')
			$('#btn-submit-data').addClass('btn-dark')
		} else{
			$('#btn-submit-data').addClass('disabled')
			$('#btn-submit-data').addClass('btn-outline-dark')
			$('#btn-submit-data').removeClass('btn-dark')
		}
	}
	$('#form-matter').submit(function(event) {
		event.preventDefault();
		let dataPost = {
			matter: $('#input-matter').val()
		}
		$.ajax({
			url: 'src/add_matter.php',
			type: 'POST',
			data: dataPost,
			success: function(response){
				seeMatter();
				$('#alert-add-matter').text(response);
				$('#alert-add-matter').show(500)
				$('#alert-add-matter').hide(3000)
				$('#form-matter').trigger('reset');
			}
		})
	});
	$('#input-matter').keyup(function(event) {
		if ($('#input-matter').val().length > 2) {
			$('#submit-matter').removeClass('btn-outline-secondary');
			$('#submit-matter').removeClass('disabled');
			$('#submit-matter').addClass('btn-dark');
		} else{
			$('#submit-matter').addClass('btn-outline-secondary');
			$('#submit-matter').addClass('disabled');
			$('#submit-matter').removeClass('btn-dark');
		}
	});



	/*
	 * WINDOW STUDEN < perfil >
	 *
	 *
	 *
	*/
	function seeMatter (){
		$.ajax({
			url: 'src/see_matter.php',
			type: 'POST',
			success: function(response){
				let matters = JSON.parse(response);
				let templete = '';
				matters.forEach(matter =>{
					templete += `
						<tr idMatter="${matter.id}">
							<td>
								${matter.matter}
							</td>
							<td class="center-xy">
								<i class="bi-trash-fill text-danger lead matter-delete"></i>
							</td>
						</tr>
					`
				})
				$(`#table-body-matter`).html(templete)
				
			}
		})		
	}

	function seeData(){
		$.ajax({
			url: 'src/data.php',
			type: 'GET',
			success: function(response){
				let datas = JSON.parse(response);
				let templete = `
					<tr>
						<td>Estudiante</td>
						<td id="td-1">${datas.name}</td>
					</tr>
					<tr>
						<td>Carrera</td>
						<td id="td-2">${datas.race}</td>
					</tr>
					<tr>
						<td>Universidad</td>
						<td id="td-3">${datas.univ}</td>
					</tr>
					<tr>
						<td>Años de duración</td>
						<td id="td-4">${datas.year_race}</td>
					</tr>
					<tr>
						<td>Año de admision</td>
						<td id="td-5">${datas.year_admision}</td>
					</tr>
					<tr>
						<td>Edad de admision</td>
						<td id="td-6">${datas.age_admision}</td>
					</tr>`
				if (datas.name == undefined) templete = '';
				$('#table-body-data').html(templete)
			}
		})
	}

	$(document).on('click', '.matter-delete', function(event) {
		let element = $(this)[0].parentElement.parentElement;
		let idMatter = $(element).attr('idMatter');
		$.ajax({
			url: 'src/delete_matter.php',
			type: 'POST',
			data: { idMatter },
			success: function(response){
				$('#alert-matter-delete').text(response)
				$('#alert-matter-delete').show(500)
				$('#alert-matter-delete').hide(3000)
				seeMatter();
			}
		})		
	});

	/*
	 * WINDOWS DIARY
	 *
	 *
	 *
	 *
	*/
	const dataTime = new Date();
	let datePost = '';
	let inputsNoti = [
		$('#noti-matter'),
		$('#noti-descript'),
		$('#noti-day'),
		$('#noti-month'),
		$('#noti-year'),
		$('#noti-submit')
	]
	

	inputsNoti[0].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3],inputsNoti[4])
	});
	inputsNoti[1].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3],inputsNoti[4])
	});
	inputsNoti[2].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3],inputsNoti[4])
	});
	inputsNoti[3].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3],inputsNoti[4])
	});
	function validateInpustNoti(title,descript,day,month,year){
		let monthValidate = inputsNoti[2].val();
		let dayMin = 1;
		let dayMax = 31;
		if (monthValidate == 2) dayMax = 28;
		else if(monthValidate== 4 && monthValidate== 6 && monthValidate== 9 && monthValidate== 11 ) dayMax = 30;
		
		if (title.val().length > 1 &&
			descript.val().length > 2 &&
			day.val().length >= 1 &&
			month.val().length >= 1 &&
			year.val().length >= 4 &&
			year.val() >= dataTime.getYear()+1900 &&
			month.val() >= 1 && month.val() <= 12 &&
			day.val() <= dayMax &&
			day.val() >= dayMin) {


			inputsNoti[5].removeClass('btn-outline-dark');
			inputsNoti[5].removeClass('disabled');
			inputsNoti[5].addClass('btn-dark');
		} else{
			inputsNoti[5].addClass('btn-outline-dark');
			inputsNoti[5].addClass('disabled');
			inputsNoti[5].removeClass('btn-dark');
		}
	}
	$('#save-noti').submit(function(event) {
		event.preventDefault();
		let postData = {
			title: inputsNoti[0].val(),
			descript: inputsNoti[1].val(),
			day: inputsNoti[2].val(),
			month: inputsNoti[3].val(),
			year: inputsNoti[4].val()
		}
		$.ajax({
			url: 'src/save_noti.php',
			type: 'POST',
			data: postData,
			success: function(response){
				console.log(response);
				$('#save-noti')[0].reset();
				inputsNoti[5].addClass('btn-outline-dark')
				inputsNoti[5].addClass('disabled')
				$('#alert-save-noti').text(response);
				$('#alert-save-noti').show(500);
				$('#alert-save-noti').hide(3000);
				$('#save-noti').trigger('reset');
				seeNot();
				seeNotification();
				event.preventDefault();
			}
		})	
	});
	$('#search-diary').keyup(function(event) {
		let search = $('#search-diary').val()
		$.ajax({
			url: 'src/search_noti.php',
			type: 'POST',
			data: { search },
			success: function(response){
				let tasks = $.parseJSON(response);
				let templete = '';
				tasks.forEach(task =>{
					templete += `
						<li>
							${task.title}
						</li>
					`
				})
				$('#diary-search-result').html(templete)
			}
		})
	});	
	$(document).on('click', '.noti-delete', function(event) {
		let element = $(this)[0].parentElement.parentElement;
		let idNoti = $(element).attr('idRow');
		$.ajax({
			url: 'src/delete_noti.php',
			type: 'POST',
			data: { idNoti },
			success: function(response){
				seeNot();
				seeNotification();
				hideIcoNoti(icoNoti,itemNoti);
				$('#alert-delete-noti').text(response);
				$('#alert-delete-noti').show(500);
				$('#alert-delete-noti').hide(3000);
			}
		})	
	});
	/*
	 * See Noti
	*/
	function seeNot(){
		$.ajax({
			url: 'src/see_noti.php',
			type: 'POST',
			success: function(response){
				let notis = JSON.parse(response);
				let templete = '';

				notis.forEach(noti =>{
					templete += `
						<tr idRow="${noti.id}">
						<td class="small col">
							${noti.title}
						</td>
						<td class="small col">
							${noti.descript}
						</td>
						<td class="col d-none d-md-block">
							<span>
								${noti.date}
							</span>
						</td>
						<td class="small col">
							${noti.day}-${noti.month}-${noti.year}
						</td>
						<td class="center-xy col">
							<i class="bi-trash-fill text-danger noti-delete"></i>
						</td>
						</tr>
					`
				})

				$('#table-body-diary').html(templete)
			}
		})
	}
	/*
	 * Windows Notifications
	 *
	 *
	 *
	*/

	/*
	 * see notifications
	*/
	function seeNotification(){
		// NOTIFICATIONS PRIMARYS
		$.ajax({
			url: 'src/see_noti.php',
			type: 'POST',
			success: function(response){
				let notis = JSON.parse(response);
				const date = new Date();
				let dayVal = date.getDay();
				let monthVal = date.getMonth()+1;
				let yearVal = date.getYear()+1900;
				// date.getDay() date.getDay()		

				function sumDay(dayVal){
					if (dayVal < 12) {}
				}

				let templete = '';
				notis.forEach(noti =>{
					let dayJson = parseInt(noti.day);
					let monthJson = parseInt(noti.month);
					let yearJson = parseInt(noti.year);

					let resultYear = yearJson - yearVal;
					let resultMonth = monthJson - monthVal;
					let color;
					let dateLimit = '';
					let bgTable = '';
	
					if (resultMonth < 0) {
						dateLimit = 'Tiempo terminado';
						color = 'secondary'
					}
					else if (resultMonth == 0){
						let daySee = dayJson - dayVal;
						dateLimit = daySee + ' dias';
						if (daySee < 0) {
							bgTable = 'table-danger'
							color = 'danger';
							dateLimit = 'tiempo perdido';
						}
						else if (daySee == 0) {
							color = 'danger';
							dateLimit = 'hoy';
						}

						if (daySee < 3) icoNoti = true
						else icoNoti = false

						if (daySee < 5 && daySee > 0) color = 'warning';
					}
					else if (resultMonth == 1) {
						color = 'info';
						dateLimit = 'El proximo mes';
					}
					else if(resultMonth == 2 ){
						dateLimit = 'dentro de 2 meses';
						color = 'info';				
					}
					else if(resultMonth == 3 ){
						dateLimit = 'dentro de 3 meses';
						color = 'info';				
					}
					else if(resultMonth == 4 ){
						dateLimit = 'dentro de 4 meses';
						color = 'info';				
					}
					else if(resultMonth == 5 ){
						dateLimit = 'dentro de 5 meses';
						color = 'info';				
					}
					else if(resultMonth == 6 ){
						dateLimit = 'dentro de 6 meses';
						color = 'info';				
					}
					else if(resultMonth == 7 ){
						dateLimit = 'dentro de 7 meses';
						color = 'info';				
					}
					else if(resultMonth == 8 ){
						dateLimit = 'dentro de 8 meses';
						color = 'info';				
					}
					else if(resultMonth == 9 ){
						dateLimit = 'dentro de 9 meses';
						color = 'info';				
					}
					else if(resultMonth == 10 ){
						dateLimit = 'dentro de 10 meses';
						color = 'info';				
					}
					else if(resultMonth == 11 ){
						color = 'info';
						dateLimit = 'dentro de 11 meses';					
					}
					if (yearJson > yearVal) {
						color = 'secondary';
						dateLimit = resultYear + ' año';
					}
					
					templete += `
						<tr class="${bgTable}">
						<td class="text-muted">${noti.title}</td>
						<td><b class="text-info">${noti.descript}</b></td>
						<td><b class="text-${color}">${dateLimit}</b></td>
						</tr>
					`
					hideIcoNoti(icoNoti,itemNoti);
				})

				$('#table-body-notification').html(templete);		
			}
		})
	}
	/*
	 * see history
	 *
	 *
	*/
	function seeHistory(){
		$.ajax({
			url: 'src/see_history.php',
			type: 'POST',
			success: function(response){
				let history = JSON.parse(response);
				let templete = '';

				history.forEach(his =>{
					templete += `
						<tr>
						<td class="small col">
							${his.id}
						</td>
						<td class="small col">
							${his.descript}
						</td>
						<td class="small col">
							${his.date}
						</td>
						</tr>
					`
				})

				$('#table-body-history').html(templete)
			}
		})
	}
});