$(document).ready(function() {
	console.log('jQuery is Working');
	seeTask ();
	seeData();
	seeMatter();
	seeNoti();
	seeNotification();
	/*
	 * CAMBIAR DE VENTANAS
	 *
	 *
	 *
	*/
	// Array the windows document
	let windows = [
		$('#studen'), $('#diary'),
		$('#task'), $('#noti'), 
		$('#config')
	]
	// Array the buton for change window
	let btns = [
		$('#btn-studen'), $('#btn-diary'),
		$('#btn-task'), $('#btn-noti'),
		$('#btn-config')
	]
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
	removeAddClass(btns[0],btns[1],btns[2],btns[3],btns[4])

	btns[0].click(function(event) {
		seeHide(windows[0],windows[1],windows[2],windows[3],windows[4]);
		removeAddClass(btns[0],btns[1],btns[2],btns[3],btns[4])
	});
	btns[1].click(function(event) {
		seeHide(windows[1],windows[0],windows[2],windows[3],windows[4]);
		removeAddClass(btns[1],btns[0],btns[2],btns[3],btns[4])
	});
	btns[2].click(function(event) {
		seeHide(windows[2],windows[0],windows[1],windows[3],windows[4]);
		removeAddClass(btns[2],btns[0],btns[1],btns[3],btns[4])
	});
	btns[3].click(function(event) {
		seeHide(windows[3],windows[0],windows[1],windows[2],windows[4]);
		removeAddClass(btns[3],btns[0],btns[1],btns[2],btns[4])
	});
	btns[4].click(function(event) {
		seeHide(windows[4],windows[0],windows[1],windows[2],windows[3]);
		removeAddClass(btns[4],btns[0],btns[1],btns[2],btns[3])
	});
	function seeHide(cero,one,two,tree,four,){
		cero.show(700);
		one.hide();
		two.hide();
		tree.hide();
		four.hide();
	}	
	function removeAddClass(cero,one,two,tree,four){
		cero.removeClass('btn-outline-info');
		one.addClass('btn-outline-info');
		two.addClass('btn-outline-info');
		tree.addClass('btn-outline-info');
		four.addClass('btn-outline-info');
		
		cero.addClass('btn-outline-warning');
		one.removeClass('btn-outline-warning');
		two.removeClass('btn-outline-warning');
		tree.removeClass('btn-outline-warning');
		four.removeClass('btn-outline-warning');
	}



	/*
	 * WINDOW CONFIG < tus datos >
	 *
	 *
	 *
	*/
	$('#msj-info-tablet').hide(6000);
	$('#msj-err-matter').hide();
	$('#msj-info-matter').hide(8000);
	$('#alert-matter-delete').hide();
	$('#alert-add-data').hide();
	$('#alert-add-matter').hide();
	$('#alert-save-task').hide();
	$('#alert-add-data').hide();
	$('#alert-save-noti').hide();
	$('#delete-task').hide();
	$('#alert-delete-noti').hide();

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
		$.post('../validate/send_data.php', postData, function(response) {
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
			url: '../validate/add_matter.php',
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
			url: '../validate/see_matter.php',
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
			url: '../validate/data.php',
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
	$('#studen-empty-table').click(function(event) {
		let nameTable = 'data'
		$.ajax({
			url: '../validate/empty_table_studen.php',
			type: 'GET',
			data: { nameTable },
			success: function(response){
				console.log(response);
			}
		})
		
	});

	$(document).on('click', '.matter-delete', function(event) {
		let element = $(this)[0].parentElement.parentElement;
		let idMatter = $(element).attr('idMatter');
		$.ajax({
			url: '../validate/delete_matter.php',
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
	 * WINDOWS TASK < tareas >
	 *
	 *
	*/

	let inputsTaks = [
		$('#task-title'),
		$('#task-descrip'),
		$('#task-submit')
	]
	inputsTaks[0].keyup(function(event) {
		validateInpustTaks(inputsTaks[1],inputsTaks[0]);
	});

	inputsTaks[1].keyup(function(event) {
		validateInpustTaks(inputsTaks[1],inputsTaks[0]);
	});
	function validateInpustTaks (title,descript){
		if (title.val().length > 3 &&
			descript.val().length > 3) {
			inputsTaks[2].removeClass('btn-outline-dark')
			inputsTaks[2].removeClass('disabled')
			inputsTaks[2].addClass('btn-dark')
		} else{
			inputsTaks[2].addClass('btn-outline-dark')
			inputsTaks[2].addClass('disabled')
			inputsTaks[2].removeClass('btn-dark')
		}
	}
	$('#search-task').keyup(function(event) {
		let search = $('#search-task').val()
		$.ajax({
			url: '../validate/search_task.php',
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
				$('#search-result').html(templete)
			}
		})	
	});
	$('#save-task').submit(function(event) {
		event.preventDefault();
		let postData = {
			title: $('#task-title').val(),
			descript: $('#task-descrip').val()
		}
		$.ajax({
			url: '../validate/save_task.php',
			type: 'POST',
			data: postData,
			success: function(response){
				seeTask();
				seeNotification();
				$('#save-task')[0].reset();
				inputsTaks[2].addClass('btn-outline-dark')
				inputsTaks[2].addClass('disabled')
				$('#alert-save-task').text(response);
				$('#alert-save-task').show(500);
				$('#alert-save-task').hide(3000);
				$('#save-task').trigger('reset');
			}
		})	
	});

	$(document).on('click', '.task-delete', function(event) {
		let element = $(this)[0].parentElement.parentElement;
		let idTask = $(element).attr('idRow');
		$.ajax({
			url: '../validate/delete_task.php',
			type: 'POST',
			data: { idTask },
			success: function(response){
				seeTask();
				seeNotification();
				$('#delete-task').text(response);
				$('#delete-task').show(500);
				$('#delete-task').hide(3000);
			}
		})		
	});

	/*
	 * Function para ver tareas
	 *
	*/
	function seeTask(){
		$.ajax({
			url: '../validate/see_task.php',
			type: 'POST',
			success: function(response){
				let tasks = JSON.parse(response);
				let templete = '';

				tasks.forEach(task =>{
					templete += `
						<tr idRow="${task.id}">
							<td>
								${task.title}
							</td>
							<td>
								${task.descript}
							</td>
							<td class="center-xy">
								<i class="bi-trash-fill text-danger lead task-delete"></i>
							</td>
						</tr>
					`
				})
				$('#table-body-task').html(templete)
			}
		})
	}


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
		$('#noti-title'),
		$('#noti-day'),
		$('#noti-month'),
		$('#noti-year'),
		$('#noti-submit')
	]
	

	inputsNoti[0].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3])
	});
	inputsNoti[1].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3])
	});
	inputsNoti[2].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3])
	});
	inputsNoti[3].keyup(function(event) {
		validateInpustNoti(inputsNoti[0],inputsNoti[1],inputsNoti[2],inputsNoti[3])
	});
	function validateInpustNoti (title,day,month,year){
		let monthValidate = inputsNoti[2].val();
		let dayMin = 1;
		let dayMax = 31;
		if (monthValidate == 2) dayMax = 28;
		else if(monthValidate== 4 && monthValidate== 6 && monthValidate== 9 && monthValidate== 11 ) dayMax = 30;
		
		if (title.val().length > 1 &&
			day.val().length >= 1 &&
			month.val().length >= 1 &&
			year.val().length >= 4 &&
			year.val() >= dataTime.getYear()+1900 &&
			month.val() >= 1 && month.val() <= 12 &&
			day.val() <= dayMax &&
			day.val() >= dayMin) {


			inputsNoti[4].removeClass('btn-outline-dark');
			inputsNoti[4].removeClass('disabled');
			inputsNoti[4].addClass('btn-dark');
		} else{
			inputsNoti[4].addClass('btn-outline-dark');
			inputsNoti[4].addClass('disabled');
			inputsNoti[4].removeClass('btn-dark');
		}
	}
	$('#save-noti').submit(function(event) {
		event.preventDefault();
		let postData = {
			title: $('#noti-title').val(),
			day: inputsNoti[1].val(),
			month: inputsNoti[2].val(),
			year: inputsNoti[3].val()
		}
		$.ajax({
			url: '../validate/save_noti.php',
			type: 'POST',
			data: postData,
			success: function(response){
				console.log(response);
				$('#save-noti')[0].reset();
				inputsTaks[2].addClass('btn-outline-dark')
				inputsTaks[2].addClass('disabled')
				$('#alert-save-noti').text(response);
				$('#alert-save-noti').show(500);
				$('#alert-save-noti').hide(3000);
				$('#save-noti').trigger('reset');
				seeNoti();
				seeNotification();
				event.preventDefault();
			}
		})	
	});
	$('#search-diary').keyup(function(event) {
		let search = $('#search-diary').val()
		$.ajax({
			url: '../validate/search_noti.php',
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
			url: '../validate/delete_noti.php',
			type: 'POST',
			data: { idNoti },
			success: function(response){
				seeNoti();
				seeNotification();
				$('#alert-delete-noti').text(response);
				$('#alert-delete-noti').show(500);
				$('#alert-delete-noti').hide(3000);
			}
		})	
	});
	/*
	 * See Noti
	*/
	function seeNoti(){
		$.ajax({
			url: '../validate/see_noti.php',
			type: 'POST',
			success: function(response){
				let notis = JSON.parse(response);
				let templete = '';

				notis.forEach(noti =>{
					templete += `
						<tr idRow="${noti.id}">
						<td>
							${noti.title}
						</td>
						<td>
							${noti.date}
						</td>
						<td>
							${noti.day}/${noti.month}/${noti.year}
						</td>
						<td class="center-xy">
							<i class="bi-trash-fill text-danger lead noti-delete"></i>
						</td>
						</tr>
					`
				})

				$('#table-body-noti').html(templete)
				
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
			url: '../validate/see_noti.php',
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
	
					if (resultMonth < 0) {
						dateLimit = 'Tiempo terminado';
						color = 'secondary'
					}
					else if (resultMonth == 0){
						let daySee = dayJson - dayVal;
						dateLimit = daySee + ' dias';

						if (daySee == 0) {
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
						<tr>
							<td>
								Entregar: <b class="text-info">${noti.title}</b>
							</td>
							<td>
								<b class="text-${color}">${dateLimit}</b>
							</td>
						</tr>
					`
					hideIcoNoti(icoNoti,itemNoti);
				})

				$('#noti-table-primary').html(templete);				
			}
		})	
		$.ajax({
			url: '../validate/see_task.php',
			type: 'POST',
			success: function(response){
				let tasks = JSON.parse(response);

				let templete = '';
				tasks.forEach(task =>{
					templete += `
						<tr>
							<td class="text-info">
								<b>${task.descript}</b>
							</td>
							<td></td>
						</tr>
					`
				})
				$('#noti-table-primary').html(templete)
			}
		})	
	}
});