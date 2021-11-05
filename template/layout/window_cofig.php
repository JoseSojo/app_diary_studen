<div class="container-fulid my-5 px-md-5 px-2" id="config">
	<!-- DATA PERSON -->
	<form class="row mt-5" autocomplete="off" id="form-config">
		<h4 class="lead col-12 mt-4">Completa tus datos</h4>
		<!-- NAME -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<label class="bg-dark text-light center-xy col-2 col-md-3" for="name"> 
				<i class="lead bi-person-fill"></i>
			</label>
			<input type="text" class="form-control border-dark rounded-0 shadow-none" id="name" placeholder="Nombre">
		</div>
		<!-- SURNAME -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<label class="bg-dark text-light center-xy col-2 col-md-3" for="surname"> 
				<i class="lead bi-person"></i>
			</label>
			<input type="text" class="form-control border-dark rounded-0 shadow-none" id="surname" placeholder="Apellido">
		</div>
		<!-- RACE -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<label class="bg-dark text-light center-xy col-2 col-md-3" for="univ-race"> 
				<i class="lead bi-clipboard"></i>
			</label>
			<input type="text" class="form-control border-dark rounded-0 shadow-none" id="univ-race" placeholder="Carrera Universitaria">
		</div>
		<!-- UNIV -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<label class="bg-dark text-light center-xy col-2 col-md-3" for="univ"> 
				<i class="lead bi-building"></i>
			</label>
			<input type="text" class="form-control border-dark rounded-0 shadow-none" id="univ" placeholder="Universidad">
		</div>
		<!-- DURACION RACE -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<label class="bg-dark text-light center-xy col-2 col-md-3" for="duration-race"> 
				<i class="lead bi-speedometer"></i>
			</label>
			<input type="text" class="form-control border-dark rounded-0 shadow-none" id="duration-race" placeholder="Años duracion de la carrera">
		</div>
		<!-- AGE ADMIN -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<label class="bg-dark text-light center-xy col-2 col-md-3" for="age-admin"> 
				<i class="lead bi-calendar-date-fill"></i>
			</label>
			<input type="text" class="form-control border-dark rounded-0 shadow-none" id="age-admin" placeholder="Edad de ingreso a la universidad">
		</div>
		<!-- YEAR ADMIN -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<label class="bg-dark text-light center-xy col-2 col-md-3" for="year-admin"> 
				<i class="lead bi-calendar-month-fill"></i>
			</label>
			<input type="text" class="form-control border-dark rounded-0 shadow-none" id="year-admin" placeholder="Año de ingreso a la universidad">
		</div>
		<div class="alert alert-success" id="alert-add-data"></div>
		<!-- SUBMIT -->
		<div class="col-11 col-sm-6 m-auto form-group my-3 d-flex">
			<button type="submit" class="btn btn-outline-dark m-auto w-75 rounded-0 disabled" id="btn-submit-data">
				Enviar Datos
				<i class="bi-check-lg text-success lead"></i>
			</button>
		</div>
	</form>
	<!-- DATA MATTER -->
	<div class="row my-3">
		
		<form id="form-matter" class="col-11 col-md-8 m-auto" autocomplete="off">
			<h4 class="lead mb-3">Agrega una asignatura</h4>
			<div class="form-group d-flex">
				<label for="matter" class="col-2 col-md-3 bg-dark text-light center-xy lead bi-clipboard-check">
				</label>
				<input type="text" id="input-matter" class="form-control rounded-0 border-none shadow-none" placeholder="Nombre de la materia">
			</div>
			<div class="alert alert-success" id="alert-add-matter"></div>
			<div class="d-flex">
				<button type="submit" class="btn btn-outline-secondary disabled w-75 m-auto mt-4" id="submit-matter">
					Guardar Materia
					<i class="bi-check-lg text-success lead"></i>
				</button>
			</div>
		</form>
	</div>
</div>